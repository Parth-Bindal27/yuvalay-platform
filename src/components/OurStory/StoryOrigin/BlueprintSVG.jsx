const BlueprintSVG = () => {
  return (
    <svg
      className="blueprint-svg blueprint-grid"
      viewBox="0 0 1200 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Building */}

      <rect
        className="blueprint-line"
        x="240"
        y="130"
        width="720"
        height="430"
      />

      {/* Roof */}

      <polygon
        className="blueprint-line"
        points="200,130 600,60 1000,130"
      />

      {/* Floors */}

      <line className="blueprint-line" x1="240" y1="260" x2="960" y2="260" />

      <line className="blueprint-line" x1="240" y1="390" x2="960" y2="390" />

      {/* Columns */}

      {[360, 480, 600, 720, 840].map((x) => (
        <line
          key={x}
          className="blueprint-line"
          x1={x}
          y1="130"
          x2={x}
          y2="560"
        />
      ))}

      {/* Windows */}

      {[290, 420, 550, 680, 810].map((x) =>
        [170, 300, 430].map((y, i) => (
          <rect
            key={`${x}-${y}`}
            className="blueprint-line"
            x={x}
            y={y}
            width="40"
            height="50"
            rx="2"
          />
        ))
      )}

      {/* Door */}

      <rect
        className="blueprint-line"
        x="560"
        y="450"
        width="80"
        height="110"
      />

      {/* Roof Support */}

      <line
        className="blueprint-line"
        x1="600"
        y1="60"
        x2="600"
        y2="130"
      />

      {/* Blueprint Dimension Lines */}

      <line
        className="blueprint-line"
        x1="180"
        y1="130"
        x2="180"
        y2="560"
      />

      <line
        className="blueprint-line"
        x1="180"
        y1="130"
        x2="210"
        y2="130"
      />

      <line
        className="blueprint-line"
        x1="180"
        y1="560"
        x2="210"
        y2="560"
      />

      <line
        className="blueprint-line"
        x1="240"
        y1="610"
        x2="960"
        y2="610"
      />

      <line
        className="blueprint-line"
        x1="240"
        y1="590"
        x2="240"
        y2="620"
      />

      <line
        className="blueprint-line"
        x1="960"
        y1="590"
        x2="960"
        y2="620"
      />

      {/* Measurement Marks */}

      {[300, 420, 540, 660, 780, 900].map((x) => (
        <line
          key={x}
          className="blueprint-line"
          x1={x}
          y1="605"
          x2={x}
          y2="615"
        />
      ))}

      {/* Corner Circles */}

      {[240, 960].map((x) =>
        [130, 560].map((y) => (
          <circle
            key={`${x}-${y}`}
            className="blueprint-line"
            cx={x}
            cy={y}
            r="5"
          />
        ))
      )}

      {/* Blueprint Crosshair */}

      <circle
        className="blueprint-line"
        cx="1050"
        cy="120"
        r="28"
      />

      <line
        className="blueprint-line"
        x1="1022"
        y1="120"
        x2="1078"
        y2="120"
      />

      <line
        className="blueprint-line"
        x1="1050"
        y1="92"
        x2="1050"
        y2="148"
      />

      {/* Grid Reference */}

      <text
        x="1045"
        y="185"
        fill="#4ade80"
        fontSize="18"
        letterSpacing="3"
      >
        A-01
      </text>

      <text
        x="245"
        y="95"
        fill="#4ade80"
        fontSize="20"
        letterSpacing="5"
      >
        YUVALAY MAKERSPACE
      </text>

      <text
        x="770"
        y="650"
        fill="#4ade80"
        fontSize="16"
        letterSpacing="4"
      >
        SCALE 1:100
      </text>
    </svg>
  );
};

export default BlueprintSVG;