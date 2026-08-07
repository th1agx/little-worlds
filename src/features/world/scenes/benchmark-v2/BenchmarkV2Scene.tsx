"use client";

import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import {
  BackSide,
  BufferGeometry,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  InstancedMesh,
  Mesh,
  Object3D,
  PlaneGeometry,
  ShaderMaterial,
  type Material,
  type Object3D as ThreeObject3D,
} from "three";
import { getGroundHeight } from "@/features/world/ground/groundHeight";
import {
  type BenchmarkAssetLibrary,
  useBenchmarkAssetLibrary,
} from "@/features/world/scenes/benchmark/useBenchmarkAssetLibrary";

type Position = readonly [number, number, number];

interface Placement {
  position: Position;
  rotation?: number;
  scale?: number;
}

const sceneId = "benchmark-v2" as const;

function groundPosition(x: number, z: number, offset = 0): Position {
  return [x, getGroundHeight(sceneId, x, z) + offset, z];
}

function makePlacements(count: number, side: -1 | 1, scale: number): Placement[] {
  return Array.from({ length: count }, (_, index) => {
    const z = -11.5 + ((index * 4.37) % 23);
    const x = side * (4.1 + ((index * 1.81) % 8.2));
    return {
      position: groundPosition(x, z),
      rotation: index * 1.61,
      scale: scale * (0.72 + (index % 5) * 0.09),
    };
  });
}

const GRASS = [...makePlacements(30, -1, 2.05), ...makePlacements(30, 1, 2.1)];
const TALL_GRASS = [...makePlacements(18, -1, 1.52), ...makePlacements(18, 1, 1.6)];
const FLOWERS = [...makePlacements(8, -1, 0.92), ...makePlacements(8, 1, 0.9)];

const TREE_SPECS = [
  { position: groundPosition(-8.4, -4.5), scale: 1.25, canopy: "#5a7e52" },
  { position: groundPosition(8.8, -6.8), scale: 1.45, canopy: "#526f4d" },
  { position: groundPosition(8.8, 2.3), scale: 1.05, canopy: "#74905d" },
  { position: groundPosition(-9.6, 5.8), scale: 1.12, canopy: "#69875a" },
] as const;

const ROCK_SPECS = [
  { position: groundPosition(-8.2, 5.2), scale: [2.8, 3.7, 1.9] as const, color: "#69566f" },
  { position: groundPosition(8.9, 6.7), scale: [3.2, 4.4, 2.2] as const, color: "#5f506a" },
  { position: groundPosition(-10.8, -7.8), scale: [2.4, 3.2, 1.8] as const, color: "#755c6f" },
  { position: groundPosition(5.6, -1.2), scale: [1.25, 1.0, 1.15] as const, color: "#876e70" },
] as const;

