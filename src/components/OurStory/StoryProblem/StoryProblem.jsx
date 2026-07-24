import "./StoryProblem.css";
import { useEffect, useRef } from "react";
import ParticleCanvas from "./ParticleCanvas";
import FloatingObjects from "./FloatingObjects";
import EnergyRing from "./EnergyRing";
import createStoryTimeline from "./timeline";


const StoryProblem = ({ onComplete }) => {
  const wrapperRef = useRef(null);

  const audioRef = useRef(null);

  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);

  useEffect(() => {
  document.body.style.overflow = "hidden";

  const tl = createStoryTimeline({
    audio: audioRef.current,
    title1: title1Ref.current,
    title2: title2Ref.current,
    title3: title3Ref.current,
    onComplete,
  });

  return () => {
    document.body.style.overflow = "auto";
    tl.kill();
  };
}, [onComplete]);

  return (
    <section className="story-problem" ref={wrapperRef}>
      <audio
        ref={audioRef}
        src="/audio/story-ambient.mp3"
        loop
      />

      <ParticleCanvas />

      <EnergyRing />

      <FloatingObjects />

      <div className="story-overlay" />

      <h2 ref={title1Ref} className="story-title">
        EVERY
      </h2>

      <h2 ref={title2Ref} className="story-title">
        GREAT IDEA
      </h2>

      <h1 ref={title3Ref} className="story-main-title">
        STARTS
        <br />
        WITH
        <br />
        CURIOSITY
      </h1>
    </section>
  );
};

export default StoryProblem;