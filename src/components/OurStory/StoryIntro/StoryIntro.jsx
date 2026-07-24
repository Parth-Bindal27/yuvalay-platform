import "./StoryIntro.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaForward } from "react-icons/fa6";
import particles from "./particles";

const StoryIntro = ({ onComplete }) => {
  const introRef = useRef(null);
  const flashRef = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const presentsRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const particleEls = gsap.utils.toArray(".ys-particle");

    // Particles
    particleEls.forEach((particle) => {
      gsap.fromTo(
        particle,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: gsap.utils.random(0.2, 0.8),
          scale: 1,
          duration: gsap.utils.random(1, 2),
          delay: gsap.utils.random(0, 1),
        }
      );

      gsap.to(particle, {
        y: gsap.utils.random(-80, 80),
        x: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(8, 15),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl

      .fromTo(
        line1Ref.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )

      .to(line1Ref.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1,
      })

      .fromTo(
        line2Ref.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )

      .to(line2Ref.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1,
      })

      .fromTo(
        presentsRef.current,
        {
          opacity: 0,
          letterSpacing: "30px",
        },
        {
          opacity: 1,
          letterSpacing: "8px",
          duration: 1,
        }
      )

      .fromTo(
        titleRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        }
      )

      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
        }
      )

      .to({}, { duration: 2 })

      .to(flashRef.current, {
        opacity: 1,
        duration: 0.15,
      })

      .to(flashRef.current, {
        opacity: 0,
        duration: 0.3,
      });

    return () => {
      document.body.style.overflow = "auto";
      tl.kill();
    };
  }, [onComplete]);

  return (
    <section className="ys-story-intro" ref={introRef}>
      <div className="ys-story-glow"></div>

      <div className="ys-story-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="ys-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <button className="ys-story-skip">
        Skip <FaForward />
      </button>

      <h2 ref={line1Ref} className="ys-line">
        Every Great Innovation
      </h2>

      <h2 ref={line2Ref} className="ys-line">
        Started With Curiosity
      </h2>

      <div ref={presentsRef} className="ys-presents">
        YUVALAY PRESENTS
      </div>

      <h1 ref={titleRef} className="ys-title">
        OUR STORY
      </h1>

      <p ref={subtitleRef} className="ys-subtitle">
        A journey of dreams, innovation and young minds.
      </p>

      <div ref={flashRef} className="ys-flash"></div>
    </section>
  );
};

export default StoryIntro;