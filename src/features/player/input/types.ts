export type InputAction =
  "moveForward" | "moveBackward" | "moveLeft" | "moveRight" | "fastStep" | "jump" | "interact";

export interface MovementInput {
  forward: number;
  right: number;
  fastStep: boolean;
}

export interface LookInput {
  x: number;
  y: number;
}

export interface InputSnapshot {
  look: LookInput;
  movement: MovementInput;
  jumpRequested: boolean;
  interactRequested: boolean;
}

/**
 * Boundary for a future gamepad implementation. Device polling and remapping
 * remain outside PlayerController, so adding a controller never changes its
 * movement contract.
 */
export interface GamepadInputAdapter {
  readMovement(): Partial<MovementInput>;
}
