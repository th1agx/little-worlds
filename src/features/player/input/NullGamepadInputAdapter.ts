import type { GamepadInputAdapter, MovementInput } from "@/features/player/input/types";

/**
 * Explicit no-op implementation while gamepad support is deferred.
 * It keeps the input boundary stable without polling hardware or exposing UI.
 */
export class NullGamepadInputAdapter implements GamepadInputAdapter {
  readMovement(): Partial<MovementInput> {
    return {};
  }
}
