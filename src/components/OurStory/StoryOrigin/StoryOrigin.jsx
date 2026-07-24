import "./StoryOrigin.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import BlueprintSVG from "./BlueprintSVG";
import Building from "./Building";
import Lights from "./Lights";

const StoryOrigin = ({ onComplete }) => {
  const sceneRef = useRef(null);

  const yearRef = useRef(null);
  const cityRef = useRef(null);

  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0;

      audio.play().catch(() => {});

      gsap.to(audio, {
        volume: 0.45,
        duration: 3,
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (audio) {
          gsap.to(audio, {
            volume: 0,
            duration: 2,
          });
        }

        gsap.to(sceneRef.current, {
          opacity: 0,
          duration: 1.5,
          delay: 1,
          onComplete,
        });
      },
    });

    // Black Hold
    tl.to({}, { duration: 1.2 });

    // 2014
    tl.fromTo(
      yearRef.current,
      {
        opacity: 0,
        scale: 0.35,
        filter: "blur(35px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "expo.out",
      }
    );

    tl.fromTo(
      cityRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      "-=.8"
    );

    tl.to({}, { duration: 2 });

    tl.to([yearRef.current, cityRef.current], {
      opacity: 0,
      y: -25,
      duration: 1,
    });

    // Blueprint Grid
    tl.to(".blueprint-grid", {
      opacity: 1,
      duration: 0.4,
    });

    // Blueprint Lines
    tl.fromTo(
      ".blueprint-line",
      {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        opacity: 1,
        stagger: 0.03,
        duration: 0.45,
        ease: "power2.out",
      }
    );

    tl.to({}, { duration: 0.7 });

    // Building
    tl.fromTo(
      ".building",
      {
        opacity: 0,
        scale: 0.9,
        y: 40,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "expo.out",
      }
    );

    // Windows
    tl.fromTo(
      ".window-light",
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.08,
        duration: 0.22,
        ease: "back.out(2)",
      }
    );

    // Door
    tl.fromTo(
      ".door-light",
      {
        opacity: 0,
        scale: 0.3,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(2)",
      }
    );

    // Camera Push
    tl.to(
      ".story-origin",
      {
        scale: 1.08,
        duration: 4,
        ease: "none",
      },
      "-=.3"
    );

    tl.to({}, { duration: 3 });

    return () => {
      tl.kill();
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <section className="story-origin" ref={sceneRef}>
      <audio
        ref={audioRef}
        src="/audio/story-ambient.mp3"
      />

      <BlueprintSVG />

      <Building />

      <Lights />

      <div className="story-origin-content">
        <h1 ref={yearRef}>2014</h1>

        <h3 ref={cityRef}>Vadodara, India</h3>
      </div>
    </section>
  );
};

export default StoryOrigin;