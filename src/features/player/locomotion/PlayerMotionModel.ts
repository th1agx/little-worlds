import { Vector3 } from "three";
import type { MovementInput } from "@/features/player/input/types";

export const PLAYER_EYE_HEIGHT = 1.65;

export type LocomotionModel = "legacy" | "controlled-levitation";
export type HoverState = "grounded-hover" | "ascending" | "descending" | "settling";

export interface LocomotionTuning {
  walkSpeed: number;
  fastSpeed: number;
  acceleration: number;
  deceleration: number;
  baseHoverHeight: number;
  hoverAmplitude: number;
  hoverFrequency: number;
  jumpVelocity: number;
  ascentGravity: number;
  descentGravity: number;
  airControl: number;
  cameraHoverFollow: number;
  cameraImpulseReaction: number;
  cameraRestReturn: number;
  rotationSmoothing: number;
}

export const CONTROLLED_LEVITATION_DEFAULTS: Readonly<LocomotionTuning> = {
  walkSpeed: 4,
  fastSpeed: 6,
  acceleration: 6,
  deceleration: 6,
  baseHoverHeight: 0.15,
  hoverAmplitude: 0.11,
  hoverFrequency: 0.38,
  jumpVelocity: 4.4,
  ascentGravity: 7.9,
  descentGravity: 4,
  airControl: 0.65,
  cameraHoverFollow: 0.35,
  cameraImpulseReaction: 0.06,
  cameraRestReturn: 20,
  rotationSmoothing: 18,
};

const LEGACY_TUNING: Readonly<LocomotionTuning> = {
  ...CONTROLLED_LEVITATION_DEFAULTS,
  walkSpeed: 2.1,
  fastSpeed: 2.814,
  acceleration: 7.2,
  deceleration: 7,
  baseHoverHeight: 0.045,
  hoverAmplitude: 0.018,
  hoverFrequency: 0.18,
  jumpVelocity: 2.7,
  ascentGravity: 5.8,
  descentGravity: 5.8,
  airControl: 0,
  cameraHoverFollow: 0.12,
  cameraImpulseReaction: 0.035,
  cameraRestReturn: 24,
  rotationSmoothing: 14,
};

export function getLocomotionTuning(
  model: LocomotionModel,
  controlledTuning: LocomotionTuning,
): LocomotionTuning {
  return model === "legacy" ? LEGACY_TUNING : controlledTuning;
}

export interface PlayerMotionState {
  position: Vector3;
  horizontalVelocity: Vector3;
  intendedPosition: Vector3;
  verticalVelocity: number;
  grounded: boolean;
  airborneTime: number;
  jumpOriginX: number;
  jumpOriginZ: number;
  hoverTime: number;
  hoverOffset: number;
  previousHoverOffset: number;
  hoverVerticalVelocity: number;
  controlledHeight: number;
  controlledVerticalVelocity: number;
  settlingTime: number;
}

export interface MotionStepInput {
  delta: number;
  movement: MovementInput;
  yaw: number;
  jumpRequested: boolean;
  jumpEnabled: boolean;
  groundHeight: number;
  model: LocomotionModel;
  tuning: LocomotionTuning;
}

export interface MotionStepResult {
  jumped: boolean;
  landed: boolean;
  locomotion: "idle" | "walking" | "fast-step" | "airborne";
  hoverState: HoverState;
  speed: number;
  acceleration: number;
  airborneTime: number;
  jumpDistance: number;
  hoverHeight: number;
  hoverOffset: number;
  verticalVelocity: number;
  dampingIntensity: number;
}

export function createPlayerMotionState(position = new Vector3()): PlayerMotionState {
  return {
    position,
    horizontalVelocity: new Vector3(),
    intendedPosition: new Vector3(),
    verticalVelocity: 0,
    grounded: true,
    airborneTime: 0,
    jumpOriginX: position.x,
    jumpOriginZ: position.z,
    hoverTime: 0,
    hoverOffset: 0,
    previousHoverOffset: 0,
    hoverVerticalVelocity: 0,
    controlledHeight: CONTROLLED_LEVITATION_DEFAULTS.baseHoverHeight,
    controlledVerticalVelocity: 0,
    settlingTime: 0,
  };
}

