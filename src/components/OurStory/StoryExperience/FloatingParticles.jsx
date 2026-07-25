import * as THREE from 'three';

export function createFloatingParticles(count = 3000) {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 12;
    positions[i + 1] = (Math.random() - 0.5) * 12;
    positions[i + 2] = (Math.random() - 0.5) * 12;

    velocities[i] = (Math.random() - 0.5) * 0.005;
    velocities[i + 1] = (Math.random() - 0.5) * 0.005;
    velocities[i + 2] = (Math.random() - 0.5) * 0.005;
  }

  return { positions, velocities };
}

// "Boom" explosion recalculation step
export function triggerExplosion(positions, strength = 2.5) {
  const exploded = new Float32Array(positions.length);
  for (let i = 0; i < positions.length; i += 3) {
    const dir = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]).normalize();
    exploded[i] = positions[i] + dir.x * strength;
    exploded[i + 1] = positions[i + 1] + dir.y * strength;
    exploded[i + 2] = positions[i + 2] + dir.z * strength;
  }
  return exploded;
}