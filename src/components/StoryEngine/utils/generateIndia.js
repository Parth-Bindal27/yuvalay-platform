import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

export default async function generateIndia(svgUrl, count = 10000) {

    const loader = new SVGLoader();

    return new Promise((resolve, reject) => {

        loader.load(

            svgUrl,

            (data) => {

                const sampledPoints = [];

                const bounds = new THREE.Box2();

                data.paths.forEach((path) => {

                    const shapes = SVGLoader.createShapes(path);

                    shapes.forEach((shape) => {

                        // Sample along the state boundary
                        const points = shape.getSpacedPoints(350);

                        points.forEach((p) => {

                            sampledPoints.push(p);

                            bounds.expandByPoint(p);

                        });

                    });

                });

                if (sampledPoints.length === 0) {

                    reject(new Error("No points found in India SVG"));

                    return;

                }

                const center = new THREE.Vector2();

                bounds.getCenter(center);

                const size = new THREE.Vector2();

                bounds.getSize(size);

                // Fit inside ~6 world units
                const scale = 6 / Math.max(size.x, size.y);

                const positions = new Float32Array(count * 3);

                for (let i = 0; i < count; i++) {

                    const p = sampledPoints[
                        Math.floor(Math.random() * sampledPoints.length)
                    ];

                    positions[i * 3] =
                        (p.x - center.x) * scale;

                    positions[i * 3 + 1] =
                        -(p.y - center.y) * scale;

                    positions[i * 3 + 2] =
                        (Math.random() - 0.5) * 0.04;

                }

                resolve(positions);

            },

            undefined,

            (error) => {

                reject(error);

            }

        );

    });

}