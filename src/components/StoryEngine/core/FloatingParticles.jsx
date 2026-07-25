import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useParticleController } from "./ParticleController";

import earthMask from "../assets/earth-mask.png";
import indiaSVG from "../assets/india.svg";
import gujaratSVG from "../assets/gujarat.svg";

import generateEarth from "../utils/generateEarth";
import generateIndia from "../utils/generateIndia";
import generateGujarat from "../utils/generateGujarat";

const COUNT = 10000;
const RANDOM_RADIUS = 22;

export default function FloatingParticles() {

    const particles = useRef();
    const geometryRef = useRef();

    const { mode } = useParticleController();

    //-----------------------------------------
    // Shape Buffers
    //-----------------------------------------

    const randomPositions = useRef(null);
    const targetPositions = useRef(null);

    const earthPositions = useRef(null);
    const indiaPositions = useRef(null);
    const gujaratPositions = useRef(null);
    const scatterVelocity = useRef([]);

    //-----------------------------------------
    // Geometry
    //-----------------------------------------

    const { positions, colors } = useMemo(() => {

        const positions = new Float32Array(COUNT * 3);
        const colors = new Float32Array(COUNT * 3);

        const color = new THREE.Color();

        for (let i = 0; i < COUNT; i++) {

            const r = Math.random() * RANDOM_RADIUS;

            const theta = Math.random() * Math.PI * 2;

            const phi = Math.acos(Math.random() * 2 - 1);

            positions[i * 3] =
                r *
                Math.sin(phi) *
                Math.cos(theta);

            positions[i * 3 + 1] =
                r *
                Math.sin(phi) *
                Math.sin(theta);

            positions[i * 3 + 2] =
                r *
                Math.cos(phi);

            color.setHSL(
                0.38,
                1,
                0.45 + Math.random() * 0.4
            );

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

        }

        randomPositions.current = new Float32Array(positions);

        targetPositions.current = new Float32Array(positions);

        return {

            positions,

            colors

        };

    }, []);

    //-----------------------------------------
    // Load Earth
    //-----------------------------------------

    useEffect(() => {

        const img = new Image();

        img.src = earthMask;

        img.onload = () => {

            const canvas = document.createElement("canvas");

            canvas.width = img.width;

            canvas.height = img.height;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(

                0,
                0,
                img.width,
                img.height

            );

            earthPositions.current = generateEarth(

                imageData,

                COUNT,

                4

            );

        };

    }, []);

    //-----------------------------------------
    // Load India SVG
    //-----------------------------------------

    useEffect(() => {

        async function loadIndia() {

            indiaPositions.current = await generateIndia(

                indiaSVG,

                COUNT

            );

        }

        loadIndia();

    }, []);

    //-----------------------------------------
    // Load Gujarat SVG
    //-----------------------------------------


    useEffect(() => {

        async function loadGujarat() {

            gujaratPositions.current =
                await generateGujarat(

                    gujaratSVG,

                    COUNT

                );

        }

        loadGujarat();

    }, []);

    //-----------------------------------------
    // Change Shape
    //-----------------------------------------

    useEffect(() => {

        if (!targetPositions.current) return;

        switch (mode) {

            case "float":

                targetPositions.current.set(

                    randomPositions.current

                );

                break;

            case "collapse":

                for (let i = 0; i < COUNT; i++) {

                    targetPositions.current[i * 3] = 0;

                    targetPositions.current[i * 3 + 1] = 0;

                    targetPositions.current[i * 3 + 2] = 0;

                }

                break;

            case "earth":

                if (earthPositions.current) {

                    targetPositions.current.set(

                        earthPositions.current

                    );

                }

                break;

            case "india":

                if (indiaPositions.current) {

                    targetPositions.current.set(

                        indiaPositions.current

                    );

                }

                break;

            case "gujarat":

                if (gujaratPositions.current) {

                    targetPositions.current.set(

                        gujaratPositions.current

                    );

                }

                break;

            case "scatter": {

    scatterVelocity.current = [];

    for (let i = 0; i < COUNT; i++) {

        // Random direction
        const dir = new THREE.Vector3(
            Math.random() - 0.5,
            Math.random() - 0.5,
            0 // <- IMPORTANT (don't move towards camera)
        ).normalize();

        scatterVelocity.current.push({

            x: dir.x * (0.05 + Math.random() * 0.08),

            y: dir.y * (0.05 + Math.random() * 0.08),

            z: 0

        });

    }

    break;
}

            default:

                break;

        }

    }, [mode]);
        //-----------------------------------------
    // Animation Loop
    //-----------------------------------------

    useFrame(({ clock, mouse }) => {

        if (!geometryRef.current) return;

        const attribute = geometryRef.current.attributes.position;

        const array = attribute.array;

        //-----------------------------------------
        // Smooth Morph
        //-----------------------------------------

        if (targetPositions.current) {

            for (let i = 0; i < array.length; i++) {

                array[i] += (

                    targetPositions.current[i] -

                    array[i]

                ) * 0.055;

            }

            attribute.needsUpdate = true;

        }

        if (mode === "scatter") {

    for (let i = 0; i < COUNT; i++) {

        array[i * 3] += scatterVelocity.current[i].x;

        array[i * 3 + 1] += scatterVelocity.current[i].y;

        // Don't move in Z direction
        // This keeps particles far from camera
        array[i * 3 + 2] *= 0.995;

    }

    attribute.needsUpdate = true;

}

        if (!particles.current) return;

        //-----------------------------------------
        // FLOAT MODE
        //-----------------------------------------

        if (mode === "float") {

            particles.current.rotation.y += 0.0008;

            particles.current.rotation.x =

                Math.sin(clock.elapsedTime * 0.2) * 0.04;

            particles.current.rotation.z =

                Math.cos(clock.elapsedTime * 0.15) * 0.02;

            particles.current.position.x =

                THREE.MathUtils.lerp(

                    particles.current.position.x,

                    mouse.x * 0.45,

                    0.03

                );

            particles.current.position.y =

                THREE.MathUtils.lerp(

                    particles.current.position.y,

                    mouse.y * 0.25,

                    0.03

                );

        }

        //-----------------------------------------
        // COLLAPSE
        //-----------------------------------------

        if (mode === "collapse") {

            particles.current.rotation.y += 0.002;

            particles.current.rotation.x =

                THREE.MathUtils.lerp(

                    particles.current.rotation.x,

                    0,

                    0.05

                );

            particles.current.rotation.z =

                THREE.MathUtils.lerp(

                    particles.current.rotation.z,

                    0,

                    0.05

                );

            particles.current.position.x =

                THREE.MathUtils.lerp(

                    particles.current.position.x,

                    0,

                    0.05

                );

            particles.current.position.y =

                THREE.MathUtils.lerp(

                    particles.current.position.y,

                    0,

                    0.05

                );

        }

        //-----------------------------------------
        // EARTH
        //-----------------------------------------

        if (mode === "earth") {

            particles.current.rotation.y += 0.0012;

            particles.current.rotation.x =

                THREE.MathUtils.lerp(

                    particles.current.rotation.x,

                    0.15,

                    0.03

                );

            particles.current.rotation.z =

                THREE.MathUtils.lerp(

                    particles.current.rotation.z,

                    0,

                    0.03

                );

            particles.current.position.y =

                Math.sin(clock.elapsedTime * 0.5) * 0.08;

            particles.current.position.x =

                THREE.MathUtils.lerp(

                    particles.current.position.x,

                    0,

                    0.04

                );

        }

        //-----------------------------------------
        // INDIA
        //-----------------------------------------

        if (mode === "india") {

            particles.current.rotation.y =

                THREE.MathUtils.lerp(

                    particles.current.rotation.y,

                    0,

                    0.05

                );

            particles.current.rotation.x =

                THREE.MathUtils.lerp(

                    particles.current.rotation.x,

                    0,

                    0.05

                );

            particles.current.rotation.z =

                THREE.MathUtils.lerp(

                    particles.current.rotation.z,

                    0,

                    0.05

                );

            particles.current.position.x =

                THREE.MathUtils.lerp(

                    particles.current.position.x,

                    0,

                    0.05

                );

            particles.current.position.y =

                THREE.MathUtils.lerp(

                    particles.current.position.y,

                    0,

                    0.05

                );

        }

    });
        //-----------------------------------------
    // Render
    //-----------------------------------------

    return (

        <points ref={particles} frustumCulled={false}>

            <bufferGeometry ref={geometryRef}>

                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />

                <bufferAttribute
                    attach="attributes-color"
                    array={colors}
                    count={colors.length / 3}
                    itemSize={3}
                />

            </bufferGeometry>

            <pointsMaterial

    vertexColors

    size={0.018}

    transparent

    opacity={0.38}

    depthWrite={false}

    blending={THREE.AdditiveBlending}

    sizeAttenuation

/>

        </points>

    );

}