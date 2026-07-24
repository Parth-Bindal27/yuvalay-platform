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

    audio.volume = 0;

    audio.play().catch(() => {});

    gsap.to(audio, {
      volume: 0.45,
      duration: 3,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(audio, {
          volume: 0,
          duration: 2,
        });

        gsap.to(sceneRef.current, {
          opacity: 0,
          duration: 1.5,
          delay: 1,
          onComplete,
        });
      },
    });

    tl

      // Black

      .to({}, { duration: 1.5 })

      // 2014

      .fromTo(
        yearRef.current,
        {
          opacity: 0,
          scale: 0.4,
          filter: "blur(40px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "expo.out",
        }
      )

      .fromTo(
        cityRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=.6"
      )

      .to({}, { duration: 2 })

      .to([yearRef.current, cityRef.current], {
        opacity: 0,
        duration: 1,
      })

      // Blueprint

      .fromTo(
        ".blueprint-line",
        {
          drawSVG: "0%",
        },
        {
          drawSVG: "100%",
          duration: 3,
          stagger: .04,
          ease: "power2.out",
        }
      )

      .to(".blueprint-grid", {
        opacity: 1,
        duration: 1,
      })

      .to({}, { duration: 1 })

      // Building

      .fromTo(
        ".building",
        {
          opacity: 0,
          scale: .85,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
        }
      )

      // Lights

      .fromTo(
        ".window-light",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: .08,
          duration: .4,
        }
      )

      .fromTo(
        ".door-light",
        {
          opacity: 0,
          scale: .4,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        }
      )

      .to({}, { duration: 3 });

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

        <h1 ref={yearRef}>
          2014
        </h1>

        <h3 ref={cityRef}>
          Vadodara, India
        </h3>

      </div>

    </section>
  );
};

export default StoryOrigin;