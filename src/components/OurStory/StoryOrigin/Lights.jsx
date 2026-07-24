import { useEffect } from "react";
import { gsap } from "gsap";

const Lights = () => {
  useEffect(() => {
    // Windows Flicker
    gsap.utils.toArray(".window-light").forEach((window, i) => {
      gsap.fromTo(
        window,
        {
          opacity: 0,
          scale: 0.85,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          delay: 3 + i * 0.08,
          ease: "power2.out",
        }
      );

      gsap.to(window, {
        opacity: () => gsap.utils.random(0.65, 1),
        duration: () => gsap.utils.random(1.5, 3),
        delay: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Door Glow
    gsap.fromTo(
      ".door-light",
      {
        opacity: 0,
        scale: 0.4,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 4.6,
        duration: 1,
        ease: "back.out(2)",
      }
    );

    gsap.to(".door-light", {
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Building Glow
    gsap.to(".building", {
      filter:
        "drop-shadow(0 0 30px rgba(34,197,94,.25)) drop-shadow(0 0 80px rgba(34,197,94,.15))",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Yuvalay Sign Pulse
    gsap.to(".building text", {
      opacity: 0.85,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Beacon Pulse
    gsap.to(".building circle", {
      scale: 1.4,
      transformOrigin: "center",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "power1.inOut",
    });
  }, []);

  return null;
};

export default Lights;