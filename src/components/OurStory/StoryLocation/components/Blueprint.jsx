export default function Blueprint() {
  return (
    <div className="blueprintScene">
      <svg
        className="blueprintSVG"
        viewBox="0 0 1000 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Frame */}

        <rect
          x="170"
          y="180"
          width="660"
          height="330"
        />

        {/* Roof */}

        <polyline
          points="
          140,180
          500,80
          860,180
          "
        />

        {/* Left Wing */}

        <line x1="300" y1="180" x2="300" y2="510" />

        {/* Right Wing */}

        <line x1="700" y1="180" x2="700" y2="510" />

        {/* Floor */}

        <line x1="170" y1="340" x2="830" y2="340" />

        {/* Door */}

        <rect
          x="450"
          y="340"
          width="100"
          height="170"
        />

        {/* Windows */}

        <rect
          x="220"
          y="230"
          width="90"
          height="70"
        />

        <rect
          x="220"
          y="380"
          width="90"
          height="70"
        />

        <rect
          x="690"
          y="230"
          width="90"
          height="70"
        />

        <rect
          x="690"
          y="380"
          width="90"
          height="70"
        />

        {/* Grid */}

        <line x1="170" y1="260" x2="830" y2="260" />
        <line x1="170" y1="420" x2="830" y2="420" />

        <line x1="235" y1="180" x2="235" y2="510" />
        <line x1="365" y1="180" x2="365" y2="510" />
        <line x1="500" y1="180" x2="500" y2="510" />
        <line x1="635" y1="180" x2="635" y2="510" />
        <line x1="765" y1="180" x2="765" y2="510" />
      </svg>
    </div>
  );
}