export function getIndiaPoints(count = 3000) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Math approximation of boundary silhouette
    const u = Math.random();
    const v = Math.random();
    const x = (u - 0.5) * 4;
    const y = (v - 0.5) * 4;
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
  }
  return positions;
}