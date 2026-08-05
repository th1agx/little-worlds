"use client";

import { getSceneDefinition } from "@/features/world/sceneRegistry";
import type { SceneId } from "@/features/world/types";

interface SceneManagerProps {
  sceneId: SceneId;
}

export function SceneManager({ sceneId }: SceneManagerProps) {
  const Scene = getSceneDefinition(sceneId).component;

  return <Scene />;
}
