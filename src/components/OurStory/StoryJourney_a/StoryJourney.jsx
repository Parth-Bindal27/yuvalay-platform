import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./StoryJourney.css";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import ChapterNavigator from "./components/ChapterNavigator/ChapterNavigator";
import StoryProblem from "./scenes/StoryProblem/StoryProblem";


import StorySpark from "./scenes/StorySpark/StorySpark";

gsap.registerPlugin(ScrollTrigger);

export default function StoryJourney() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const chapterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Progress Bar
      tl.to(
        progressRef.current,
        {
          scaleX: 1,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Chapter Fade In
      tl.fromTo(
        chapterRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        },
        0
      );

      // Chapter Fade Out
      tl.to(
        chapterRef.current,
        {
          opacity: 0,
          y: -40,
          duration: 0.3,
        },
        0.9
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <section
    ref={sectionRef}
    className="story-journey"
  >
    {/* Background */}
    <div className="story-bg"></div>
    <div className="story-noise"></div>
    <div className="story-vignette"></div>

    {/* Scroll Indicator */}
    <ScrollIndicator />

    <ChapterNavigator activeChapter={0} />

    {/* Progress */}
    <div className="story-progress">
      <div
        ref={progressRef}
        className="story-progress-fill"
      />
    </div>

    {/* Chapter */}
    <div
      ref={chapterRef}
      className="story-journey__chapter"
    >
      <span>CHAPTER 01</span>
      <h2>The Spark</h2>
    </div>

    {/* Movie Stage */}
    <div className="story-journey__stage">
      <StorySpark />
      <StoryProblem />
    </div>
  </section>
);
}