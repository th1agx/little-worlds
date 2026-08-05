import { describe, expect, it } from "vitest";
import { AssetLoader } from "@/lib/assets/AssetLoader";

describe("AssetLoader", () => {
  it("keeps values in the in-memory cache by manifest id", () => {
    const loader = new AssetLoader();
    const asset = {
      id: "bootstrap-model",
      kind: "model" as const,
      runtimePath: "/assets/models/bootstrap.glb",
    };

    const value = loader.set(asset, { loaded: true });

    expect(loader.has(asset.id)).toBe(true);
    expect(loader.get<typeof value>(asset.id)).toBe(value);
  });
});
