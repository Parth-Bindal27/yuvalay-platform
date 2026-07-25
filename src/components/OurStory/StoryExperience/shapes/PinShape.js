export function getPinPoints(count = 3000) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    if (i < count * 0.7) {
      // Pin circle head
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.6;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = 0.8 + Math.sin(angle) * r;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    } else {
      // Pin needle tail pointing down
      const progress = Math.random();
      positions[i * 3] = (Math.random() - 0.5) * 0.1 * (1 - progress);
      positions[i * 3 + 1] = 0.8 - progress * 1.8;
      positions[i * 3 + 2] = 0;
    }
  }
  return positions;
}