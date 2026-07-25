import { Canvas } from "@react-three/fiber";

import SceneLights from "./core/SceneLights";
import FloatingParticles from "./core/FloatingParticles";
import Effects from "./core/Effects";
import CameraRig from "./core/CameraRig";
import VadodaraPin from "./core/VadodaraPin";

export default function StoryCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 14],
        fov: 45,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <CameraRig />
      <color attach="background" args={["#000000"]} />

      <fog attach="fog" args={["#000000", 10, 40]} />

      <SceneLights />

      <FloatingParticles />

      <VadodaraPin />

      <Effects />
    </Canvas>
  );
}