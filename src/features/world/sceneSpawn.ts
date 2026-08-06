import type { SceneId } from "@/features/world/types";

export interface SceneSpawn {
  x: number;
  z: number;
  yaw: number;
}

const sceneSpawns: Record<SceneId, SceneSpawn> = {
  hub: { x: 0, z: 5, yaw: 0 },
  projects: { x: 0, z: 5.5, yaw: 0 },
  benchmark: { x: 0, z: 11.5, yaw: 0 },
};

export function getSceneSpawn(sceneId: SceneId): SceneSpawn {
  return sceneSpawns[sceneId];
}
