const BlueprintSVG = () => {
  return (
    <svg
      className="blueprint-svg blueprint-grid"
      viewBox="0 0 1200 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* OUTER FRAME */}

      <path
        className="blueprint-line"
        d="M240 130 L960 130"
      />

      <path
        className="blueprint-line"
        d="M240 130 L240 560"
      />

      <path
        className="blueprint-line"
        d="M960 130 L960 560"
      />

      <path
        className="blueprint-line"
        d="M240 560 L960 560"
      />

      {/* FLOORS */}

      <path
        className="blueprint-line"
        d="M240 260 L960 260"
      />

      <path
        className="blueprint-line"
        d="M240 390 L960 390"
      />

      {/* CENTER */}

      <path
        className="blueprint-line"
        d="M600 130 L600 560"
      />

      {/* LEFT */}

      <path
        className="blueprint-line"
        d="M360 130 L360 560"
      />

      <path
        className="blueprint-line"
        d="M480 130 L480 560"
      />

      {/* RIGHT */}

      <path
        className="blueprint-line"
        d="M720 130 L720 560"
      />

      <path
        className="blueprint-line"
        d="M840 130 L840 560"
      />

      {/* WINDOWS */}

      {[290, 420, 550, 680, 810].map((x) => (
        <g key={x}>
          <rect
            className="blueprint-line"
            x={x}
            y="170"
            width="40"
            height="50"
          />

          <rect
            className="blueprint-line"
            x={x}
            y="300"
            width="40"
            height="50"
          />

          <rect
            className="blueprint-line"
            x={x}
            y="430"
            width="40"
            height="50"
          />
        </g>
      ))}

      {/* DOOR */}

      <rect
        className="blueprint-line"
        x="560"
        y="450"
        width="80"
        height="110"
      />

      {/* ROOF */}

      <path
        className="blueprint-line"
        d="M200 130 L600 60 L1000 130"
      />
    </svg>
  );
};

export default BlueprintSVG;