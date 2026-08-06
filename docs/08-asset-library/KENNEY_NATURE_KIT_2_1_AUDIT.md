# Kenney Nature Kit 2.1 — Visual Benchmark audit

**Status:** approved for this isolated benchmark only  
**Source:** [Kenney Nature Kit](https://kenney.nl/assets/nature-kit)  
**Author:** Kenney  
**License:** CC0 1.0 Universal  
**Downloaded:** 2026-08-06  
**Original archive:** 10,537,521 bytes; SHA-256 recorded in [`licenses/assets/kenney-nature-kit-2.1`](../../licenses/assets/kenney-nature-kit-2.1/RECORD.md)

The original package remains in the ignored quarantine area. It contained 329 GLBs and is not promoted as a whole. The 14 selected GLBs are unmodified source files, all with zero embedded textures, images and animations. Measurements below were generated offline by [`tools/assets/audit-glb.mjs`](../../tools/assets/audit-glb.mjs); counts are actual primitive totals, not vendor estimates.

| Runtime file             | Source model         |  Bytes | Meshes / primitives | Vertices | Triangles | Materials | Textures | Selection rationale        |
| ------------------------ | -------------------- | -----: | ------------------: | -------: | --------: | --------: | -------: | -------------------------- |
| `tree_default.glb`       | `tree_default`       |  9,428 |               1 / 2 |      384 |       114 |         2 |        0 | compact conifer silhouette |
| `tree_oak.glb`           | `tree_oak`           | 14,644 |               1 / 2 |      648 |       196 |         2 |        0 | rounder canopy contrast    |
| `tree_tall.glb`          | `tree_tall`          |  7,000 |               1 / 2 |      264 |        72 |         2 |        0 | vertical framing           |
| `plant_bushDetailed.glb` | `plant_bushDetailed` | 10,172 |               1 / 1 |      232 |       104 |         1 |        0 | dense low-volume layer     |
| `plant_bushLarge.glb`    | `plant_bushLarge`    |  6,436 |               1 / 1 |      132 |        60 |         1 |        0 | large secondary mass       |
| `grass.glb`              | `grass`              | 11,496 |               1 / 1 |      264 |       132 |         1 |        0 | base grass layer           |
| `grass_large.glb`        | `grass_large`        | 18,504 |               1 / 1 |      448 |       224 |         1 |        0 | taller variation           |
| `grass_leafsLarge.glb`   | `grass_leafsLarge`   | 13,988 |               1 / 1 |      336 |       144 |         1 |        0 | broad-leaf variation       |
| `flower_purpleA.glb`     | `flower_purpleA`     |  7,112 |               1 / 2 |      268 |        76 |         2 |        0 | restrained cool accent     |
| `flower_yellowB.glb`     | `flower_yellowB`     | 11,256 |               1 / 2 |      468 |       154 |         2 |        0 | warm accent near the path  |
| `rock_largeB.glb`        | `rock_largeB`        |  8,560 |               1 / 3 |      489 |        85 |         3 |        0 | compositional mass         |
| `rock_tallC.glb`         | `rock_tallC`         |  5,184 |               1 / 3 |      228 |        37 |         3 |        0 | vertical counterpoint      |
| `rock_smallFlatA.glb`    | `rock_smallFlatA`    |  3,300 |               1 / 2 |       72 |        20 |         2 |        0 | margin detail              |
| `cliff_large_rock.glb`   | `cliff_large_rock`   |  3,560 |               1 / 1 |       54 |        32 |         1 |        0 | boundary landmark          |

## Technical findings

- No texture decode, alpha foliage, texture memory or texture overdraw is introduced by these models.
- Grass and bushes have one mesh and one material, so the scene instances them. Trees, flowers and rocks use multiple primitives/materials and remain small manually placed sets.
- File size of promoted GLBs is 149,640 bytes in total. This excludes existing application code and HTTP compression.
- The models' sparse geometry is excellent for a benchmark, but also exposes the visual limitation: their kit-like silhouettes cannot be accepted automatically as final environmental identity.

## Rejected from this download

All other 315 GLB models stay in quarantine. They were not inspected one by one and must not be imported by convention. The package itself is not a visual direction; it is an auditable CC0 source for controlled experiments.
