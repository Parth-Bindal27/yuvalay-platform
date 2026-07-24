import { gsap } from "gsap";

export const createOriginTimeline = ({
  audio,
  year,
  city,
  onComplete,
}) => {
  if (audio) {
    audio.volume = 0;

    audio.play().catch(() => {});

    gsap.to(audio, {
      volume: 0.45,
      duration: 3,
    });
  }

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
    onComplete: () => {
      if (audio) {
        gsap.to(audio, {
          volume: 0,
          duration: 2,
        });
      }

      onComplete?.();
    },
  });

  // Initial pause

  tl.to({}, { duration: 1.2 });

  // -----------------------------
  // YEAR
  // -----------------------------

  tl.fromTo(
    year,
    {
      opacity: 0,
      scale: 0.35,
      filter: "blur(35px)",
    },
    {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.6,
      ease: "expo.out",
    }
  );

  tl.fromTo(
    city,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "-=.8"
  );

  tl.to({}, { duration: 2 });

  tl.to(
    [year, city],
    {
      opacity: 0,
      y: -25,
      duration: 1,
    }
  );

  // -----------------------------
  // BLUEPRINT
  // -----------------------------

  tl.to(
    ".blueprint-grid",
    {
      opacity: 1,
      duration: 0.4,
    }
  );

  tl.fromTo(
    ".blueprint-line",
    {
      scaleX: 0,
      transformOrigin: "left center",
      opacity: 0,
    },
    {
      scaleX: 1,
      opacity: 1,
      stagger: 0.03,
      duration: 0.45,
      ease: "power2.out",
    }
  );

  tl.to({}, { duration: 0.7 });

  // -----------------------------
  // BUILDING
  // -----------------------------

  tl.fromTo(
    ".building",
    {
      opacity: 0,
      scale: 0.9,
      y: 40,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      ease: "expo.out",
    }
  );

  // -----------------------------
  // WINDOWS
  // -----------------------------

  tl.fromTo(
    ".window-light",
    {
      opacity: 0,
      scale: 0.2,
    },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.08,
      duration: 0.22,
      ease: "back.out(2)",
    }
  );

  tl.fromTo(
    ".door-light",
    {
      opacity: 0,
      scale: 0.3,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(2)",
    }
  );

  // Camera push

  tl.to(
    ".story-origin",
    {
      scale: 1.08,
      duration: 4,
      ease: "none",
    },
    "-=.3"
  );

  tl.to({}, { duration: 3 });

  return tl;
};