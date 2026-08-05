"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group } from "three";
import { useExperienceStore } from "@/stores/experienceStore";

export function LandingMotes() {
  const landingRevision = useExperienceStore((state) => state.landingRevision);
  const preferences = useExperienceStore((state) => state.preferences);
  const { camera } = useThree();
  const group = useRef<Group>(null);
  const lastRevision = useRef(landingRevision);
  const life = useRef(0);
  const positions = useMemo(
    () => [
      [-0.35, 0.02, -0.25],
      [0.3, 0.03, -0.2],
      [0.08, 0.04, 0.28],
      [-0.1, 0.03, 0.4],
      [0.42, 0.02, 0.16],
      [-0.42, 0.02, 0.13],
    ],
    [],
  );

  useFrame((_, delta) => {
    if (landingRevision !== lastRevision.current) {
      lastRevision.current = landingRevision;
      life.current = preferences.reducedMotion || !preferences.visualMotionEnabled ? 0 : 0.35;
      group.current?.position.set(camera.position.x, 0.02, camera.position.z);
    }
    life.current = Math.max(0, life.current - delta);
    if (group.current) group.current.visible = life.current > 0;
  });

  return (
    <group ref={group} visible={false}>
      {positions.map((position, index) => (
        <mesh key={index} position={position as [number, number, number]} scale={0.035}>
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial color="#f2bc5b" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}
