import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./StoryLocation.css";

import SpaceCanvas from "./components/SpaceCanvas";
import GreenDot from "./components/GreenDot";
import Earth from "./components/Earth";
import India from "./components/India";
import Gujarat from "./components/Gujarat";
import Vadodara from "./components/Vadodara";
import Blueprint from "./components/Blueprint";
import DroneHUD from "./components/DroneHUD";

import createTimeline from "./timeline";

export default function StoryLocation({ onComplete }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      createTimeline(sectionRef.current, onComplete);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <section
      ref={sectionRef}
      className="storyLocation"
    >
      <SpaceCanvas />

      <div className="storyLayer">
        <GreenDot />

        <Earth />

        <India />

        <Gujarat />

        <Vadodara />

        <Blueprint />

        <DroneHUD />
      </div>
    </section>
  );
}