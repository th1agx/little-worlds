import { afterEach, describe, expect, it } from "vitest";
import { CONTROLLED_LEVITATION_DEFAULTS } from "@/features/player/locomotion/PlayerMotionModel";
import { useExperienceStore } from "@/stores/experienceStore";

afterEach(() => {
  useExperienceStore.setState({
    locomotionModel: "controlled-levitation",
    locomotionTuning: { ...CONTROLLED_LEVITATION_DEFAULTS },
  });
});

describe("locomotion calibration store", () => {
  it("switches the runtime model without resetting the scene", () => {
    useExperienceStore.getState().setLocomotionModel("legacy");
    expect(useExperienceStore.getState().locomotionModel).toBe("legacy");
  });

  it("applies and restores development slider values immediately", () => {
    useExperienceStore.getState().updateLocomotionTuning({ walkSpeed: 6.2 });
    expect(useExperienceStore.getState().locomotionTuning.walkSpeed).toBe(6.2);
    useExperienceStore.getState().restoreLocomotionTuning();
    expect(useExperienceStore.getState().locomotionTuning.walkSpeed).toBe(4);
  });

  it("keeps reduced motion independent from levitation mechanics", () => {
    useExperienceStore.getState().updatePreferences({ reducedMotion: true });
    expect(useExperienceStore.getState().preferences.reducedMotion).toBe(true);
    expect(useExperienceStore.getState().locomotionTuning.baseHoverHeight).toBe(0.15);
  });
});
