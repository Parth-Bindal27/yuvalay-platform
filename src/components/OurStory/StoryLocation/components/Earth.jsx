import { useEffect, useRef } from "react";

const POINTS = 2800;
const RADIUS = 180;
const FOV = 700;

export default function Earth() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];

    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < POINTS; i++) {
      const y = 1 - (i / (POINTS - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);

      const theta = golden * i;

      particles.push({
        x: Math.cos(theta) * radius * RADIUS,
        y: y * RADIUS,
        z: Math.sin(theta) * radius * RADIUS,
      });
    }

    let rotation = 0;
    let frame;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function drawGlow() {
      const g = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        280
      );

      g.addColorStop(0, "rgba(76,255,147,.22)");
      g.addColorStop(0.4, "rgba(76,255,147,.08)");
      g.addColorStop(1, "transparent");

      ctx.fillStyle = g;

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 280, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      drawGlow();

      rotation += 0.0025;

      const render = [];

      particles.forEach((p) => {
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);

        const rx = p.x * cos - p.z * sin;
        const rz = p.x * sin + p.z * cos;

        const depth = FOV / (FOV + rz);

        render.push({
          x: width / 2 + rx * depth,
          y: height / 2 + p.y * depth,
          z: rz,
          scale: depth,
        });
      });

      render.sort((a, b) => a.z - b.z);

      render.forEach((p) => {
        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          Math.max(0.6, p.scale * 2),
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(76,255,147,${
          ((p.z + RADIUS) / (RADIUS * 2)) * 0.95
        })`;

        ctx.shadowBlur = 8;
        ctx.shadowColor = "#4cff93";

        ctx.fill();
      });

      frame = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="earthScene">
      <canvas
        ref={canvasRef}
        className="earthCanvas"
      />
    </div>
  );
}