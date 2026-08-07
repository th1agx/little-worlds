import type { SceneId } from "@/features/world/types";

export function getGroundHeight(sceneId: SceneId, x: number, z: number): number {
  if (sceneId === "benchmark") {
    const meadowRise = Math.sin(x * 0.19) * 0.1 + Math.cos(z * 0.15) * 0.08;
    const streamBank = Math.exp(-((x + 6.4) ** 2) / 14) * 0.18;
    return meadowRise - streamBank;
  }

  if (sceneId === "benchmark-v2") {
    const meadow = Math.sin(x * 0.22) * 0.13 + Math.cos(z * 0.16) * 0.1;
    const riverX = -3.6 + Math.sin((z + 4) * 0.2) * 1.1;
    const stream = Math.exp(-((x - riverX) ** 2) / 2.6) * 0.32;
    const rearShelf = Math.exp(-((z + 10.2) ** 2) / 16) * 0.42;
    return meadow - stream + rearShelf;
  }

  if (sceneId !== "projects") return 0;

  const insideBridgeRise = x >= -2.4 && x <= 2.4 && z >= -14 && z <= -8;
  if (insideBridgeRise) return ((-z - 8) / 6) * 0.35;
  return 0;
}
