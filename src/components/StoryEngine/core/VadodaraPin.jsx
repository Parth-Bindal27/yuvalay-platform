import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

import { useParticleController } from "./ParticleController";

export default function VadodaraPin() {

    const { mode } = useParticleController();

    const pin = useRef();

    const BASE_SCALE = 0.55;

    useEffect(() => {

        if (!pin.current) return;

        if (mode !== "vadodara") {

            pin.current.visible = false;

            return;

        }

        pin.current.visible = true;

        pin.current.scale.set(0, 0, 0);

        pin.current.position.set(
            0,
            3,
            0.2
        );

        gsap.killTweensOf(pin.current.position);
        gsap.killTweensOf(pin.current.scale);

        // Drop Animation
        gsap.to(pin.current.position, {

            y: -0.45,

            duration: 1.1,

            ease: "bounce.out"

        });

        // Scale In
        gsap.to(pin.current.scale, {

            x: BASE_SCALE,

            y: BASE_SCALE,

            z: BASE_SCALE,

            duration: 0.45,

            ease: "back.out(2)"

        });

        // Shrink & Hide
        gsap.to(pin.current.scale, {

            x: 0,

            y: 0,

            z: 0,

            delay: 1.8,

            duration: 0.45,

            ease: "power2.in"

        });

        gsap.delayedCall(2.3, () => {

            if (pin.current)

                pin.current.visible = false;

        });

    }, [mode]);

    useFrame(({ clock }) => {

        if (!pin.current) return;

        if (mode !== "vadodara") return;

        if (!pin.current.visible) return;

        // Pulse only while visible
        if (pin.current.scale.x > 0.05) {

            const pulse =
                BASE_SCALE +
                Math.sin(clock.elapsedTime * 5) * 0.02;

            pin.current.scale.set(
                pulse,
                pulse,
                pulse
            );

        }

    });

    return (

        <group ref={pin} visible={false}>

            {/* Head */}
            <mesh>

                <sphereGeometry args={[0.08, 32, 32]} />

                <meshBasicMaterial color="#ff2d2d" />

            </mesh>

            {/* Tail */}
            <mesh position={[0, -0.11, 0]}>

                <coneGeometry args={[0.05, 0.16, 32]} />

                <meshBasicMaterial color="#ff2d2d" />

            </mesh>

        </group>

    );

}