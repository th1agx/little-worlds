"use client";

import {
  GrassCluster,
  LowPolyRock,
  OpenPavilion,
  PlaceholderTerminal,
} from "@/features/world/components/BlockoutElements";
import { PlaceholderSky } from "@/features/world/components/PlaceholderSky";
import { ThresholdPhenomenon } from "@/features/world/thresholds/ThresholdPhenomenon";

const hubThreshold = {
  id: "limiar-projects-hub",
  destination: "hub",
  label: "Retornar ao Limiar",
  palette: { core: "#f7e9cf", glow: "#e8cfa7", atmosphere: "#b77779" },
} as const;

export default function ProjectsScene() {
  return (
    <group name="projects-workshop-bridges-blockout">
      <PlaceholderSky />
      <mesh position={[-13, 7, -32]}>
        <sphereGeometry args={[1.65, 20, 16]} />
        <meshBasicMaterial color="#f2bc5b" />
      </mesh>
      <mesh position={[0, -0.52, -5]} receiveShadow>
        <cylinderGeometry args={[18.5, 20, 1.04, 56]} />
        <meshStandardMaterial color="#b79a61" roughness={0.97} flatShading />
      </mesh>
      <mesh position={[0, 0.14, -11]} rotation={[-Math.atan(0.35 / 6), 0, 0]} receiveShadow>
        <boxGeometry args={[4.6, 0.28, 6.2]} />
        <meshStandardMaterial color="#e8cfa7" roughness={0.9} />
      </mesh>
      {[-1.85, 1.85].map((x) => (
        <mesh key={x} position={[x, 0.96, -11]} rotation={[-Math.atan(0.35 / 6), 0, 0]}>
          <boxGeometry args={[0.14, 1.15, 6.1]} />
          <meshStandardMaterial color="#ce714a" roughness={0.72} />
        </mesh>
      ))}
      <mesh position={[0, 1.78, -13.8]} castShadow>
        <boxGeometry args={[4.05, 0.18, 0.22]} />
        <meshStandardMaterial color="#ce714a" roughness={0.72} />
      </mesh>
      <mesh position={[0, 1.42, -8.2]} castShadow>
        <boxGeometry args={[4.02, 0.14, 0.2]} />
        <meshStandardMaterial color="#d9943d" roughness={0.72} />
      </mesh>
      <ThresholdPhenomenon descriptor={hubThreshold} position={[0, 0, -7.45]} />
      <OpenPavilion position={[0, 0.35, -16]}>
        <PlaceholderTerminal position={[0, 0.3, 0.4]} />
      </OpenPavilion>
      <mesh position={[-4.8, 1.55, -13]} rotation={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.2, 3.1, 0.8]} />
        <meshStandardMaterial color="#c8bfae" roughness={0.78} />
      </mesh>
      <mesh position={[5.1, 1.2, -14.2]} rotation={[0, -0.32, 0]} castShadow>
        <cylinderGeometry args={[0.75, 1.1, 2.4, 6]} />
        <meshStandardMaterial color="#9c7b67" roughness={0.9} />
      </mesh>
      <LowPolyRock position={[-4.8, 0.5, 2.3]} scale={1.05} />
      <LowPolyRock position={[5.6, 0.4, -3.2]} scale={0.75} />
      <GrassCluster position={[-2.7, 0, 0.9]} scale={1.1} />
      <GrassCluster position={[4.2, 0, -5.3]} scale={0.9} />
      <GrassCluster position={[-6.4, 0, -8.3]} scale={1.15} />
    </group>
  );
}
