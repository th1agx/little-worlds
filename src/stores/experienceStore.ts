import { create } from "zustand";
import type {
  DevelopmentMetrics,
  ExperienceMode,
  ExperiencePreferences,
} from "@/features/experience/types";
import {
  CONTROLLED_LEVITATION_DEFAULTS,
  type LocomotionModel,
  type LocomotionTuning,
} from "@/features/player/locomotion/PlayerMotionModel";
import type { SceneId } from "@/features/world/types";
import type { ThresholdDescriptor, ThresholdPhase } from "@/features/world/thresholds/types";

const defaultPreferences: ExperiencePreferences = {
  audioEnabled: false,
  masterVolume: 0.35,
  mouseSensitivity: 0.002,
  reducedMotion: false,
  visualMotionEnabled: true,
  jumpEnabled: true,
};

interface ExperienceState {
  activeSceneId: SceneId;
  transitionTarget: SceneId | null;
  transitionPhase: "idle" | "out" | "in";
  threshold: ThresholdDescriptor | null;
  thresholdPhase: ThresholdPhase;
  mode: ExperienceMode;
  pointerLocked: boolean;
  preferences: ExperiencePreferences;
  landingRevision: number;
  locomotionModel: LocomotionModel;
  locomotionTuning: LocomotionTuning;
  metrics: DevelopmentMetrics;
  beginExperience: () => void;
  selectScene: (sceneId: SceneId) => void;
  requestSceneTransition: (sceneId: SceneId) => void;
  setThresholdState: (threshold: ThresholdDescriptor, phase: ThresholdPhase) => void;
  clearThreshold: (thresholdId: string) => void;
  requestThresholdCrossing: () => void;
  advanceSceneTransition: () => void;
  setPointerLocked: (pointerLocked: boolean) => void;
  updatePreferences: (patch: Partial<ExperiencePreferences>) => void;
  signalLanding: () => void;
  setLocomotionModel: (model: LocomotionModel) => void;
  updateLocomotionTuning: (patch: Partial<LocomotionTuning>) => void;
  restoreLocomotionTuning: () => void;
  updateMetrics: (patch: Partial<DevelopmentMetrics>) => void;
}

export const useExperienceStore = create<ExperienceState>((set) => ({
  activeSceneId: "hub",
  transitionTarget: null,
  transitionPhase: "idle",
  threshold: null,
  thresholdPhase: "dormant",
  mode: "welcome",
  pointerLocked: false,
  preferences: defaultPreferences,
  landingRevision: 0,
  locomotionModel: "controlled-levitation",
  locomotionTuning: { ...CONTROLLED_LEVITATION_DEFAULTS },
  metrics: {
    fps: 0,
    sceneId: "hub",
    pointerLocked: false,
    grounded: true,
    locomotion: "idle",
    audioActive: false,
    speed: 0,
    acceleration: 0,
    airborneTime: 0,
    jumpDistance: 0,
    angularVelocity: 0,
    hoverHeight: CONTROLLED_LEVITATION_DEFAULTS.baseHoverHeight,
    verticalVelocity: 0,
    hoverAmplitude: 0,
    hoverState: "grounded-hover",
    dampingIntensity: 0,
    locomotionModel: "controlled-levitation",
  },
  beginExperience: () => set({ mode: "exploring" }),
  selectScene: (sceneId) =>
    set((state) => ({ activeSceneId: sceneId, metrics: { ...state.metrics, sceneId } })),
  requestSceneTransition: (sceneId) =>
    set((state) =>
      state.activeSceneId === sceneId
        ? state
        : { transitionTarget: sceneId, transitionPhase: "out" },
    ),
  setThresholdState: (threshold, thresholdPhase) =>
    set((state) =>
      state.threshold?.id === threshold.id && state.thresholdPhase === thresholdPhase
        ? state
        : { threshold, thresholdPhase },
    ),
  clearThreshold: (thresholdId) =>
    set((state) =>
      state.threshold?.id === thresholdId ? { threshold: null, thresholdPhase: "dormant" } : state,
    ),
  requestThresholdCrossing: () =>
    set((state) =>
      state.threshold && state.thresholdPhase === "active"
        ? {
            thresholdPhase: "crossing",
            transitionTarget: state.threshold.destination,
            transitionPhase: "out",
          }
        : state,
    ),
  advanceSceneTransition: () =>
    set((state) => {
      if (state.transitionPhase === "out" && state.transitionTarget) {
        return {
          activeSceneId: state.transitionTarget,
          metrics: { ...state.metrics, sceneId: state.transitionTarget },
          transitionPhase: "in",
        };
      }
      return { transitionTarget: null, transitionPhase: "idle" };
    }),
  setPointerLocked: (pointerLocked) =>
    set((state) => ({ pointerLocked, metrics: { ...state.metrics, pointerLocked } })),
  updatePreferences: (patch) =>
    set((state) => ({ preferences: { ...state.preferences, ...patch } })),
  signalLanding: () => set((state) => ({ landingRevision: state.landingRevision + 1 })),
  setLocomotionModel: (locomotionModel) =>
    set((state) => ({
      locomotionModel,
      metrics: { ...state.metrics, locomotionModel },
    })),
  updateLocomotionTuning: (patch) =>
    set((state) => ({ locomotionTuning: { ...state.locomotionTuning, ...patch } })),
  restoreLocomotionTuning: () => set({ locomotionTuning: { ...CONTROLLED_LEVITATION_DEFAULTS } }),
  updateMetrics: (patch) => set((state) => ({ metrics: { ...state.metrics, ...patch } })),
}));
