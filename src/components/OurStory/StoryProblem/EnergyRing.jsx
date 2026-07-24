import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function EnergyRing() {
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);

  useEffect(() => {
    gsap.to(ring1.current, {
      rotate: 360,
      scale: 1.08,
      duration: 16,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });

    gsap.to(ring2.current, {
      rotate: -360,
      scale: 1.18,
      duration: 22,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });

    gsap.to(ring3.current, {
      rotate: 360,
      scale: 0.92,
      duration: 28,
      repeat: -1,
      ease: "none",
      yoyo: true,
    });

    gsap.to(".energy-ring", {
      opacity: 0.75,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="energy-wrapper">
      <div ref={ring1} className="energy-ring ring-one" />
      <div ref={ring2} className="energy-ring ring-two" />
      <div ref={ring3} className="energy-ring ring-three" />
      <div className="energy-core" />
    </div>
  );
}