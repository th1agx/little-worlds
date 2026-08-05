import type { SceneId } from "@/features/world/types";

export function getGroundHeight(sceneId: SceneId, x: number, z: number): number {
  if (sceneId !== "test") return 0;

  const insideRamp = x >= -6.5 && x <= -3.5 && z >= -7 && z <= -1;
  if (insideRamp) return ((z + 7) / 6) * 0.8;
  return 0;
}
