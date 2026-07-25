export default function generateSphere(count, radius = 6) {

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {

        const phi = Math.acos(2 * Math.random() - 1);

        const theta = Math.random() * Math.PI * 2;

        positions[i * 3] =
            radius *
            Math.sin(phi) *
            Math.cos(theta);

        positions[i * 3 + 1] =
            radius *
            Math.sin(phi) *
            Math.sin(theta);

        positions[i * 3 + 2] =
            radius *
            Math.cos(phi);

    }

    return positions;

}