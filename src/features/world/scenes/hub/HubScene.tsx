"use client";

import { LandingMotes } from "@/features/world/components/LandingMotes";
import { PlaceholderSky } from "@/features/world/components/PlaceholderSky";

export default function HubScene() {
  return (
    <group name="hub-abstract-placeholder">
      <PlaceholderSky />
      <LandingMotes />
      <mesh position={[0, -0.22, 0]} receiveShadow>
        <cylinderGeometry args={[19, 20, 0.45, 48]} />
        <meshStandardMaterial color="#e8cfa7" roughness={0.95} />
      </mesh>
      <mesh position={[0, 0.02, -4]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.8, 4.15, 48]} />
        <meshStandardMaterial color="#d9943d" roughness={0.75} />
      </mesh>
      <mesh position={[0, 1.15, -8]}>
        <sphereGeometry args={[1.3, 20, 16]} />
        <meshStandardMaterial color="#f7e9cf" roughness={0.85} />
      </mesh>
      <mesh position={[-5, 0.9, -4]} rotation={[0, 0.35, 0]}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial color="#c8bfae" roughness={0.7} />
      </mesh>
      <mesh position={[6, 1.3, -6]} rotation={[0, -0.2, 0]}>
        <cylinderGeometry args={[1.1, 1.3, 2.6, 12]} />
        <meshStandardMaterial color="#9c7b67" roughness={0.92} />
      </mesh>
      <mesh position={[-12, 7, -24]}>
        <sphereGeometry args={[1.8, 20, 16]} />
        <meshBasicMaterial color="#f2bc5b" />
      </mesh>
    </group>
  );
}
