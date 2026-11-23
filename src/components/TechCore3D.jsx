import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Digital Globe with Particle Continents
function DigitalGlobe() {
  const globeRef = useRef();
  const particlesRef = useRef();

  // Create particle positions for continents
  const particles = useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = [];

    // Create particles in a sphere pattern representing continents
    const particleCount = 3000;
    
    for (let i = 0; i < particleCount; i++) {
      // Use Fibonacci sphere for even distribution
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      const radius = 2.5;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      // Create continent-like patterns (more particles in certain areas)
      const continentPattern = 
        (Math.sin(theta * 3) * Math.cos(phi * 2) > 0.3) ||
        (Math.sin(theta * 2 + 1) * Math.cos(phi * 3) > 0.4) ||
        (Math.sin(theta * 4) * Math.sin(phi * 2) > 0.5);
      
      if (continentPattern) {
        positions.push(x, y, z);
        
        // Cyan/blue gradient colors
        colors.push(0.0, 0.8 + Math.random() * 0.2, 1.0);
        sizes.push(0.03 + Math.random() * 0.04);
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      sizes: new Float32Array(sizes),
    };
  }, []);

  // Rotation animation
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={[0, 1, -3]}>
      {/* Globe sphere with glow */}
      <Sphere ref={globeRef} args={[2.5, 64, 64]}>
        <meshPhongMaterial
          color="#001a40"
          transparent
          opacity={0.3}
          emissive="#0066ff"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Particle continents */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particles.sizes.length}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Globe atmospheric glow */}
      <Sphere args={[2.7, 64, 64]}>
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Orbit Rings
function OrbitRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame(() => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += 0.002;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= 0.0015;
    if (ring3Ref.current) ring3Ref.current.rotation.z += 0.001;
  });

  const createRing = (radius, color, rotation) => (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={1}
      />
    </mesh>
  );

  return (
    <group position={[0, 0, -3]}>
      <group ref={ring1Ref} rotation={[Math.PI / 2.5, 0, 0]}>
        {createRing(3.5, '#00e5ff', [0, 0, 0])}
      </group>
      <group ref={ring2Ref} rotation={[Math.PI / 2.3, Math.PI / 4, 0]}>
        {createRing(4.0, '#8844ff', [0, 0, 0])}
      </group>
      <group ref={ring3Ref} rotation={[Math.PI / 2.7, -Math.PI / 6, 0]}>
        {createRing(3.2, '#44aaff', [0, 0, 0])}
      </group>
    </group>
  );
}

// Platform Rings at Bottom
function PlatformRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame(({ clock }) => {
    if (ring1Ref.current) {
      ring1Ref.current.material.opacity = 0.5 + Math.sin(clock.elapsedTime * 2) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.material.opacity = 0.6 + Math.sin(clock.elapsedTime * 2.5) * 0.3;
    }
  });

  return (
    <group position={[0, -2.5, -3]}>
      {/* Large cyan ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5, 0.03, 16, 100]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.7}
          emissive="#00e5ff"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Medium purple ring */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.025, 16, 100]} />
        <meshBasicMaterial
          color="#dd44ff"
          transparent
          opacity={0.6}
          emissive="#dd44ff"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Platform center glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[2, 64]} />
        <meshBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Small light particles */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((angle * Math.PI) / 180) * 5,
            0,
            Math.sin((angle * Math.PI) / 180) * 5,
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#00e5ff' : '#dd44ff'}
            emissive={i % 2 === 0 ? '#00e5ff' : '#dd44ff'}
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Scene Component
export default function TechCore3D() {
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 2, 5]} intensity={1} color="#00d9ff" />
        <pointLight position={[-5, 0, 0]} intensity={0.5} color="#00d9ff" />
        <pointLight position={[5, 0, 0]} intensity={0.5} color="#8844ff" />

        {/* 3D Elements */}
        <DigitalGlobe />
        <OrbitRings />
        <PlatformRings />
      </Canvas>
    </div>
  );
}
