import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import StoryOverlay from "./StoryOverlay";
import storyTimeline from "./storyTimeline";

import { useParticleController } from "../core/ParticleController";

export default function StoryManager() {

    const { setMode } = useParticleController();

    const [sceneIndex, setSceneIndex] = useState(0);

    const timeline = useRef(null);

    useEffect(() => {

        setMode(storyTimeline[0].mode);

        const tl = gsap.timeline({

            repeat: -1,

            defaults: {

                ease: "power3.inOut"

            }

        });

        storyTimeline.forEach((scene, index) => {

            //-----------------------------------------
            // Fade Out
            //-----------------------------------------

            if (index !== 0) {

                tl.to(".story-scene-box", {

                    opacity: 0,

                    scale: 0.92,

                    filter: "blur(10px)",

                    duration: 0.9

                });

            }

            //-----------------------------------------
            // Change Scene
            //-----------------------------------------

            tl.call(() => {

                setSceneIndex(index);

                setMode(scene.mode);

            });

            //-----------------------------------------
            // Fade In
            //-----------------------------------------

            tl.to(".story-scene-box", {

                opacity: 1,

                scale: 1,

                filter: "blur(0px)",

                duration: 1

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