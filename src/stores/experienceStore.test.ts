import { afterEach, describe, expect, it } from "vitest";
import { CONTROLLED_LEVITATION_DEFAULTS } from "@/features/player/locomotion/PlayerMotionModel";
import { useExperienceStore } from "@/stores/experienceStore";

afterEach(() => {
  useExperienceStore.setState({
    activeSceneId: "hub",
    transitionTarget: null,
    transitionPhase: "idle",
    threshold: null,
    thresholdPhase: "dormant",
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

  it("transitions between vertical-slice scenes through a short explicit phase", () => {
    const store = useExperienceStore.getState();
    store.requestSceneTransition("projects");
    expect(useExperienceStore.getState().transitionPhase).toBe("out");
    store.advanceSceneTransition();
    expect(useExperienceStore.getState().activeSceneId).toBe("projects");
    expect(useExperienceStore.getState().transitionPhase).toBe("in");
    store.advanceSceneTransition();
    expect(useExperienceStore.getState().transitionPhase).toBe("idle");
  });

  it("only activates the scene transition from an active threshold", () => {
    const store = useExperienceStore.getState();
    store.setThresholdState(
      {
        id: "limiar-hub-projects",
        destination: "projects",
        label: "Atravessar para Projetos",
        palette: { core: "#f7e9cf", glow: "#f2bc5b", atmosphere: "#ce714a" },
      },
      "active",
    );
    store.requestThresholdCrossing();

    expect(useExperienceStore.getState().thresholdPhase).toBe("crossing");
    expect(useExperienceStore.getState().transitionTarget).toBe("projects");
    expect(useExperienceStore.getState().transitionPhase).toBe("out");
  });
});
