export default function generateEarth(imageData, count, radius = 6) {

    const positions = new Float32Array(count * 3);

    const width = imageData.width;
    const height = imageData.height;

    const data = imageData.data;

    let created = 0;

    while (created < count) {

        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);

        const index = (y * width + x) * 4;

        const brightness = data[index];

        if (brightness < 100) continue;

        const lon = (x / width) * Math.PI * 2 - Math.PI;

        const lat = Math.PI / 2 - (y / height) * Math.PI;

        positions[created * 3] =
            radius *
            Math.cos(lat) *
            Math.cos(lon);

        positions[created * 3 + 1] =
            radius *
            Math.sin(lat);

        positions[created * 3 + 2] =
            radius *
            Math.cos(lat) *
            Math.sin(lon);

        created++;

    }

    return positions;

}