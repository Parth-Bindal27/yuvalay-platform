import "./Intro.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaForward } from "react-icons/fa6";

const Intro = () => {
  const ysStoryIntroRef = useRef(null);
  const ysStoryParticleRef = useRef(null);
  const ysStoryLineOneRef = useRef(null);
  const ysStoryLineTwoRef = useRef(null);
  const ysStoryPresentsRef = useRef(null);
  const ysStoryTitleRef = useRef(null);
  const ysStorySubtitleRef = useRef(null);
  const ysStorySkipBtnRef = useRef(null);

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const tl = gsap.timeline();

    tl
      .fromTo(
        ysStoryParticleRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
        }
      )

      .to(ysStoryParticleRef.current, {
        scale: 3,
        duration: 1.5,
        repeat: 1,
        yoyo: true,
      })

      .to(ysStoryParticleRef.current, {
        opacity: 0,
        duration: 0.5,
      })

      .fromTo(
        ysStoryLineOneRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )

      .to(ysStoryLineOneRef.current, {
        opacity: 0,
        delay: 1.4,
      })

      .fromTo(
        ysStoryLineTwoRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )

      .to(ysStoryLineTwoRef.current, {
        opacity: 0,
        delay: 1.8,
      })

      .fromTo(
        ysStoryPresentsRef.current,
        {
          opacity: 0,
          letterSpacing: "40px",
        },
        {
          opacity: 1,
          letterSpacing: "8px",
          duration: 1.6,
        }
      )

      .fromTo(
        ysStoryTitleRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      )

      .fromTo(
        ysStorySubtitleRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      )

      .fromTo(
        ysStorySkipBtnRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
        }
      );

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      tl.kill();
    };
  }, []);

  const skipIntro = () => {
    gsap.to(ysStoryIntroRef.current, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        setFinished(true);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      },
    });
  };

  if (finished) return null;

  return (
    <section
      className="ys-story-intro"
      ref={ysStoryIntroRef}
    >
      <button
        className="ys-story-skip-btn"
        ref={ysStorySkipBtnRef}
        onClick={skipIntro}
      >
        Skip Intro <FaForward />
      </button>

      <div
        className="ys-story-particle"
        ref={ysStoryParticleRef}
      />

      <h2
        ref={ysStoryLineOneRef}
        className="ys-story-line"
      >
        Every Great Innovation
      </h2>

      <h2
        ref={ysStoryLineTwoRef}
        className="ys-story-line"
      >
        Started With Curiosity.
      </h2>

      <div
        className="ys-story-presents"
        ref={ysStoryPresentsRef}
      >
        YUVALAY PRESENTS
      </div>

      <h1
        ref={ysStoryTitleRef}
        className="ys-story-title"
      >
        OUR STORY
      </h1>

      <p
        ref={ysStorySubtitleRef}
        className="ys-story-subtitle"
      >
        A journey of dreams, innovation, community and young minds.
      </p>
    </section>
  );
};

export default Intro;