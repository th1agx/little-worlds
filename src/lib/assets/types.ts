export type AssetKind = "audio" | "font" | "model" | "texture";

export interface AssetManifestEntry {
  id: string;
  kind: AssetKind;
  runtimePath: string;
}

export type AssetManifest = readonly AssetManifestEntry[];
