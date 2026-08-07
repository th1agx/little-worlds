"use client";

import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  DoubleSide,
  Mesh,
  Object3D,
  PlaneGeometry,
  type InstancedMesh,
  type Material,
  type Object3D as ThreeObject3D,
} from "three";
import { getGroundHeight } from "@/features/world/ground/groundHeight";
import {
  type BenchmarkAssetLibrary,
  useBenchmarkAssetLibrary,
} from "@/features/world/scenes/benchmark/useBenchmarkAssetLibrary";

type GroundPosition = readonly [number, number, number];

interface ModelPlacement {
  position: GroundPosition;
  rotation?: number;
  scale?: number;
}

function groundPosition(x: number, z: number): GroundPosition {
  return [x, getGroundHeight("benchmark", x, z), z];
}

function createEdgeScatter(count: number, side: -1 | 1, scale: number): ModelPlacement[] {
  return Array.from({ length: count }, (_, index) => {
    const progress = count === 1 ? 0.5 : index / (count - 1);
    const x = side * (3.6 + ((index * 1.91) % 7.8));
    const z = -12.4 + progress * 24.8 + Math.sin(index * 2.17) * 0.72;

    return {
      position: groundPosition(x, z),
      rotation: index * 1.71,
      scale: scale * (0.82 + (index % 4) * 0.1),
    };
  });
}

const TREE_PLACEMENTS: Record<"treeDefault" | "treeOak" | "treeTall", ModelPlacement[]> = {
  treeDefault: [
    { position: groundPosition(-10.8, -7.8), rotation: 0.2, scale: 3.4 },
    { position: groundPosition(9.8, 6.8), rotation: 2.1, scale: 3.15 },
    { position: groundPosition(-11.1, 7.4), rotation: 1.3, scale: 2.75 },
  ],
  treeOak: [
    { position: groundPosition(10.2, -8.9), rotation: 1.1, scale: 3.1 },
    { position: groundPosition(-8.6, 10.2), rotation: 2.7, scale: 2.9 },
  ],
  treeTall: [
    { position: groundPosition(11.2, 0.5), rotation: 2.4, scale: 3.05 },
    { position: groundPosition(-11.9, -0.8), rotation: 0.8, scale: 2.85 },
  ],
};

const ROCK_PLACEMENTS: Record<"rockLarge" | "rockTall" | "rockFlat", ModelPlacement[]> = {
  rockLarge: [
    { position: groundPosition(-7.8, 4.9), rotation: 0.4, scale: 2.1 },
    { position: groundPosition(6.7, -6.2), rotation: 2.2, scale: 1.65 },
    { position: groundPosition(7.8, 4.7), rotation: 1.3, scale: 1.15 },
  ],
  rockTall: [
    { position: groundPosition(10.6, 9.2), rotation: 1.9, scale: 2.25 },
    { position: groundPosition(-9.7, -10.4), rotation: 0.5, scale: 1.85 },
  ],
  rockFlat: [
    { position: groundPosition(-4.9, -8.8), rotation: 2.6, scale: 1.55 },
    { position: groundPosition(4.7, 8.6), rotation: 0.9, scale: 1.4 },
    { position: groundPosition(-7.2, 8.6), rotation: 1.7, scale: 1.1 },
  ],
};

const CLIFF_PLACEMENTS: ModelPlacement[] = [
  { position: groundPosition(12.9, -1.5), rotation: 0.2, scale: 4.1 },
  { position: groundPosition(12.7, 3.4), rotation: 0.42, scale: 3.3 },
  { position: groundPosition(-13.1, 2.1), rotation: -0.4, scale: 3.5 },
];

const GRASS_PLACEMENTS = [...createEdgeScatter(18, -1, 2.45), ...createEdgeScatter(18, 1, 2.25)];
const GRASS_LARGE_PLACEMENTS = [
  ...createEdgeScatter(12, -1, 1.7),
  ...createEdgeScatter(12, 1, 1.55),
];
const LEAF_GRASS_PLACEMENTS = [
  ...createEdgeScatter(10, -1, 1.85),
  ...createEdgeScatter(10, 1, 1.7),
];
const BUSH_PLACEMENTS = [...createEdgeScatter(7, -1, 1.45), ...createEdgeScatter(7, 1, 1.35)];
const BUSH_LARGE_PLACEMENTS = [...createEdgeScatter(5, -1, 1.8), ...createEdgeScatter(5, 1, 1.7)];
const FLOWER_PLACEMENTS = [...createEdgeScatter(6, -1, 1.1), ...createEdgeScatter(6, 1, 1.05)];

function MeadowTerrain() {
  const geometry = useMemo(() => {
    const terrain = new PlaneGeometry(30, 30, 40, 40);
    terrain.rotateX(-Math.PI / 2);
    const positions = terrain.getAttribute("position");

    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index);
      const z = positions.getZ(index);
      positions.setY(index, getGroundHeight("benchmark", x, z));
    }

    positions.needsUpdate = true;
    terrain.computeVertexNormals();
    return terrain;
  }, []);

  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial color="#6d8f58" roughness={1} />
    </mesh>
  );
}

