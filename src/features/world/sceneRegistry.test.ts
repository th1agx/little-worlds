import { describe, expect, it } from "vitest";
import { getRegisteredSceneIds, getSceneDefinition } from "@/features/world/sceneRegistry";

describe("scene registry", () => {
  it("registers the two vertical-slice blockout scenes", () => {
    expect(getRegisteredSceneIds()).toEqual(["hub", "projects"]);
  });

  it("exposes a lazy scene boundary", () => {
    expect(getSceneDefinition("hub").component).toBeDefined();
    expect(getSceneDefinition("projects").component).toBeDefined();
  });
});
