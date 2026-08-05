import type { InputAction } from "@/features/player/input/types";

export const defaultKeyboardBindings: Readonly<Record<string, InputAction>> = {
  KeyW: "moveForward",
  ArrowUp: "moveForward",
  KeyS: "moveBackward",
  ArrowDown: "moveBackward",
  KeyA: "moveLeft",
  ArrowLeft: "moveLeft",
  KeyD: "moveRight",
  ArrowRight: "moveRight",
  ShiftLeft: "fastStep",
  ShiftRight: "fastStep",
  Space: "jump",
};