function SkyDome() {
  const material = useMemo(
    () =>
      new ShaderMaterial({
        depthWrite: false,
        side: BackSide,
        uniforms: {
          topColor: { value: new Color("#253c67") },
          middleColor: { value: new Color("#775b90") },
          horizonColor: { value: new Color("#f1ad92") },
        },
        vertexShader: `varying vec3 vDirection;
          void main() {
            vDirection = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `uniform vec3 topColor;
          uniform vec3 middleColor;
          uniform vec3 horizonColor;
          varying vec3 vDirection;
          void main() {
            float height = clamp(vDirection.y * 0.72 + 0.48, 0.0, 1.0);
            vec3 color = mix(horizonColor, middleColor, smoothstep(0.18, 0.62, height));
            color = mix(color, topColor, smoothstep(0.58, 1.0, height));
            gl_FragColor = vec4(color, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
      }),
    [],
  );

  return (
    <mesh material={material} scale={80} renderOrder={-10}>
      <sphereGeometry args={[1, 32, 20]} />
    </mesh>
  );
}

function Terrain() {
  const geometry = useMemo(() => {
    const terrain = new PlaneGeometry(30, 30, 56, 56);
    terrain.rotateX(-Math.PI / 2);
    const positions = terrain.getAttribute("position");
    for (let index = 0; index < positions.count; index += 1) {
      const x = positions.getX(index);
      const z = positions.getZ(index);
      positions.setY(index, getGroundHeight(sceneId, x, z));
    }
    positions.needsUpdate = true;
    terrain.computeVertexNormals();
    return terrain;
  }, []);

  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial color="#607e50" roughness={1} flatShading />
    </mesh>
  );
}

function Ribbon({
  color,
  points,
  width,
  yOffset = 0,
}: {
  color: string;
  points: readonly [number, number][];
  width: number;
  yOffset?: number;
}) {
  const geometry = useMemo(() => {
    const vertices: number[] = [];
    const indices: number[] = [];
    points.forEach(([x, z], index) => {
      const before = points[Math.max(0, index - 1)];
      const after = points[Math.min(points.length - 1, index + 1)];
      const dx = after[0] - before[0];
      const dz = after[1] - before[1];
      const length = Math.hypot(dx, dz) || 1;
      const normalX = (-dz / length) * width * 0.5;
      const normalZ = (dx / length) * width * 0.5;
      const y = getGroundHeight(sceneId, x, z) + yOffset;
      vertices.push(x + normalX, y, z + normalZ, x - normalX, y, z - normalZ);
      if (index > 0) {
        const previous = (index - 1) * 2;
        const current = index * 2;
        indices.push(previous, current, previous + 1, current, current + 1, previous + 1);
      }
    });
    const ribbon = new BufferGeometry();
    ribbon.setAttribute("position", new Float32BufferAttribute(vertices, 3));
    ribbon.setIndex(indices);
    ribbon.computeVertexNormals();
    return ribbon;
  }, [points, width, yOffset]);

  return (
    <mesh geometry={geometry} renderOrder={1}>
      <meshStandardMaterial
        color={color}
        roughness={0.74}
        transparent
        opacity={0.94}
        side={DoubleSide}
      />
    </mesh>
  );
}

function Waterway() {
  const waterRef = useRef<Object3D>(null);
  useFrame(({ clock }) => {
    if (waterRef.current) waterRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.24) * 0.004;
  });
  const points = useMemo<readonly [number, number][]>(
    () => [
      [-4.0, 13],
      [-4.7, 7],
      [-3.2, 1],
      [-4.5, -5],
      [-3.6, -11],
    ],
    [],
  );
  return (
    <group>
      <group ref={waterRef}>
        <Ribbon color="#49aebb" points={points} width={2.85} yOffset={0.075} />
      </group>
      <Ribbon color="#b8e7de" points={points} width={0.2} yOffset={0.09} />
    </group>
  );
}

