"use client";

import { PlaceholderSky } from "@/features/world/components/PlaceholderSky";

export default function TestScene() {
  return (
    <group name="locomotion-test-scene">
      <PlaceholderSky />
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[29, 0.3, 29]} />
        <meshStandardMaterial color="#e8cfa7" roughness={1} />
      </mesh>
      <mesh position={[-5, 0.4, -4]} rotation={[-Math.atan(0.8 / 6), 0, 0]}>
        <boxGeometry args={[3, 0.25, 6]} />
        <meshStandardMaterial color="#d9943d" roughness={0.9} />
      </mesh>
      {[0, 1, 2].map((index) => (
        <mesh key={index} position={[4, 0.2 + index * 0.25, -3 - index * 0.45]}>
          <boxGeometry args={[2.4, 0.25, 0.7]} />
          <meshStandardMaterial color="#c8bfae" roughness={0.85} />
        </mesh>
      ))}
      <mesh position={[0, 1.4, -11]}>
        <boxGeometry args={[7, 2.8, 0.5]} />
        <meshStandardMaterial color="#78658d" roughness={0.8} />
      </mesh>
    </group>
  );
}
