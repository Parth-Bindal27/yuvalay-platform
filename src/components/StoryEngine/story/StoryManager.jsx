import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import StoryOverlay from "./StoryOverlay";
import storyTimeline from "./storyTimeline";

import { useNavigate } from "react-router-dom";

import { useParticleController } from "../core/ParticleController";

export default function StoryManager() {

    const { setMode } = useParticleController();

    const [sceneIndex, setSceneIndex] = useState(0);

    const timeline = useRef(null);

    const navigate = useNavigate();


    useEffect(() => {

        setMode(storyTimeline[0].mode);

        const tl = gsap.timeline({

            // Play only once
            repeat: 0,

            defaults: {

                ease: "power3.inOut"

            },

            onComplete: () => {

    gsap.to(".story-scene-box", {

        opacity: 0,

        duration: 0.6

    });

    gsap.delayedCall(0.8, () => {

        navigate("/our-story/history");

    });

}

        });

        storyTimeline.forEach((scene, index) => {

            //-----------------------------------------
            // Fade Out Previous Text
            //-----------------------------------------

            if (index !== 0) {

                tl.to(".story-scene-box", {

                    opacity: 0,

                    scale: 0.92,

                    filter: "blur(10px)",

                    duration: 0.8

                });

            }

            //-----------------------------------------
            // Change Particle Scene
            //-----------------------------------------

            tl.call(() => {

                setMode(scene.mode);

            });

            //-----------------------------------------
            // Special delay for Vadodara
            //-----------------------------------------

            if (scene.mode === "vadodara") {

                tl.to({}, {

                    duration: 2.3

                });

            }

            //-----------------------------------------
            // Change Text
            //-----------------------------------------

            tl.call(() => {

                setSceneIndex(index);

            });

            //-----------------------------------------
            // Fade In Text
            //-----------------------------------------

            tl.to(".story-scene-box", {

                opacity: 1,

                scale: 1,

                filter: "blur(0px)",

                duration: 0.9

            });

            //-----------------------------------------
            // Hold
            //-----------------------------------------

            tl.to({}, {

                duration: scene.duration / 1000

            });

        });

        timeline.current = tl;

        return () => {

            tl.kill();

        };

    }, [setMode]);

    return (

        <StoryOverlay

            scene={storyTimeline[sceneIndex]}

        />

    );

}