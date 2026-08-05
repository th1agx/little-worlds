import { lazy } from "react";
import type { SceneDefinition, SceneId } from "@/features/world/types";

const sceneDefinitions: Record<SceneId, SceneDefinition> = {
  hub: {
    id: "hub",
    component: lazy(() => import("@/features/world/scenes/hub/HubScene")),
  },
  test: {
    id: "test",
    component: lazy(() => import("@/features/world/scenes/test/TestScene")),
  },
};

export function getSceneDefinition(sceneId: SceneId): SceneDefinition {
  return sceneDefinitions[sceneId];
}

export function getRegisteredSceneIds(): readonly SceneId[] {
  return Object.keys(sceneDefinitions) as SceneId[];
}
