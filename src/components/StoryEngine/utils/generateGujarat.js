import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

export default async function generateGujarat(
    svgUrl,
    count = 10000
) {

    return new Promise((resolve) => {

        const loader = new SVGLoader();

        loader.load(svgUrl, (data) => {

            const sampledPoints = [];

            data.paths.forEach((path) => {

                const shapes = SVGLoader.createShapes(path);

                shapes.forEach((shape) => {

                    const pts = shape.getSpacedPoints(350);

                    pts.forEach((p) => {

                        sampledPoints.push(
                            new THREE.Vector3(
                                p.x,
                                -p.y,
                                0
                            )
                        );

                    });

                });

            });

            const bounds =
                new THREE.Box3().setFromPoints(sampledPoints);

            const center = new THREE.Vector3();

            bounds.getCenter(center);

            const size = new THREE.Vector3();

            bounds.getSize(size);

            const scale =
                6 / Math.max(size.x, size.y);

            const output =
                new Float32Array(count * 3);

            for (let i = 0; i < count; i++) {

                const p =
                    sampledPoints[
                        i % sampledPoints.length
                    ];

                output[i * 3] =
                    (p.x - center.x) * scale;

                output[i * 3 + 1] =
                    (p.y - center.y) * scale;

                output[i * 3 + 2] =
                    (Math.random() - 0.5) * 0.08;

            }

            resolve(output);

        });

    });

}