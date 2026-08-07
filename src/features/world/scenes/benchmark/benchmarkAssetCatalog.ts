export const benchmarkAssetPaths = {
  treeDefault: "/assets/vegetation/benchmark/tree_default.glb",
  treeOak: "/assets/vegetation/benchmark/tree_oak.glb",
  treeTall: "/assets/vegetation/benchmark/tree_tall.glb",
  bushDetailed: "/assets/vegetation/benchmark/plant_bushDetailed.glb",
  bushLarge: "/assets/vegetation/benchmark/plant_bushLarge.glb",
  grass: "/assets/vegetation/benchmark/grass.glb",
  grassLarge: "/assets/vegetation/benchmark/grass_large.glb",
  grassLeafs: "/assets/vegetation/benchmark/grass_leafsLarge.glb",
  flowerPurple: "/assets/vegetation/benchmark/flower_purpleA.glb",
  flowerYellow: "/assets/vegetation/benchmark/flower_yellowB.glb",
  rockLarge: "/assets/rocks/benchmark/rock_largeB.glb",
  rockTall: "/assets/rocks/benchmark/rock_tallC.glb",
  rockFlat: "/assets/rocks/benchmark/rock_smallFlatA.glb",
  cliffLarge: "/assets/world/benchmark/cliff_large_rock.glb",
} as const;

export type BenchmarkAssetId = keyof typeof benchmarkAssetPaths;
