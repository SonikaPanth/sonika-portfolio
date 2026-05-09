"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";

function AbstractShape() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial
          color="#00d4ff" /* Primary color */
          emissive="#4e0078" /* On Secondary Color */
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          distort={0.4}
          speed={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00d4ff" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#e5b5ff" />
        
        <Suspense fallback={null}>
          <AbstractShape />
          <Environment preset="city" />
        </Suspense>
        
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#00d4ff" />
      </Canvas>
    </div>
  );
}
