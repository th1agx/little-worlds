"use client";

import { Color } from "three";

const TEMPORARY_ENVIRONMENT = {
  background: "#b77779",
  fog: "#b77779",
  ambientIntensity: 0.55,
  directionalIntensity: 1.8,
} as const;

export function EnvironmentManager() {
  return (
    <>
      <color attach="background" args={[TEMPORARY_ENVIRONMENT.background]} />
      <fog attach="fog" args={[new Color(TEMPORARY_ENVIRONMENT.fog), 18, 110]} />
      <ambientLight intensity={TEMPORARY_ENVIRONMENT.ambientIntensity} />
      <hemisphereLight args={["#78658d", "#e8cfa7", 1.1]} />
      <directionalLight
        castShadow={false}
        intensity={TEMPORARY_ENVIRONMENT.directionalIntensity}
        position={[-18, 10, -12]}
      />
    </>
  );
}
