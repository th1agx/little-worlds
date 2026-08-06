import { describe, expect, it } from "vitest";
import { InputController } from "@/features/player/input/InputController";

describe("InputController", () => {
  it("starts with no movement or look input", () => {
    const controller = new InputController();

    expect(controller.snapshot()).toEqual({
      look: { x: 0, y: 0 },
      movement: { forward: 0, right: 0, fastStep: false },
      jumpRequested: false,
      interactRequested: false,
    });
  });
});
