/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
// import * as THREE from 'three';

// Component for the Galactic Ship or Incident Object
function GalacticIncident() {
  const meshRef = useRef();

  // Optional animation loop (rotation, etc.)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Simple rotation animation
    }
  });

  // Load your 3D model using useLoader, assuming you have a GLTF/GLB file.
  // If you're loading a model from Sketchfab, you may need to download it and use GLTFLoader.
  return (
    <mesh ref={meshRef} scale={0.5}>
      {/* Placeholder geometry. Replace this with your actual 3D model loader */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

// Main Universe Component
export default function Universe() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Galactic Scene */}
      <GalacticIncident />

      {/* Starry Background */}
      <Stars radius={100} depth={50} count={5000} factor={7} fade />

      {/* Controls to move around */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
