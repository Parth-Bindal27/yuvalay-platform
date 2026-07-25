import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./StorySpark.css";

import ParticleCanvas from "./ParticleCanvas";

export default function StorySpark() {
  const chapterRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const quoteRef = useRef(null);
  const highlightRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Orb appears
    tl.fromTo(
      orbRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
      }
    );

    // Orb breathing
    gsap.to(orbRef.current, {
      scale: 1.25,
      repeat: -1,
      yoyo: true,
      duration: 2.4,
      ease: "sine.inOut",
    });

    // Chapter
    tl.to(chapterRef.current, {
      opacity: 1,
      y: -8,
      duration: 0.8,
    });

    // Title
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: -12,
        duration: 1,
      },
      "-=.2"
    );

    // Green underline
    tl.to(
      highlightRef.current,
      {
        scaleX: 1,
        duration: 0.8,
      },
      "-=.5"
    );

    // Subtitle
    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: -8,
        duration: 1,
      },
      "-=.4"
    );

    // Bottom Quote
    tl.to(
      quoteRef.current,
      {
        opacity: 1,
        duration: 1,
      },
      "-=.3"
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="story-spark">

      {/* Canvas */}
      <ParticleCanvas />

      {/* Ambient Light */}
      <div className="story-spark__ambient" />

      {/* First Particle */}
      <div
        ref={orbRef}
        className="story-spark__orb"
      />

      {/* Content */}
      <div className="story-spark__content">

        <span
          ref={chapterRef}
          className="story-spark__chapter"
        >
          CHAPTER 01
        </span>

        <h1
          ref={titleRef}
          className="story-spark__title"
        >
          Every Revolution
          <br />
          Begins With A{" "}
          <span className="story-spark__highlight">
            Question
            <span
              ref={highlightRef}
              className="story-spark__highlight-line"
            />
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="story-spark__subtitle"
        >
          Every invention...
          every breakthrough...
          every idea that changed humanity...
          started with someone asking
          <strong> "What if?"</strong>
        </p>

      </div>

      <p
        ref={quoteRef}
        className="story-spark__quote"
      >
        THE JOURNEY OF CURIOSITY
      </p>

    </section>
  );
}