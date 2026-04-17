"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Text3D, Center } from "@react-three/drei";
import type { Mesh, Group } from "three";

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh
        ref={meshRef}
        scale={hovered ? 2.2 : 2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={hovered ? "#C9952B" : "#d4af37"}
          roughness={0.2}
          metalness={0.8}
          distort={hovered ? 0.5 : 0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingRings() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[3, 3.8, 4.6].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#d4af37"
            emissive="#d4af37"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4 - i * 0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d4af37"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function ThreeDemo() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-[#1C1917]/80">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="#EA580C" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />
        <AnimatedSphere />
        <FloatingRings />
        <Particles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
