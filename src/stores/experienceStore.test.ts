import { afterEach, describe, expect, it } from "vitest";
import { CONTROLLED_LEVITATION_DEFAULTS } from "@/features/player/locomotion/PlayerMotionModel";
import { useExperienceStore } from "@/stores/experienceStore";

afterEach(() => {
  useExperienceStore.setState({
    activeSceneId: "hub",
    transitionTarget: null,
    transitionPhase: "idle",
    portal: null,
    portalPhase: "dormant",
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

  it("only activates the scene transition from a ready portal", () => {
    const store = useExperienceStore.getState();
    store.setPortalState(
      { id: "hub-to-projects", destination: "projects", label: "Explorar Projetos" },
      "ready",
    );
    store.requestPortalActivation();

    expect(useExperienceStore.getState().portalPhase).toBe("transitioning");
    expect(useExperienceStore.getState().transitionTarget).toBe("projects");
    expect(useExperienceStore.getState().transitionPhase).toBe("out");
  });
});
