import { gsap } from "gsap";

export default function createTimeline(section, onComplete) {
  const q = gsap.utils.selector(section);

  const tl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
    },
    onComplete: () => {
      onComplete?.();
    },
  });

  // Initial State
  gsap.set(q(".greenDotWrapper"), {
    opacity: 0,
    scale: 0,
  });

  gsap.set(q(".earthScene"), {
    opacity: 0,
    scale: 0.35,
  });

  gsap.set(q(".indiaScene"), {
    opacity: 0,
    scale: 0.5,
  });

  gsap.set(q(".gujaratScene"), {
    opacity: 0,
    scale: 0.6,
  });

  gsap.set(q(".vadodaraScene"), {
    opacity: 0,
    scale: 0.5,
  });

  gsap.set(q(".blueprintScene"), {
    opacity: 0,
    scale: 0.8,
  });

  gsap.set(q(".droneHUD"), {
    opacity: 0,
  });

  /* -------------------------
      GREEN ENERGY
  -------------------------- */

  tl.to(q(".greenDotWrapper"), {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "back.out(2)",
  });

  tl.to(q(".greenDotWrapper"), {
    scale: 1.25,
    duration: 0.8,
    yoyo: true,
    repeat: 1,
  });

  /* -------------------------
      EARTH
  -------------------------- */

  tl.to(q(".earthScene"), {
    opacity: 1,
    scale: 1,
    duration: 2,
  });

  tl.to(
    q(".greenDotWrapper"),
    {
      opacity: 0,
      scale: 3,
      duration: 1,
    },
    "<"
  );

  /* -------------------------
      CAMERA PUSH
  -------------------------- */

  tl.to(q(".earthScene"), {
    scale: 2.5,
    duration: 3,
  });

  /* -------------------------
      INDIA
  -------------------------- */

  tl.to(q(".indiaScene"), {
    opacity: 1,
    scale: 1,
    duration: 1.4,
  });

  tl.to(q(".earthScene"), {
    scale: 4.5,
    duration: 2,
  });

  /* -------------------------
      GUJARAT
  -------------------------- */

  tl.to(q(".gujaratScene"), {
    opacity: 1,
    scale: 1,
    duration: 1,
  });

  tl.to(q(".indiaScene"), {
    scale: 3,
    duration: 2,
  });

  /* -------------------------
      VADODARA
  -------------------------- */

  tl.to(q(".vadodaraScene"), {
    opacity: 1,
    scale: 1,
    duration: 1,
  });

  tl.to(
    [
      q(".indiaScene"),
      q(".gujaratScene"),
      q(".earthScene"),
    ],
    {
      scale: 6,
      duration: 2.5,
    }
  );

  /* -------------------------
      BLUEPRINT
  -------------------------- */

  tl.to(q(".blueprintScene"), {
    opacity: 1,
    scale: 1,
    duration: 2,
  });

  tl.to(
    q(".vadodaraScene"),
    {
      opacity: 0,
      duration: 1,
    },
    "<"
  );

  /* -------------------------
      DRONE HUD
  -------------------------- */

  tl.to(q(".droneHUD"), {
    opacity: 1,
    duration: 1,
  });

  tl.to(q(".blueprintScene"), {
    scale: 1.25,
    duration: 3,
  });

  /* -------------------------
      FADE OUT
  -------------------------- */

  tl.to(
    [
      q(".earthScene"),
      q(".indiaScene"),
      q(".gujaratScene"),
      q(".blueprintScene"),
      q(".droneHUD"),
    ],
    {
      opacity: 0,
      duration: 1.5,
    }
  );

  return tl;
}