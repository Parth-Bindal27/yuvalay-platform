import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function DroneCamera() {
  const overlay = useRef(null);
  const frame = useRef(null);
  const scan = useRef(null);
  const cross = useRef(null);
  const hud = useRef(null);

  useEffect(() => {
    gsap.set(overlay.current, {
      opacity: 0,
      scale: 1.8,
    });

    gsap.to(overlay.current, {
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: 18,
      ease: "power3.out",
    });

    gsap.to(scan.current, {
      y: "100vh",
      repeat: -1,
      duration: 2.8,
      ease: "none",
    });

    gsap.to(frame.current, {
      scale: 1.03,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });

    gsap.to(cross.current, {
      rotation: 360,
      repeat: -1,
      duration: 25,
      ease: "none",
    });

    gsap.fromTo(
      hud.current,
      {
        opacity: 0.35,
      },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
      }
    );
  }, []);

  return (
    <div className="droneOverlay" ref={overlay}>
      <div className="droneFrame" ref={frame}></div>

      <div className="droneCrosshair" ref={cross}>
        <span></span>
        <span></span>
      </div>

      <div className="scanLine" ref={scan}></div>

      <div className="droneHUD" ref={hud}>
        <div>DRONE LINK</div>
        <div>GPS LOCK</div>
        <div>AI TRACKING</div>
        <div>ZOOM ×320</div>
      </div>

      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>
    </div>
  );
}