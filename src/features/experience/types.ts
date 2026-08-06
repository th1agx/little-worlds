import type { SceneId } from "@/features/world/types";
import type { HoverState } from "@/features/player/locomotion/PlayerMotionModel";
import type {
  LocomotionModel,
  LocomotionTuning,
} from "@/features/player/locomotion/PlayerMotionModel";

export type ExperienceMode = "welcome" | "exploring";

export interface ExperiencePreferences {
  audioEnabled: boolean;
  masterVolume: number;
  mouseSensitivity: number;
  reducedMotion: boolean;
  visualMotionEnabled: boolean;
  jumpEnabled: boolean;
}

export interface DevelopmentMetrics {
  fps: number;
  sceneId: SceneId;
  pointerLocked: boolean;
  grounded: boolean;
  locomotion: "idle" | "walking" | "fast-step" | "airborne";
  audioActive: boolean;
  speed: number;
  acceleration: number;
  airborneTime: number;
  jumpDistance: number;
  angularVelocity: number;
  hoverHeight: number;
  verticalVelocity: number;
  hoverAmplitude: number;
  hoverState: HoverState;
  dampingIntensity: number;
  locomotionModel: LocomotionModel;
  drawCalls: number;
  triangles: number;
  geometries: number;
  textures: number;
  programs: number;
}

export interface LocomotionCalibration {
  model: LocomotionModel;
  tuning: LocomotionTuning;
}
