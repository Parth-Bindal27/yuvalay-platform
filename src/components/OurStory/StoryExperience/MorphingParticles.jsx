import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { getSpherePoints } from './shapes/SphereShape';
import { getIndiaPoints } from './shapes/IndiaShape';
import { getGujaratPoints } from './shapes/GujaratShape';
import { getPinPoints } from './shapes/PinShape';
import { createFloatingParticles, triggerExplosion } from './FloatingParticles';

export default function MorphingParticles({ activeStep, isExploded }) {
  const mountRef = useRef(null);
  const targetPosRef = useRef(null);
  const currentPosRef = useRef(null);

  const shapes = useRef([
    createFloatingParticles(3000).positions,
    getSpherePoints(3000),
    getIndiaPoints(3000),
    getGujaratPoints(3000),
    getPinPoints(3000),
  ]);

  useEffect(() => {
    if (isExploded) {
      targetPosRef.current = triggerExplosion(currentPosRef.current, 4.0);
    } else if (shapes.current[activeStep]) {
      targetPosRef.current = shapes.current[activeStep];
    }
  }, [activeStep, isExploded]);

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    currentPosRef.current = new Float32Array(shapes.current[0]);
    targetPosRef.current = shapes.current[0];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(currentPosRef.current, 3));

    const material = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.035,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    let frameId;
    const animate = () => {
      const posAttr = geometry.attributes.position;
      const currentArr = posAttr.array;
      const targetArr = targetPosRef.current;

      if (targetArr) {
        for (let i = 0; i < currentArr.length; i++) {
          currentArr[i] += (targetArr[i] - currentArr[i]) * 0.06;
        }
        posAttr.needsUpdate = true;
      }

      pointCloud.rotation.y += 0.0015;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
}