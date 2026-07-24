import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function YuvalayBlueprint() {
  const blueprint = useRef(null);

  useEffect(() => {
    const paths = blueprint.current.querySelectorAll("path,line,rect,polyline");

    gsap.set(blueprint.current, {
      opacity: 0,
      scale: 0.6
    });

    paths.forEach((p) => {
      const length =
        p.getTotalLength?.() || 100;

      gsap.set(p, {
        strokeDasharray: length,
        strokeDashoffset: length
      });

      gsap.to(p, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: 15
      });
    });

    gsap.to(blueprint.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: 15,
      ease: "power3.out"
    });

    gsap.to(blueprint.current, {
      filter: "drop-shadow(0 0 30px #39ff88)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="yuvalayBlueprint">
      <svg
        ref={blueprint}
        className="blueprintSVG"
        viewBox="0 0 700 500"
      >
        {/* Outer */}

        <rect
          x="90"
          y="110"
          width="520"
          height="260"
        />

        {/* Roof */}

        <polyline
          points="
          70,110
          350,40
          630,110
          "
        />

        {/* Floor */}

        <line
          x1="90"
          y1="240"
          x2="610"
          y2="240"
        />

        {/* Center */}

        <line
          x1="350"
          y1="110"
          x2="350"
          y2="370"
        />

        {/* Left Windows */}

        <rect
          x="130"
          y="150"
          width="70"
          height="60"
        />

        <rect
          x="130"
          y="260"
          width="70"
          height="60"
        />

        {/* Right Windows */}

        <rect
          x="500"
          y="150"
          width="70"
          height="60"
        />

        <rect
          x="500"
          y="260"
          width="70"
          height="60"
        />

        {/* Door */}

        <rect
          x="310"
          y="255"
          width="80"
          height="115"
        />
      </svg>
    </div>
  );
}