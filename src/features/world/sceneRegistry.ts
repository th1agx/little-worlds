import { lazy } from "react";
import type { SceneDefinition, SceneId } from "@/features/world/types";

const sceneDefinitions: Record<SceneId, SceneDefinition> = {
  hub: {
    id: "hub",
    component: lazy(() => import("@/features/world/scenes/hub/HubScene")),
  },
  projects: {
    id: "projects",
    component: lazy(() => import("@/features/world/scenes/projects/ProjectsScene")),
  },
  benchmark: {
    id: "benchmark",
    component: lazy(() => import("@/features/world/scenes/benchmark/BenchmarkScene")),
  },
};

export function getSceneDefinition(sceneId: SceneId): SceneDefinition {
  return sceneDefinitions[sceneId];
}

export function getRegisteredSceneIds(): readonly SceneId[] {
  return Object.keys(sceneDefinitions) as SceneId[];
}
