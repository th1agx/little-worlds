# Visual Benchmark implementation — 2026-08-06

## Scope

An isolated, lazy-loaded `benchmark` scene now validates a small 30 × 30 m meadow. It does not replace the Hub, change locomotion, alter Limiar work or introduce gameplay, audio, UI, final shaders or final assets.

## Composition

- a clear central walking path and gently displaced terrain;
- dense vegetation at the edges, using three trees as the primary silhouette family and two bush families beneath them;
- grouped purple/yellow flowers and varied grass as restrained accents;
- a calm turquoise water strip and warm late-afternoon sun disc;
- three cliff placements and scattered rocks framing depth, with warm key, cool fill and benchmark-specific fog from the existing environment manager.

Terrain, water and path are deliberately owned lightweight geometry. Water is a non-reflective `MeshStandardMaterial` plane with a tiny vertical motion; it is not a physical simulation and has no new dependency. No final wind shader was added: moving foliage vertices without source-appropriate deformation would falsely imply a finished rendering system.

## Runtime architecture

`sceneRegistry` uses a static `React.lazy` import, so benchmark code and its GLTF requests happen only after the development panel selects `benchmark`. `useBenchmarkAssetLibrary` loads the 14 assets in parallel, exposes an in-canvas terrain/water fallback, and disposes geometries, materials and textures when the scene unmounts. Repeated single-mesh foliage uses `InstancedMesh`; major composition assets are cloned in small counts to preserve their multiple material groups.

The selected source GLBs declare fully metallic materials. Since this benchmark intentionally has no environment-map/reflection pass, its loader normalizes only those runtime material parameters to non-metallic, high-roughness lighting. It preserves geometry and authored base colors, avoids a black reflective result, and is not an asset conversion or final material system.

The development metrics panel now shows renderer draw calls, triangles, geometries, textures and programs in addition to FPS. These are renderer observations, not extrapolated estimates.

## Known limits and decision gate

This is a valid legal/performance experiment, not a claim of visual parity with the references. The selected Kenney assets make the scene materially better than the primitive blockout, but their low-poly kit language remains visible. The next human review should assess the frame, density, scale and movement before any Hub integration. Only measured runtime data and that review may justify LOD, geometry compression, texture compression, a different CC0 source or an investment proposal.
