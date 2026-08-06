import type { SceneId } from "@/features/world/types";

export function getGroundHeight(sceneId: SceneId, x: number, z: number): number {
  if (sceneId !== "projects") return 0;

  const insideBridgeRise = x >= -2.4 && x <= 2.4 && z >= -14 && z <= -8;
  if (insideBridgeRise) return ((-z - 8) / 6) * 0.35;
  return 0;
}
