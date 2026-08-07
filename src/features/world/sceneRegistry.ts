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
  "benchmark-v2": {
    id: "benchmark-v2",
    component: lazy(() => import("@/features/world/scenes/benchmark-v2/BenchmarkV2Scene")),
  },
  "benchmark-v3": {
    id: "benchmark-v3",
    component: lazy(() => import("@/features/world/scenes/benchmark-v3/BenchmarkV3Scene")),
  },
};

export function getSceneDefinition(sceneId: SceneId): SceneDefinition {
  return sceneDefinitions[sceneId];
}

export function getRegisteredSceneIds(): readonly SceneId[] {
  return Object.keys(sceneDefinitions) as SceneId[];
}
