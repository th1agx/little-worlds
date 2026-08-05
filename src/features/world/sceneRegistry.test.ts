import { describe, expect, it } from "vitest";
import { getRegisteredSceneIds, getSceneDefinition } from "@/features/world/sceneRegistry";

describe("scene registry", () => {
  it("registers only bootstrap scenes", () => {
    expect(getRegisteredSceneIds()).toEqual(["hub", "test"]);
  });

  it("exposes a lazy scene boundary", () => {
    expect(getSceneDefinition("hub").component).toBeDefined();
  });
});
