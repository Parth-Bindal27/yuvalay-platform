import { useEffect, useRef } from "react";

export default function SpaceCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let animationId;

    const STAR_COUNT = 1200;
    const stars = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.35 + 0.05,
      });
    }

    function drawBackground() {
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        80,
        width / 2,
        height / 2,
        Math.max(width, height)
      );

      gradient.addColorStop(0, "#04150d");
      gradient.addColorStop(0.35, "#020904");
      gradient.addColorStop(0.75, "#010101");
      gradient.addColorStop(1, "#000000");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStars(time) {
      stars.forEach((star) => {
        const opacity =
          0.25 +
          Math.abs(Math.sin(time * 0.00035 * star.speed + star.alpha)) * 0.75;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(90,255,170,${opacity})`;

        ctx.shadowBlur = 12;
        ctx.shadowColor = "#3cff92";

        ctx.fill();
      });

      ctx.shadowBlur = 0;
    }

    function animate(time) {
      ctx.clearRect(0, 0, width, height);

      drawBackground();
      drawStars(time);

      animationId = requestAnimationFrame(animate);
    }

    animate(0);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="spaceCanvas"
    />
  );
}