import { Vector3 } from "three";
import type { CollisionAdapter } from "@/features/player/collision/types";

export interface WorldBounds {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export function createBoundedCollisionAdapter(bounds: WorldBounds): CollisionAdapter {
  return {
    resolveMovement(_currentPosition, intendedPosition) {
      return new Vector3(
        Math.min(bounds.maxX, Math.max(bounds.minX, intendedPosition.x)),
        intendedPosition.y,
        Math.min(bounds.maxZ, Math.max(bounds.minZ, intendedPosition.z)),
      );
    },
  };
}
