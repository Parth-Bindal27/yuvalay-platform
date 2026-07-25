import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";

import { useParticleController } from "./ParticleController";

export default function VadodaraPin() {

    const { mode } = useParticleController();

    const pin = useRef();

    useEffect(() => {

        if (!pin.current) return;

        if (mode !== "vadodara") {

            pin.current.visible = false;

            return;

        }

        pin.current.visible = true;

        pin.current.scale.set(0, 0, 0);

        pin.current.position.set(
            0,
            3,
            0.2
        );

        gsap.to(pin.current.position, {

            y: -0.45,

            duration: 1.2,

            ease: "bounce.out"

        });

        gsap.to(pin.current.scale, {

            x: 1,

            y: 1,

            z: 1,

            duration: 0.6,

            ease: "back.out(2)"

        });

    }, [mode]);

    useFrame(({ clock }) => {

        if (!pin.current) return;

        if (mode !== "vadodara") return;

        const pulse = 1 + Math.sin(clock.elapsedTime * 4) * 0.08;

        pin.current.scale.set(

            pulse,

            pulse,

            pulse

        );

    });

    return (

        <group ref={pin} visible={false}>

            {/* Head */}

            <mesh>

                <sphereGeometry args={[0.12, 32, 32]} />

                <meshBasicMaterial color="#ff2d2d" />

            </mesh>

            {/* Tail */}

            <mesh position={[0, -0.18, 0]}>

                <coneGeometry args={[0.08, 0.25, 32]} />

                <meshBasicMaterial color="#ff2d2d" />

            </mesh>

        </group>

    );

}