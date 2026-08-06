import type { SceneId } from "@/features/world/types";

export type ThresholdPhase = "dormant" | "aware" | "active" | "crossing" | "resting";

export interface ThresholdPalette {
  core: string;
  glow: string;
  atmosphere: string;
}

export interface ThresholdDescriptor {
  id: string;
  destination: SceneId;
  label: string;
  palette: ThresholdPalette;
}
