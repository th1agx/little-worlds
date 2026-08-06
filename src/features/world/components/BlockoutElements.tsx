"use client";

import type { ReactNode } from "react";

const materials = {
  earth: "#b79a61",
  stone: "#9c7b67",
  plaster: "#f7e9cf",
  copper: "#ce714a",
  sage: "#7d8f61",
  amber: "#f2bc5b",
} as const;

export function LowPolyRock({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <mesh position={position} rotation={[0, 0.45, 0]} scale={scale} castShadow receiveShadow>
      <dodecahedronGeometry args={[0.9, 1]} />
      <meshStandardMaterial color={materials.stone} flatShading roughness={0.96} />
    </mesh>
  );
}

export function GrassCluster({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      {[-0.22, 0, 0.22].map((offset, index) => (
        <mesh
          key={offset}
          position={[offset, 0.22 + index * 0.02, (index - 1) * 0.07]}
          rotation={[0, 0, offset * 0.65]}
        >
          <coneGeometry args={[0.12, 0.48 + index * 0.06, 5]} />
          <meshStandardMaterial color={materials.sage} roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

export function FutureBeacon({
  position,
  color = materials.amber,
}: {
  position: [number, number, number];
  color?: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.36, 0.5, 1.1, 8]} />
        <meshStandardMaterial color={materials.stone} roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.28, 0]}>
        <sphereGeometry args={[0.24, 12, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}

export function PlaceholderTerminal({ position }: { position: [number, number, number] }) {
  return (
    <group name="placeholder-terminal" position={position}>
      <mesh position={[0, 0.52, 0]} castShadow>
        <boxGeometry args={[1.15, 0.65, 0.5]} />
        <meshStandardMaterial color={materials.plaster} roughness={0.78} />
      </mesh>
      <mesh position={[0, 0.83, -0.29]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[0.78, 0.39, 0.06]} />
        <meshStandardMaterial
          color="#78658d"
          emissive="#78658d"
          emissiveIntensity={0.16}
          roughness={0.55}
        />
      </mesh>
      <mesh position={[0.35, 0.53, -0.3]}>
        <sphereGeometry args={[0.07, 10, 8]} />
        <meshStandardMaterial
          color={materials.amber}
          emissive={materials.amber}
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh position={[0, 0.18, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.38, 0.36, 8]} />
        <meshStandardMaterial color={materials.copper} roughness={0.68} />
      </mesh>
    </group>
  );
}

export function OpenPavilion({
  children,
  position,
}: {
  children?: ReactNode;
  position: [number, number, number];
}) {
  return (
    <group name="open-pavilion-blockout" position={position}>
      <mesh position={[0, 0.16, 0]} receiveShadow>
        <cylinderGeometry args={[4.35, 4.7, 0.32, 24]} />
        <meshStandardMaterial color="#e8cfa7" roughness={0.94} />
      </mesh>
      {[
        [-3.05, 1.7, -1.8],
        [3.05, 1.7, -1.8],
        [-3.05, 1.7, 1.8],
        [3.05, 1.7, 1.8],
      ].map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} castShadow>
          <cylinderGeometry args={[0.22, 0.3, y * 2, 8]} />
          <meshStandardMaterial color={materials.plaster} roughness={0.86} />
        </mesh>
      ))}
      <mesh position={[0, 3.42, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[4.25, 4.45, 0.42, 24]} />
        <meshStandardMaterial color={materials.plaster} roughness={0.87} />
      </mesh>
      <mesh position={[0, 3.18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.78, 1.35, 24]} />
        <meshStandardMaterial color={materials.copper} roughness={0.75} />
      </mesh>
      {children}
    </group>
  );
}
