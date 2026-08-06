"use client";

import { GrassCluster, LowPolyRock } from "@/features/world/components/BlockoutElements";
import { PlaceholderSky } from "@/features/world/components/PlaceholderSky";
import {
  DistantThresholdSignal,
  ThresholdPhenomenon,
} from "@/features/world/thresholds/ThresholdPhenomenon";

const projectsThreshold = {
  id: "limiar-hub-projects",
  destination: "projects",
  label: "Atravessar para Projetos",
  palette: { core: "#f7e9cf", glow: "#f2bc5b", atmosphere: "#ce714a" },
} as const;

const distantSignals = [
  {
    position: [-10, 1.85, -12.6] as [number, number, number],
    palette: { core: "#e8cfa7", glow: "#78658d", atmosphere: "#5f587b" },
    scale: 0.9,
  },
  {
    position: [9.2, 1.6, -12.1] as [number, number, number],
    palette: { core: "#f7e9cf", glow: "#e8cfa7", atmosphere: "#b77779" },
    scale: 0.78,
  },
  {
    position: [13.4, 1.45, -1.6] as [number, number, number],
    palette: { core: "#e8cfa7", glow: "#7d8f61", atmosphere: "#9c7b67" },
    scale: 0.68,
  },
] as const;

export default function HubScene() {
  return (
    <group name="hub-limiar-blockout">
      <PlaceholderSky />
      <mesh position={[-13, 7, -32]}>
        <sphereGeometry args={[1.65, 20, 16]} />
        <meshBasicMaterial color="#f2bc5b" />
      </mesh>
      <mesh position={[0, -0.5, -5]} receiveShadow>
        <cylinderGeometry args={[20, 22, 1, 64]} />
        <meshStandardMaterial color="#b79a61" roughness={0.97} flatShading />
      </mesh>
      {[
        [-8.6, -0.1, -8.8, 3.8, 0.72, 4.8],
        [8.3, -0.16, -9.4, 4.4, 0.62, 5.5],
        [-12.3, -0.28, 2.8, 5.6, 0.48, 5.1],
        [11.5, -0.3, 3.8, 5.1, 0.44, 4.6],
      ].map(([x, y, z, width, height, depth]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} receiveShadow scale={[width, height, depth]}>
          <sphereGeometry args={[1, 10, 6]} />
          <meshStandardMaterial color="#aa8d63" flatShading roughness={0.99} />
        </mesh>
      ))}
      <mesh position={[0, 0.025, -6.4]} receiveShadow>
        <boxGeometry args={[3.1, 0.05, 7.1]} />
        <meshStandardMaterial color="#d6ad74" roughness={0.92} />
      </mesh>
      <ThresholdPhenomenon descriptor={projectsThreshold} position={[0, 0, -10.8]} />
      {[
        [-1.86, 0.18, -3.9],
        [1.86, 0.18, -3.9],
        [-1.64, 0.16, -7.3],
        [1.64, 0.16, -7.3],
      ].map(([x, y, z]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]} rotation={[0, 0.2, 0]} castShadow>
          <dodecahedronGeometry args={[0.34, 0]} />
          <meshStandardMaterial color="#9c7b67" flatShading roughness={0.96} />
        </mesh>
      ))}
      {distantSignals.map((signal) => (
        <DistantThresholdSignal
          key={signal.position.join("-")}
          palette={signal.palette}
          position={signal.position}
          scale={signal.scale}
        />
      ))}
      <LowPolyRock position={[-3.4, 0.55, 2.2]} scale={1.25} />
      <LowPolyRock position={[6.7, 0.38, -3.2]} scale={0.72} />
      <LowPolyRock position={[-12.2, 0.42, -2.6]} scale={0.88} />
      <GrassCluster position={[-2.2, 0, 1.4]} scale={1.1} />
      <GrassCluster position={[5.4, 0, -1.5]} scale={0.9} />
      <GrassCluster position={[-8.3, 0, -5.4]} scale={1.2} />
      <GrassCluster position={[-5.7, 0, -7.2]} scale={0.82} />
      <GrassCluster position={[5.9, 0, -7.6]} scale={0.98} />
      <GrassCluster position={[-10.8, 0, 0.2]} scale={1.32} />
      <GrassCluster position={[10.2, 0, -1.2]} scale={1.18} />
    </group>
  );
}
