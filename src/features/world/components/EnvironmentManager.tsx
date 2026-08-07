"use client";

import { Color } from "three";
import { useExperienceStore } from "@/stores/experienceStore";

const TEMPORARY_ENVIRONMENT = {
  background: "#b77779",
  fog: "#b77779",
  ambientIntensity: 0.55,
  directionalIntensity: 1.8,
} as const;

export function EnvironmentManager() {
  const sceneId = useExperienceStore((state) => state.activeSceneId);
  const isBenchmark = sceneId === "benchmark";
  const isBenchmarkV2 = sceneId === "benchmark-v2";
  const background = isBenchmarkV2
    ? "#6d5278"
    : isBenchmark
      ? "#df9a95"
      : TEMPORARY_ENVIRONMENT.background;
  const fog = isBenchmarkV2 ? "#a77291" : isBenchmark ? "#c99191" : TEMPORARY_ENVIRONMENT.fog;

  return (
    <>
      <color attach="background" args={[background]} />
      <fog
        attach="fog"
        args={[
          new Color(fog),
          isBenchmarkV2 ? 19 : isBenchmark ? 17 : 18,
          isBenchmarkV2 ? 48 : isBenchmark ? 58 : 110,
        ]}
      />
      <ambientLight
        intensity={
          isBenchmarkV2 ? 0.26 : isBenchmark ? 0.36 : TEMPORARY_ENVIRONMENT.ambientIntensity
        }
      />
      <hemisphereLight
        args={["#586789", "#d49a69", isBenchmarkV2 ? 1.45 : isBenchmark ? 1.25 : 1.1]}
      />
      <directionalLight
        castShadow={isBenchmark || isBenchmarkV2}
        intensity={
          isBenchmarkV2 ? 2.65 : isBenchmark ? 2.25 : TEMPORARY_ENVIRONMENT.directionalIntensity
        }
        position={isBenchmarkV2 ? [-16, 11, 7] : [-18, 14, -12]}
        shadow-bias={-0.0002}
        shadow-camera-bottom={-22}
        shadow-camera-left={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
    </>
  );
}
