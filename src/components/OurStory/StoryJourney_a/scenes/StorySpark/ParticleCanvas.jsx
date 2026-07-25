import { useEffect, useRef } from "react";
import "./ParticleCanvas.css";

const PARTICLE_COUNT = 350;

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const center = {
      x: width / 2,
      y: height / 2,
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * 350 + 40;

        this.speed = 0.0008 + Math.random() * 0.0015;

        this.size = Math.random() * 2.5 + 0.5;

        this.alpha = Math.random() * 0.6 + 0.2;

        this.offset = Math.random() * 1000;

        this.twinkle = Math.random() * Math.PI * 2;
      }

      update(time) {
        this.angle += this.speed;

        this.twinkle += 0.03;

        const wave =
          Math.sin(time * 0.0004 + this.offset) * 12;

        this.x =
          center.x +
          Math.cos(this.angle) *
            (this.distance + wave);

        this.y =
          center.y +
          Math.sin(this.angle) *
            (this.distance + wave);
      }

      draw(ctx) {
        const glow =
          6 + Math.sin(this.twinkle) * 4;

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(30,255,150,${this.alpha})`;

        ctx.shadowBlur = glow;

        ctx.shadowColor = "#18ff8c";

        ctx.fill();
      }
    }

    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    let shootingStars = [];

    function createShootingStar() {
      shootingStars.push({
        x: -200,
        y: Math.random() * height * 0.6,

        vx: 14 + Math.random() * 6,
        vy: 4 + Math.random() * 2,

        length: 120,
      });
    }

    let lastShoot = 0;

    function animate(time) {
      ctx.clearRect(0, 0, width, height);

      // soft glow
      const bg = ctx.createRadialGradient(
        center.x,
        center.y,
        0,
        center.x,
        center.y,
        650
      );

      bg.addColorStop(
        0,
        "rgba(0,255,140,.08)"
      );

      bg.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(time);
        p.draw(ctx);
      });

      // Central energy

      const pulse =
        18 + Math.sin(time * 0.003) * 3;

      const g = ctx.createRadialGradient(
        center.x,
        center.y,
        0,
        center.x,
        center.y,
        pulse * 4
      );

      g.addColorStop(0, "#7fffd4");
      g.addColorStop(0.4, "#1aff8c");
      g.addColorStop(1, "transparent");

      ctx.fillStyle = g;

      ctx.beginPath();

      ctx.arc(
        center.x,
        center.y,
        pulse,
        0,
        Math.PI * 2
      );

      ctx.fill();

      // Shooting stars

      if (time - lastShoot > 2500) {
        createShootingStar();
        lastShoot = time;
      }

      shootingStars.forEach((star, index) => {
        star.x += star.vx;
        star.y += star.vy;

        const gradient =
          ctx.createLinearGradient(
            star.x,
            star.y,
            star.x - star.length,
            star.y - star.length * 0.25
          );

        gradient.addColorStop(
          0,
          "rgba(120,255,200,1)"
        );

        gradient.addColorStop(
          1,
          "transparent"
        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(star.x, star.y);

        ctx.lineTo(
          star.x - star.length,
          star.y - star.length * 0.25
        );

        ctx.stroke();

        if (star.x > width + 200) {
          shootingStars.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      center.x = width / 2;
      center.y = height / 2;
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="story-spark__canvas"
    />
  );
}