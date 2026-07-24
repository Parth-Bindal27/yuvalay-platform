// timeline.js

import { gsap } from "gsap";

export default function createStoryTimeline({
  audio,
  title1,
  title2,
  title3,
  onComplete,
}) {
  audio.volume = 0;

  audio.play().catch(() => {});

  gsap.to(audio, {
    volume: 0.45,
    duration: 3,
    ease: "power2.out",
  });

  // Continuous Camera Motion
  gsap.to(".story-problem", {
    scale: 1.04,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Energy Rings

  gsap.to(".ring-one", {
    rotate: 360,
    duration: 16,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".ring-two", {
    rotate: -360,
    duration: 22,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".ring-three", {
    rotate: 360,
    duration: 28,
    repeat: -1,
    ease: "none",
  });

  // Floating Objects

  gsap.utils.toArray(".floating-object").forEach((el) => {
    gsap.to(el, {
      x: "random(-180,180)",
      y: "random(-180,180)",
      z: "random(-250,250)",
      rotateX: "random(-180,180)",
      rotateY: "random(-180,180)",
      duration: "random(9,16)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  const tl = gsap.timeline({
    delay: 1.5,
    defaults: {
      ease: "expo.out",
    },
    onComplete: () => {
      gsap.to(audio, {
        volume: 0,
        duration: 2,
      });

      gsap.to(".story-problem", {
        opacity: 0,
        duration: 1.4,
        delay: 1,
        onComplete,
      });
    },
  });

  const reveal = (element) => {
    tl

      .fromTo(
        element,
        {
          opacity: 0,
          scale: 0.12,
          rotationX: -90,
          filter: "blur(60px)",
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 1.5,
        }
      )

      .to(element, {
        scale: 1.08,
        duration: 0.3,
      })

      .to(element, {
        scale: 1,
        duration: 0.2,
      })

      .to(
        element,
        {
          opacity: 0,
          scale: 2.2,
          filter: "blur(40px)",
          duration: 0.8,
        },
        "+=0.4"
      );
  };

  reveal(title1);

  reveal(title2);

  tl

    .fromTo(
      title3,
      {
        opacity: 0,
        scale: 0.08,
        rotationX: -90,
        filter: "blur(120px)",
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        filter: "blur(0px)",
        duration: 2.2,
      }
    )

    .to(title3, {
      scale: 1.12,
      duration: 0.4,
    })

    .to(title3, {
      scale: 1,
      duration: 0.3,
    })

    .to(".energy-core", {
      scale: 6,
      opacity: 0,
      duration: 1,
    })

    .to(
      ".energy-ring",
      {
        scale: 2,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
      },
      "<"
    )

    .to(
      ".floating-object",
      {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
      },
      "<"
    )

    .to(
      ".particle-canvas",
      {
        opacity: 0,
        duration: 1,
      },
      "<"
    )

    .to(
      title3,
      {
        opacity: 0,
        scale: 2,
        filter: "blur(50px)",
        duration: 1,
      },
      "<"
    );

  return tl;
}