export function stepPlayerMotion(
  state: PlayerMotionState,
  input: MotionStepInput,
  resolveHorizontal: (current: Vector3, intended: Vector3) => Vector3,
): MotionStepResult {
  const delta = Math.min(input.delta, 1 / 20);
  const tuning = getLocomotionTuning(input.model, input.tuning);
  const previousVelocityX = state.horizontalVelocity.x;
  const previousVelocityZ = state.horizontalVelocity.z;
  const inputLength = Math.hypot(input.movement.right, input.movement.forward);
  const normalizedRight =
    inputLength > 1 ? input.movement.right / inputLength : input.movement.right;
  const normalizedForward =
    inputLength > 1 ? input.movement.forward / inputLength : input.movement.forward;
  const speedLimit = input.movement.fastStep ? tuning.fastSpeed : tuning.walkSpeed;
  const localZ = -normalizedForward;
  const targetVelocityX =
    (normalizedRight * Math.cos(input.yaw) + localZ * Math.sin(input.yaw)) * speedLimit;
  const targetVelocityZ =
    (-normalizedRight * Math.sin(input.yaw) + localZ * Math.cos(input.yaw)) * speedLimit;
  const jumped = input.jumpEnabled && input.jumpRequested && state.grounded;

  const currentSpeed = Math.hypot(state.horizontalVelocity.x, state.horizontalVelocity.z);
  const targetSpeed = Math.hypot(targetVelocityX, targetVelocityZ);
  const alignment =
    currentSpeed > 0.001 && targetSpeed > 0.001
      ? (state.horizontalVelocity.x * targetVelocityX +
          state.horizontalVelocity.z * targetVelocityZ) /
        (currentSpeed * targetSpeed)
      : 1;
  const horizontalResponse =
    inputLength === 0
      ? tuning.deceleration
      : alignment < 0.45
        ? tuning.acceleration * 1.65
        : tuning.acceleration;

  if (state.grounded && !jumped) {
    const blend = 1 - Math.exp(-horizontalResponse * delta);
    state.horizontalVelocity.x += (targetVelocityX - state.horizontalVelocity.x) * blend;
    state.horizontalVelocity.z += (targetVelocityZ - state.horizontalVelocity.z) * blend;
  } else if (tuning.airControl > 0 && inputLength > 0) {
    const airBlend = 1 - Math.exp(-tuning.airControl * delta);
    state.horizontalVelocity.x += (targetVelocityX - state.horizontalVelocity.x) * airBlend;
    state.horizontalVelocity.z += (targetVelocityZ - state.horizontalVelocity.z) * airBlend;
  }

  if (jumped) {
    state.grounded = false;
    state.verticalVelocity = tuning.jumpVelocity;
    state.airborneTime = 0;
    state.jumpOriginX = state.position.x;
    state.jumpOriginZ = state.position.z;
  }

  state.intendedPosition.copy(state.position).addScaledVector(state.horizontalVelocity, delta);
  const resolved = resolveHorizontal(state.position, state.intendedPosition);
  state.position.x = resolved.x;
  state.position.z = resolved.z;

  const targetHeight = tuning.baseHoverHeight;
  if (state.grounded) {
    state.controlledHeight = targetHeight;
    state.controlledVerticalVelocity = 0;
  }

  const baseHeight = input.groundHeight + PLAYER_EYE_HEIGHT + state.controlledHeight;
  let landed = false;
  if (!state.grounded) {
    state.airborneTime += delta;
    state.verticalVelocity -=
      (state.verticalVelocity >= 0 ? tuning.ascentGravity : tuning.descentGravity) * delta;
    state.position.y += state.verticalVelocity * delta;
    if (state.position.y <= baseHeight) {
      state.position.y = baseHeight;
      state.verticalVelocity = 0;
      state.grounded = true;
      state.settlingTime = 0.32;
      landed = true;
    }
  } else {
    const follow = 1 - Math.exp(-18 * delta);
    state.position.y += (baseHeight - state.position.y) * follow;
  }

  state.hoverTime += delta;
  state.previousHoverOffset = state.hoverOffset;
  const phase = state.hoverTime * Math.PI * 2 * tuning.hoverFrequency;
  state.hoverOffset =
    tuning.hoverAmplitude * (Math.sin(phase) * 0.78 + Math.sin(phase * 0.57 + 1.2) * 0.22);
  state.hoverVerticalVelocity =
    (state.hoverOffset - state.previousHoverOffset) / Math.max(delta, 0.001);
  state.settlingTime = Math.max(0, state.settlingTime - delta);

  const speed = Math.hypot(state.horizontalVelocity.x, state.horizontalVelocity.z);
  const acceleration =
    Math.hypot(
      state.horizontalVelocity.x - previousVelocityX,
      state.horizontalVelocity.z - previousVelocityZ,
    ) / Math.max(delta, 0.001);
  const jumpDistance = Math.hypot(
    state.position.x - state.jumpOriginX,
    state.position.z - state.jumpOriginZ,
  );
  const locomotion = !state.grounded
    ? "airborne"
    : speed < 0.05
      ? "idle"
      : input.movement.fastStep
        ? "fast-step"
        : "walking";
  const hoverState: HoverState = !state.grounded
    ? state.verticalVelocity >= 0
      ? "ascending"
      : "descending"
    : state.settlingTime > 0
      ? "settling"
      : "grounded-hover";

  return {
    jumped,
    landed,
    locomotion,
    hoverState,
    speed,
    acceleration,
    airborneTime: state.airborneTime,
    jumpDistance,
    hoverHeight: state.controlledHeight + state.hoverOffset,
    hoverOffset: state.hoverOffset,
    verticalVelocity: state.grounded ? state.controlledVerticalVelocity : state.verticalVelocity,
    dampingIntensity: horizontalResponse,
  };
}
