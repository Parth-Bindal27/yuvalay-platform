import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { useParticleController } from "./ParticleController";

export default function CameraRig() {

    const { camera } = useThree();

    const { mode } = useParticleController();

    const targetPosition = useRef(new THREE.Vector3(0, 0, 14));

    const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

    useFrame(({ clock }) => {

        switch (mode) {

            case "float":

                targetPosition.current.set(0, 0, 14);

                targetLookAt.current.set(0, 0, 0);

                break;

            case "collapse":

                targetPosition.current.set(0, 0, 11);

                targetLookAt.current.set(0, 0, 0);

                break;

            case "earth":

                targetPosition.current.set(2.2, 1.3, 8);

                targetLookAt.current.set(0, 0, 0);

                break;

            case "india":

                targetPosition.current.set(1.2, 0.8, 5);

                targetLookAt.current.set(0, 0, 0);

                break;

            case "gujarat":

                targetPosition.current.set(0.7, 0.5, 3.8);

                targetLookAt.current.set(0, 0, 0);

                break;

            case "vadodara":

                targetPosition.current.set(
                    0.25,
                    -0.45,
                    2.2
                );

                targetLookAt.current.set(
                    0.25,
                    -0.45,
                    0
                );

                break;

            case "yuvalay":

                targetPosition.current.set(0, 0, 2);

                targetLookAt.current.set(0, 0, 0);

                break;

            default:

                break;

        }

        camera.position.lerp(

            targetPosition.current,

            0.03

        );

        camera.position.y +=

            Math.sin(clock.elapsedTime * 0.4) * 0.002;

        camera.lookAt(targetLookAt.current);

    });

    return null;

}