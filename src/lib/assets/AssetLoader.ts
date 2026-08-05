import { LoadingManager } from "three";
import type { AssetManifestEntry } from "@/lib/assets/types";

export class AssetLoader {
  readonly manager = new LoadingManager();
  private readonly cache = new Map<string, unknown>();

  get<T>(assetId: string): T | undefined {
    return this.cache.get(assetId) as T | undefined;
  }

  set<T>(asset: AssetManifestEntry, value: T): T {
    this.cache.set(asset.id, value);
    return value;
  }

  has(assetId: string): boolean {
    return this.cache.has(assetId);
  }

  clear(): void {
    this.cache.clear();
  }
}
