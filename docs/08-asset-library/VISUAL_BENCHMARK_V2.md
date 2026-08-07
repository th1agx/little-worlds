# Visual Benchmark V2 — art direction experiment

**Status:** implementation ready for human visual review  
**Date:** 2026-08-06  
**Scope:** isolated `benchmark-v2` scene; Benchmark V1, Hub, Projects and locomotion remain unchanged.

## Intent

V1 validated legal asset intake and scene lifecycle, but its visible result read as a sparse low-poly kit. V2 changes the source of identity: a composed, authored environment carries the frame, while the existing CC0 Kenney models are limited to instanced ground-cover. No new runtime asset was acquired.

## Art direction changes

- A procedural gradient sky establishes a peach-to-mauve horizon and deep chromatic zenith.
- A curved path and a separate turquoise watercourse converge on a single waterfall/rock landmark.
- Terrain follows a shallow stream depression and raised rear shelf rather than a flat plane.
- Original asymmetric canopy clusters frame the camera. Their purpose is mass, overlap and silhouette, not botanical realism.
- Large mineral forms use a restrained plum/warm-stone family, leaving a clear central route and denser margins.
- The waterfall uses one small transparent custom material and moves only through its local time uniform. It is an illustrative motion cue, not a fluid simulation.

## Asset decision

The official Quaternius Stylized Nature MegaKit was researched as a CC0 candidate. Its official page confirms CC0, glTF availability and 81 free Standard assets, but its anonymous download flow did not deliver an archive to the automated acquisition session. No asset from that source is in the repository or runtime; no workaround will be used. The V2 experiment therefore makes no new licensing claim.

## Screenshot review points

| Point            | Intended reading                                                    | Current assessment                                                        |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| A — entrance     | foreground rock/grass, water diagonal, path and waterfall hierarchy | legible; primary path is clear                                            |
| B — landmark     | waterfall framed by two mineral masses and tree silhouettes         | stronger than V1; waterfall reads, but rocks remain too faceted           |
| C — lateral edge | vegetation/terrain layers with open walking corridor                | composition remains navigable; ground-cover still lacks painterly density |

## Honest gate

V2 is materially more directed than V1 and proves that the project can create hierarchy without a provider demo scene. It does **not** yet reach the painterly, richly layered quality of the supplied references. The key limitation is not WebGL infrastructure; it is the absence of a legally acquired high-quality foliage/cliff source and the deliberately lightweight authored geometry used for this experiment.

## Technical notes

- The sky and waterfall shaders include Three.js tone-mapping and output-color-space chunks, preserving the renderer's existing ACES/sRGB pipeline.
- The scene remains lazy-loaded. No post-processing library or heavy effect pass was added.
- V2 uses one shadow-casting directional light plus hemisphere/ambient fill from the environment manager. It remains within the project shadow-light budget.
- Headless Chromium observations are useful for draw calls and triangle counts, but not FPS acceptance. Device profiling is still required.
