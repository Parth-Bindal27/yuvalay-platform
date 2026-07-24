export default function Gujarat() {
  return (
    <div className="gujaratScene">
      <svg
        className="gujaratSVG"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Temporary Gujarat Shape
            Replace with real Gujarat SVG later */}

        <path
          d="
          M132 228
          L170 192
          L220 176
          L272 190
          L304 216
          L326 258
          L312 310
          L278 354
          L232 372
          L184 356
          L150 324
          L126 274
          Z
          "
        />

        {/* Vadodara Marker */}

        <circle
          className="vadodaraMarker"
          cx="255"
          cy="250"
          r="5"
        />
      </svg>
    </div>
  );
}