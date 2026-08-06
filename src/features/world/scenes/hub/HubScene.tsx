"use client";

import {
  FutureBeacon,
  GrassCluster,
  LowPolyRock,
} from "@/features/world/components/BlockoutElements";
import { PlaceholderSky } from "@/features/world/components/PlaceholderSky";
import { PortalGateway } from "@/features/world/portals/PortalGateway";

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
      <mesh position={[0, 0.025, -6.4]} receiveShadow>
        <boxGeometry args={[3.1, 0.05, 7.1]} />
        <meshStandardMaterial color="#d6ad74" roughness={0.92} />
      </mesh>
      <PortalGateway
        descriptor={{ id: "hub-to-projects", destination: "projects", label: "Explorar Projetos" }}
        position={[0, 0, -10.8]}
      />
      <FutureBeacon position={[8.8, 0, -10.5]} color="#ce714a" />
      <FutureBeacon position={[-10, 0, -11]} color="#78658d" />
      <FutureBeacon position={[13, 0, 0]} color="#f2bc5b" />
      <LowPolyRock position={[-3.4, 0.55, 2.2]} scale={1.25} />
      <LowPolyRock position={[6.7, 0.38, -3.2]} scale={0.72} />
      <LowPolyRock position={[-12.2, 0.42, -2.6]} scale={0.88} />
      <GrassCluster position={[-2.2, 0, 1.4]} scale={1.1} />
      <GrassCluster position={[5.4, 0, -1.5]} scale={0.9} />
      <GrassCluster position={[-8.3, 0, -5.4]} scale={1.2} />
    </group>
  );
}