function Waterfall() {
  const waterfallRef = useRef<Mesh>(null);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { time: { value: 0 } },
        vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `uniform float time; varying vec2 vUv; void main() {
          float stream = 0.55 + 0.35 * sin(vUv.x * 34.0 + time * 1.4) + 0.1 * sin(vUv.x * 83.0 - time);
          float edge = smoothstep(0.02, 0.18, vUv.x) * smoothstep(0.98, 0.82, vUv.x);
          gl_FragColor = vec4(vec3(0.48, 0.88, 0.92) * stream, edge * 0.72);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      }),
    [],
  );
  useFrame((_, delta) => {
    if (waterfallRef.current?.material instanceof ShaderMaterial) {
      waterfallRef.current.material.uniforms.time.value += delta;
    }
  });
  return (
    <mesh ref={waterfallRef} material={material} position={[-3.6, 2.35, -9.45]}>
      <planeGeometry args={[2.15, 4.25, 1, 1]} />
    </mesh>
  );
}

function RockMass({
  color,
  position,
  scale,
}: {
  color: string;
  position: Position;
  scale: readonly [number, number, number];
}) {
  return (
    <mesh castShadow receiveShadow position={position} rotation={[0.22, 0.36, -0.08]} scale={scale}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial color={color} roughness={0.98} flatShading />
    </mesh>
  );
}

function StylizedTree({
  canopy,
  position,
  scale,
}: {
  canopy: string;
  position: Position;
  scale: number;
}) {
  const swayRef = useRef<Object3D>(null);
  useFrame(({ clock }) => {
    if (swayRef.current)
      swayRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.32 + position[0]) * 0.012;
  });
  const blobs: readonly [number, number, number, number][] = [
    [0, 4.2, 0, 1.5],
    [-0.95, 3.9, 0.1, 1.12],
    [0.98, 3.85, -0.12, 1.2],
    [-0.45, 5.0, 0.1, 1.02],
    [0.58, 4.95, -0.16, 1.08],
  ];
  return (
    <group ref={swayRef} position={position} scale={scale}>
      <mesh castShadow receiveShadow position={[0, 1.9, 0]} rotation={[0.05, 0, -0.08]}>
        <coneGeometry args={[0.38, 0.22, 3.9, 7]} />
        <meshStandardMaterial color="#8c624c" roughness={1} flatShading />
      </mesh>
      {blobs.map(([x, y, z, blobScale], index) => (
        <mesh
          key={`${x}-${y}`}
          castShadow
          receiveShadow
          position={[x, y, z]}
          rotation={[0.1 * index, index, 0.08]}
          scale={blobScale}
        >
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color={index % 2 ? canopy : "#799462"}
            roughness={0.94}
            flatShading
          />
        </mesh>
      ))}
    </group>
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
  placements: readonly Placement[];
}) {
  const meshRef = useRef<InstancedMesh>(null);
  const template = useMemo(() => findInstancableMesh(asset), [asset]);
  const matrixObject = useMemo(() => new Object3D(), []);
  useLayoutEffect(() => {
    placements.forEach((placement, index) => {
      matrixObject.position.fromArray(placement.position);
      matrixObject.rotation.set(0, placement.rotation ?? 0, 0);
      matrixObject.scale.setScalar(placement.scale ?? 1);
      matrixObject.updateMatrix();
      meshRef.current?.setMatrixAt(index, matrixObject.matrix);
    });
    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
      meshRef.current.computeBoundingSphere();
    }
  }, [matrixObject, placements]);
  if (!template) return null;
  return (
    <instancedMesh
      ref={meshRef}
      args={[template.geometry, template.material as Material, placements.length]}
      castShadow
      receiveShadow
    />
  );
}

function SupportingVegetation({ library }: { library: BenchmarkAssetLibrary }) {
  return (
    <group name="benchmark-v2-supporting-vegetation">
      <InstancedAsset asset={library.grass} placements={GRASS} />
      <InstancedAsset asset={library.grassLarge} placements={TALL_GRASS} />
      {FLOWERS.map((placement, index) => (
        <primitive
          key={`purple-${index}`}
          object={library.flowerPurple.clone(true)}
          position={placement.position}
          rotation={[0, placement.rotation ?? 0, 0]}
          scale={placement.scale}
          dispose={null}
        />
      ))}
    </group>
  );
}

function V2Landscape({ library }: { library: BenchmarkAssetLibrary }) {
  return (
    <group name="little-worlds-visual-benchmark-v2">
      <SkyDome />
      <Terrain />
      <Waterway />
      <Ribbon
        color="#c79763"
        points={[
          [0, 13],
          [0.8, 7],
          [0.2, 1],
          [1.3, -5],
          [0.6, -11],
        ]}
        width={2.25}
        yOffset={0.065}
      />
      <group position={[0, 0, -11]}>
        <RockMass color="#6d5674" position={[-8.5, 2.2, 0]} scale={[4.4, 5.5, 2.1]} />
        <RockMass color="#6a5576" position={[7.4, 2.5, 0.4]} scale={[5.1, 6.1, 2.3]} />
        <RockMass color="#836a82" position={[1.7, 3.2, 1.8]} scale={[2.8, 2.3, 1.3]} />
      </group>
      <Waterfall />
      {TREE_SPECS.map((spec) => (
        <StylizedTree key={`${spec.position[0]}-${spec.position[2]}`} {...spec} />
      ))}
      {ROCK_SPECS.map((spec) => (
        <RockMass key={`${spec.position[0]}-${spec.position[2]}`} {...spec} />
      ))}
      <SupportingVegetation library={library} />
      <mesh position={[-8.8, 7.5, -12.2]}>
        <sphereGeometry args={[0.48, 20, 12]} />
        <meshBasicMaterial color="#ffd78a" />
      </mesh>
    </group>
  );
}

function V2Fallback() {
  return (
    <group name="visual-benchmark-v2-loading-fallback">
      <SkyDome />
      <Terrain />
      <Waterway />
    </group>
  );
}

export default function BenchmarkV2Scene() {
  const { error, library } = useBenchmarkAssetLibrary();
  if (!library || error) return <V2Fallback />;
  return <V2Landscape library={library} />;
}
