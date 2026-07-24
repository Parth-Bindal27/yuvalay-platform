const windows = [
  { x: 292, y: 172 },
  { x: 422, y: 172 },
  { x: 552, y: 172 },
  { x: 682, y: 172 },
  { x: 812, y: 172 },

  { x: 292, y: 302 },
  { x: 422, y: 302 },
  { x: 552, y: 302 },
  { x: 682, y: 302 },
  { x: 812, y: 302 },

  { x: 292, y: 432 },
  { x: 422, y: 432 },
  { x: 552, y: 432 },
  { x: 682, y: 432 },
  { x: 812, y: 432 },
];

const Building = () => {
  return (
    <svg
      className="building"
      viewBox="0 0 1200 700"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Building Body */}

      <rect
        x="240"
        y="130"
        width="720"
        height="430"
        rx="6"
        fill="#06110a"
        stroke="#22c55e"
        strokeWidth="2"
      />

      {/* Roof */}

      <polygon
        points="200,130 600,60 1000,130"
        fill="#0b1b12"
        stroke="#22c55e"
        strokeWidth="2"
      />

      {/* Floors */}

      <line
        x1="240"
        y1="260"
        x2="960"
        y2="260"
        stroke="#184d2c"
        strokeWidth="2"
      />

      <line
        x1="240"
        y1="390"
        x2="960"
        y2="390"
        stroke="#184d2c"
        strokeWidth="2"
      />

      {/* Windows */}

      {windows.map((w, i) => (
        <rect
          key={i}
          className="window-light"
          x={w.x}
          y={w.y}
          width="40"
          height="50"
          rx="2"
        />
      ))}

      {/* Door */}

      <rect
        className="door-light"
        x="560"
        y="450"
        width="80"
        height="110"
        rx="4"
      />

      {/* Yuvalay */}

      <text
        x="600"
        y="95"
        textAnchor="middle"
        fill="#dfffe7"
        fontSize="38"
        fontWeight="700"
        letterSpacing="8"
      >
        YUVALAY
      </text>

      {/* Small Light */}

      <circle
        cx="600"
        cy="32"
        r="5"
        fill="#22c55e"
      />

      <circle
        cx="600"
        cy="32"
        r="12"
        fill="none"
        stroke="#22c55e"
        strokeWidth="1"
        opacity=".5"
      />

      <circle
        cx="600"
        cy="32"
        r="24"
        fill="none"
        stroke="#22c55e"
        strokeWidth=".5"
        opacity=".25"
      />
    </svg>
  );
};

export default Building;