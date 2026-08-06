import type { AssetManifest } from "@/lib/assets/types";

export const bootstrapAssetManifest: AssetManifest = [
  {
    id: "kenney-nature-tree-default",
    kind: "model",
    runtimePath: "/assets/vegetation/benchmark/tree_default.glb",
    sourceId: "kenney-nature-kit-2.1",
  },
  {
    id: "kenney-nature-cliff-large",
    kind: "model",
    runtimePath: "/assets/world/benchmark/cliff_large_rock.glb",
    sourceId: "kenney-nature-kit-2.1",
  },
] as const;
