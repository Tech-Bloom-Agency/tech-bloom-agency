"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#384B70"
          speed={3}
          distort={0.4}
          radius={1}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Garde anti-hydratation : le canvas WebGL ne doit pas être rendu côté serveur.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[-10, -10, -5]} intensity={1} />
            <AnimatedSphere />
        </Canvas>
      </Suspense>
    </div>
  );
}
