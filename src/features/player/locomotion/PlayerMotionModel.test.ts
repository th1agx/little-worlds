import { describe, expect, it } from "vitest";
import { Vector3 } from "three";
import {
  CONTROLLED_LEVITATION_DEFAULTS,
  createPlayerMotionState,
  getLocomotionTuning,
  PLAYER_EYE_HEIGHT,
  stepPlayerMotion,
} from "@/features/player/locomotion/PlayerMotionModel";

const still = { forward: 0, right: 0, fastStep: false };
const passthrough = (_current: Vector3, intended: Vector3) => intended;
const initialPosition = () =>
  new Vector3(0, PLAYER_EYE_HEIGHT + CONTROLLED_LEVITATION_DEFAULTS.baseHoverHeight, 0);

function step(state: ReturnType<typeof createPlayerMotionState>, overrides = {}) {
  return stepPlayerMotion(
    state,
    {
      delta: 0.016,
      movement: still,
      yaw: 0,
      jumpRequested: false,
      jumpEnabled: true,
      groundHeight: 0,
      model: "controlled-levitation" as const,
      tuning: { ...CONTROLLED_LEVITATION_DEFAULTS },
      ...overrides,
    },
    passthrough,
  );
}

describe("controlled levitation", () => {
  it("makes normal movement perceptibly faster than Legacy", () => {
    const controlled = createPlayerMotionState(initialPosition());
    const legacy = createPlayerMotionState(initialPosition());
    const movement = { forward: 1, right: 0, fastStep: false };
    let controlledResult = step(controlled, { movement });
    let legacyResult = stepPlayerMotion(
      legacy,
      {
        delta: 0.016,
        movement,
        yaw: 0,
        jumpRequested: false,
        jumpEnabled: true,
        groundHeight: 0,
        model: "legacy",
        tuning: { ...CONTROLLED_LEVITATION_DEFAULTS },
      },
      passthrough,
    );
    for (let index = 0; index < 21; index += 1) {
      controlledResult = step(controlled, { movement });
      legacyResult = stepPlayerMotion(
        legacy,
        {
          delta: 0.016,
          movement,
          yaw: 0,
          jumpRequested: false,
          jumpEnabled: true,
          groundHeight: 0,
          model: "legacy",
          tuning: { ...CONTROLLED_LEVITATION_DEFAULTS },
        },
        passthrough,
      );
    }
    expect(controlledResult.speed).toBeGreaterThan(3.5);
    expect(controlledResult.speed).toBeGreaterThan(legacyResult.speed * 1.8);
  });

  it("normalizes diagonal movement", () => {
    const diagonal = createPlayerMotionState(initialPosition());
    const straight = createPlayerMotionState(initialPosition());
    step(diagonal, { delta: 1, movement: { forward: 1, right: 1, fastStep: false } });
    step(straight, { delta: 1, movement: { forward: 1, right: 0, fastStep: false } });
    expect(Math.hypot(diagonal.position.x, diagonal.position.z)).toBeCloseTo(
      Math.hypot(straight.position.x, straight.position.z),
      5,
    );
  });

  it("keeps a fixed terrain-relative suspension while the visual float continues", () => {
    const state = createPlayerMotionState(initialPosition());
    for (let index = 0; index < 240; index += 1) step(state);
    expect(state.controlledHeight).toBe(CONTROLLED_LEVITATION_DEFAULTS.baseHoverHeight);
    expect(Math.abs(state.hoverOffset)).toBeGreaterThan(0.005);
  });

  it("preserves momentum on a single high impulse and rejects double impulse", () => {
    const state = createPlayerMotionState(initialPosition());
    state.horizontalVelocity.z = -4.5;
    const first = step(state, { jumpRequested: true });
    const afterJump = state.position.z;
    const second = step(state, { jumpRequested: true });
    step(state);
    expect(first.jumped).toBe(true);
    expect(second.jumped).toBe(false);
    expect(state.position.z).toBeLessThan(afterJump);
    expect(state.horizontalVelocity.z).toBeLessThanOrEqual(-4.5);
  });

  it("produces a visible arc and settles back at the active suspension height", () => {
    const state = createPlayerMotionState(initialPosition());
    let peak = state.position.y;
    let result = step(state, { jumpRequested: true });
    while (!result.landed && state.airborneTime < 2) {
      result = step(state);
      peak = Math.max(peak, state.position.y);
    }
    expect(
      peak - (PLAYER_EYE_HEIGHT + CONTROLLED_LEVITATION_DEFAULTS.baseHoverHeight),
    ).toBeGreaterThan(1.1);
    expect(result.airborneTime).toBeGreaterThan(0.9);
    expect(state.position.y).toBeCloseTo(
      PLAYER_EYE_HEIGHT + CONTROLLED_LEVITATION_DEFAULTS.baseHoverHeight,
      3,
    );
  });

  it("keeps the legacy contract available for direct comparison", () => {
    expect(
      getLocomotionTuning("legacy", { ...CONTROLLED_LEVITATION_DEFAULTS }).baseHoverHeight,
    ).toBe(0.045);
    expect(
      getLocomotionTuning("controlled-levitation", { ...CONTROLLED_LEVITATION_DEFAULTS }).walkSpeed,
    ).toBe(4);
  });
});
