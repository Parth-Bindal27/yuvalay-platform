import { useEffect } from "react";
import { gsap } from "gsap";

const Lights = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Windows breathing glow
      gsap.to(".window-light", {
        opacity: () => gsap.utils.random(0.65, 1),
        duration: () => gsap.utils.random(1.5, 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.08,
          from: "random",
        },
      });

      // Door pulse
      gsap.to(".door-light", {
        opacity: 0.75,
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center",
      });

      // Building breathing
      gsap.to(".building", {
        filter:
          "drop-shadow(0 0 40px rgba(34,197,94,.35)) drop-shadow(0 0 90px rgba(34,197,94,.18))",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Yuvalay text
      gsap.to(".building text", {
        opacity: 0.75,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Beacon circles
      gsap.utils.toArray(".building circle").forEach((circle, i) => {
        gsap.to(circle, {
          scale: 1.5,
          opacity: 0.25,
          transformOrigin: "center",
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default Lights;