function GardenPath() {
  return (
    <mesh position={[0, 0.055, 0]} rotation={[-Math.PI / 2, 0.08, 0]} receiveShadow>
      <planeGeometry args={[2.15, 26]} />
      <meshStandardMaterial color="#c89d67" roughness={1} />
    </mesh>
  );
}

function CalmWater() {
  const waterRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (waterRef.current)
      waterRef.current.position.y = 0.095 + Math.sin(clock.elapsedTime * 0.65) * 0.012;
  });

  return (
    <mesh ref={waterRef} position={[-6.35, 0.095, 0]} rotation={[-Math.PI / 2, 0.15, 0]}>
      <planeGeometry args={[2.45, 26.5]} />
      <meshStandardMaterial
        color="#49afb1"
        emissive="#164d5e"
        emissiveIntensity={0.16}
        roughness={0.38}
      />
    </mesh>
  );
}

function AssetModel({ asset, placement }: { asset: ThreeObject3D; placement: ModelPlacement }) {
  const instance = useMemo(() => {
    const next = asset.clone(true);
    next.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      child.castShadow = true;
      child.receiveShadow = true;
    });
    return next;
  }, [asset]);

  return (
    <primitive
      object={instance}
      dispose={null}
      position={placement.position}
      rotation={[0, placement.rotation ?? 0, 0]}
      scale={placement.scale ?? 1}
    />
  );
}

function findInstancableMesh(asset: ThreeObject3D): Mesh | null {
  let result: Mesh | null = null;
  asset.traverse((child) => {
    if (!result && child instanceof Mesh && !Array.isArray(child.material)) result = child;
  });
  return result;
}

function InstancedAsset({
  asset,
  placements,
}: {
  asset: ThreeObject3D;
  placements: readonly ModelPlacement[];
}) {
  const meshRef = useRef<InstancedMesh>(null);
  const template = useMemo(() => findInstancableMesh(asset), [asset]);
  const matrixObject = useMemo(() => new Object3D(), []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    placements.forEach((placement, index) => {
      matrixObject.position.fromArray(placement.position);
      matrixObject.rotation.set(0, placement.rotation ?? 0, 0);
      matrixObject.scale.setScalar(placement.scale ?? 1);
      matrixObject.updateMatrix();
      meshRef.current?.setMatrixAt(index, matrixObject.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.computeBoundingSphere();
  }, [matrixObject, placements]);

  if (!template || placements.length === 0) return null;

  return (
    <instancedMesh
      ref={meshRef}
      args={[template.geometry, template.material as Material, placements.length]}
      castShadow
      receiveShadow
    />
  );
}

function BenchmarkLandscape({ library }: { library: BenchmarkAssetLibrary }) {
  return (
    <group name="little-worlds-visual-benchmark">
      <MeadowTerrain />
      <GardenPath />
      <CalmWater />
      <mesh position={[-2.7, 5.4, -11.8]}>
        <sphereGeometry args={[0.62, 24, 16]} />
        <meshBasicMaterial color="#ffd98a" side={DoubleSide} />
      </mesh>

      {Object.entries(TREE_PLACEMENTS).flatMap(([id, placements]) =>
        placements.map((placement, index) => (
          <AssetModel
            key={`${id}-${index}`}
            asset={library[id as keyof typeof TREE_PLACEMENTS]}
            placement={placement}
          />
        )),
      )}
      {Object.entries(ROCK_PLACEMENTS).flatMap(([id, placements]) =>
        placements.map((placement, index) => (
          <AssetModel
            key={`${id}-${index}`}
            asset={library[id as keyof typeof ROCK_PLACEMENTS]}
            placement={placement}
          />
        )),
      )}
      {CLIFF_PLACEMENTS.map((placement, index) => (
        <AssetModel key={`cliff-${index}`} asset={library.cliffLarge} placement={placement} />
      ))}

      <InstancedAsset asset={library.grass} placements={GRASS_PLACEMENTS} />
      <InstancedAsset asset={library.grassLarge} placements={GRASS_LARGE_PLACEMENTS} />
      <InstancedAsset asset={library.grassLeafs} placements={LEAF_GRASS_PLACEMENTS} />
      <InstancedAsset asset={library.bushDetailed} placements={BUSH_PLACEMENTS} />
      <InstancedAsset asset={library.bushLarge} placements={BUSH_LARGE_PLACEMENTS} />
      {FLOWER_PLACEMENTS.map((placement, index) => (
        <AssetModel
          key={`purple-flower-${index}`}
          asset={library.flowerPurple}
          placement={placement}
        />
      ))}
      {FLOWER_PLACEMENTS.map((placement, index) => (
        <AssetModel
          key={`yellow-flower-${index}`}
          asset={library.flowerYellow}
          placement={{
            ...placement,
            position: groundPosition(placement.position[0] * 0.92, placement.position[2] + 0.7),
          }}
        />
      ))}
    </group>
  );
}

function BenchmarkFallback() {
  return (
    <group name="visual-benchmark-loading-fallback">
      <MeadowTerrain />
      <GardenPath />
      <CalmWater />
    </group>
  );
}

export default function BenchmarkScene() {
  const { error, library } = useBenchmarkAssetLibrary();

  if (!library || error) return <BenchmarkFallback />;
  return <BenchmarkLandscape library={library} />;
}
