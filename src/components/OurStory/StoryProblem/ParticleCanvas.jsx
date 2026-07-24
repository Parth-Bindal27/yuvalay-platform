import { useEffect, useRef } from "react";

const COUNT = 220;

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;

        this.radius = Math.random() * 2.5 + 0.5;

        this.speedX = (Math.random() - 0.5) * 0.18;
        this.speedY = (Math.random() - 0.5) * 0.18;

        this.alpha = Math.random() * 0.8 + 0.2;

        this.green = Math.random() > 0.6;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;

        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw() {
        ctx.beginPath();

        ctx.fillStyle = this.green
          ? `rgba(34,197,94,${this.alpha})`
          : `rgba(255,255,255,${this.alpha})`;

        ctx.shadowBlur = 18;
        ctx.shadowColor = this.green
          ? "#22c55e"
          : "#ffffff";

        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }
    }

    for (let i = 0; i < COUNT; i++) {
      particles.push(new Particle());
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();

            ctx.strokeStyle = `rgba(34,197,94,${
              (130 - dist) / 1300
            })`;

            ctx.lineWidth = 1;

            ctx.moveTo(
              particles[a].x,
              particles[a].y
            );

            ctx.lineTo(
              particles[b].x,
              particles[b].y
            );

            ctx.stroke();
          }
        }
      }
    }

    let animation;

    function render() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();

      animation = requestAnimationFrame(render);
    }

    render();

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
    />
  );
}