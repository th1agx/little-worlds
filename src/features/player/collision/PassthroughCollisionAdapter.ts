import type { CollisionAdapter } from "@/features/player/collision/types";

export const passthroughCollisionAdapter: CollisionAdapter = {
  resolveMovement(_currentPosition, intendedPosition) {
    return intendedPosition;
  },
};
