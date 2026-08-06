import { describe, expect, it } from "vitest";
import { getRegisteredSceneIds, getSceneDefinition } from "@/features/world/sceneRegistry";

describe("scene registry", () => {
  it("registers the two vertical-slice blockout scenes", () => {
    expect(getRegisteredSceneIds()).toEqual(["hub", "projects", "benchmark", "benchmark-v2"]);
  });

  it("exposes a lazy scene boundary", () => {
    expect(getSceneDefinition("hub").component).toBeDefined();
    expect(getSceneDefinition("projects").component).toBeDefined();
    expect(getSceneDefinition("benchmark").component).toBeDefined();
    expect(getSceneDefinition("benchmark-v2").component).toBeDefined();
  });
});
