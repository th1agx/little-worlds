import type { Vector3 } from "three";

export interface CollisionAdapter {
  resolveMovement(currentPosition: Vector3, intendedPosition: Vector3): Vector3;
}
