import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <Bloom
        mipmapBlur
        intensity={2.4}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.8}
      />
    </EffectComposer>
  );
}