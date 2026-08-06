"use client";

import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Mesh, type Material, type MeshStandardMaterial, type Object3D, type Texture } from "three";
import {
  benchmarkAssetPaths,
  type BenchmarkAssetId,
} from "@/features/world/scenes/benchmark/benchmarkAssetCatalog";

export type BenchmarkAssetLibrary = Record<BenchmarkAssetId, Object3D>;

function disposeMaterial(material: Material, textures: Set<Texture>) {
  for (const value of Object.values(material)) {
    if (value && typeof value === "object" && "isTexture" in value) textures.add(value as Texture);
  }
  material.dispose();
}

function normalizeBenchmarkMaterial(material: Material) {
  const standardMaterial = material as MeshStandardMaterial;
  if (typeof standardMaterial.metalness !== "number") return;

  // Kenney's source meshes intentionally use fully metallic vertex-color materials.
  // This benchmark has no environment-map pass, so retain the authored colors while
  // making the shared material respond predictably to its directional/hemisphere light.
  standardMaterial.metalness = 0;
  standardMaterial.roughness = 0.88;
  standardMaterial.needsUpdate = true;
}

function normalizeBenchmarkLibrary(library: BenchmarkAssetLibrary) {
  for (const object of Object.values(library)) {
    object.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach(normalizeBenchmarkMaterial);
    });
  }
}

function disposeLibrary(library: BenchmarkAssetLibrary) {
  const geometries = new Set<{ dispose: () => void }>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();

  for (const object of Object.values(library)) {
    object.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      geometries.add(child.geometry);
      const meshMaterials = Array.isArray(child.material) ? child.material : [child.material];
      meshMaterials.forEach((material) => materials.add(material));
    });
  }

  materials.forEach((material) => disposeMaterial(material, textures));
  textures.forEach((texture) => texture.dispose());
  geometries.forEach((geometry) => geometry.dispose());
}

export function useBenchmarkAssetLibrary() {
  const [library, setLibrary] = useState<BenchmarkAssetLibrary | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const libraryRef = useRef<BenchmarkAssetLibrary | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    let active = true;

    void Promise.all(
      Object.entries(benchmarkAssetPaths).map(async ([id, runtimePath]) => {
        const gltf = await loader.loadAsync(runtimePath);
        return [id as BenchmarkAssetId, gltf.scene] as const;
      }),
    )
      .then((entries) => {
        const nextLibrary = Object.fromEntries(entries) as unknown as BenchmarkAssetLibrary;
        if (!active) {
          disposeLibrary(nextLibrary);
          return;
        }
        normalizeBenchmarkLibrary(nextLibrary);
        libraryRef.current = nextLibrary;
        setLibrary(nextLibrary);
      })
      .catch((reason: unknown) => {
        if (active)
          setError(reason instanceof Error ? reason : new Error("Falha ao carregar assets."));
      });

    return () => {
      active = false;
      if (libraryRef.current) disposeLibrary(libraryRef.current);
      libraryRef.current = null;
    };
  }, []);

  return { error, library };
}
