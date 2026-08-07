import type { ComponentType, LazyExoticComponent } from "react";

export const sceneIds = ["hub", "projects", "benchmark", "benchmark-v2", "benchmark-v3"] as const;

export type SceneId = (typeof sceneIds)[number];

export interface SceneModule {
  default: ComponentType;
}

export interface SceneDefinition {
  id: SceneId;
  component: LazyExoticComponent<ComponentType>;
}
