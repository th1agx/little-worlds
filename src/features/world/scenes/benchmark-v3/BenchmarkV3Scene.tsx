"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackSide, Color, DoubleSide, Mesh, Object3D, PlaneGeometry, ShaderMaterial } from "three";
import { getGroundHeight } from "@/features/world/ground/groundHeight";
import { useBenchmarkAssetLibrary } from "@/features/world/scenes/benchmark/useBenchmarkAssetLibrary";

const sceneId = "benchmark-v3" as const;

function Sky() {
  const material = useMemo(
    () =>
      new ShaderMaterial({
        side: BackSide,
        depthWrite: false,
        uniforms: {
          top: { value: new Color("#263b59") },
          horizon: { value: new Color("#efaa89") },
        },
        vertexShader:
          "varying vec3 d; void main(){d=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader:
          "uniform vec3 top; uniform vec3 horizon; varying vec3 d; void main(){float h=clamp(d.y*.65+.45,0.,1.); vec3 c=mix(horizon,top,smoothstep(.18,.92,h)); gl_FragColor=vec4(c,1.); #include <tonemapping_fragment> #include <colorspace_fragment>}",
      }),
    [],
  );
  return (
    <mesh material={material} scale={90} renderOrder={-10}>
      <sphereGeometry args={[1, 32, 20]} />
    </mesh>
  );
}

function Terrain() {
  const geometry = useMemo(() => {
    const g = new PlaneGeometry(30, 30, 56, 56);
    g.rotateX(-Math.PI / 2);
    const p = g.getAttribute("position");
    for (let i = 0; i < p.count; i += 1) p.setY(i, getGroundHeight(sceneId, p.getX(i), p.getZ(i)));
    p.needsUpdate = true;
    g.computeVertexNormals();
    return g;
  }, []);
  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial color="#718c5d" roughness={1} />
    </mesh>
  );
}

function WaterAndFall() {
  const water = useRef<Mesh>(null);
  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        side: DoubleSide,
        uniforms: { time: { value: 0 } },
        vertexShader:
          "varying vec2 v; void main(){v=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader:
          "uniform float time; varying vec2 v; void main(){float waves=sin((v.x+v.y)*24.+time)*.08+sin(v.y*55.-time*1.4)*.04; vec3 c=mix(vec3(.05,.35,.42),vec3(.28,.78,.76),v.y+waves+.25); gl_FragColor=vec4(c,.9); #include <tonemapping_fragment> #include <colorspace_fragment>}",
      }),
    [],
  );
  useFrame((_, d) => {
    material.uniforms.time.value += d;
  });
  return (
    <group>
      <mesh
        ref={water}
        material={material}
        position={[-3.7, 0.12, 0]}
        rotation={[-Math.PI / 2, 0.1, 0]}
      >
        <planeGeometry args={[3.1, 28]} />
      </mesh>
      <mesh material={material} position={[-3.8, 2.35, -10.2]}>
        <planeGeometry args={[2.25, 4.6]} />
      </mesh>
      <mesh position={[-3.8, 0.15, -9.7]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.8, 24]} />
        <meshBasicMaterial color="#c5eee5" transparent opacity={0.52} />
      </mesh>
    </group>
  );
}

function Asset({
  object,
  x,
  z,
  scale,
  rotation = 0,
}: {
  object: Object3D;
  x: number;
  z: number;
  scale: number;
  rotation?: number;
}) {
  const clone = useMemo(() => object.clone(true), [object]);
  return (
    <primitive
      object={clone}
      dispose={null}
      position={[x, getGroundHeight(sceneId, x, z), z]}
      rotation={[0, rotation, 0]}
      scale={scale}
    />
  );
}

function V3Landscape() {
  const { library } = useBenchmarkAssetLibrary();
  if (!library)
    return (
      <group>
        <Sky />
        <Terrain />
        <WaterAndFall />
      </group>
    );
  const trees = [
    [-10, -5, 3.4, 0.2],
    [9, -6, 3.8, 2.1],
    [-10, 6, 3.1, 1.3],
    [10, 5, 3.5, 0.7],
  ] as const;
  const plants = Array.from({ length: 30 }, (_, i) => ({
    x: (i % 2 ? -1 : 1) * (4.8 + ((i * 1.73) % 7.2)),
    z: -11 + ((i * 3.31) % 22),
    s: 0.9 + (i % 4) * 0.14,
  }));
  return (
    <group name="little-worlds-free-visual-stack-v3">
      <Sky />
      <Terrain />
      <WaterAndFall />
      <mesh position={[0.6, 0.1, 0]} rotation={[-Math.PI / 2, 0.08, 0]} receiveShadow>
        <planeGeometry args={[2.2, 27]} />
        <meshStandardMaterial color="#c99a67" roughness={1} />
      </mesh>
      <group position={[0, 0, -10.5]}>
        <Asset object={library.cliffLarge} x={-3.7} z={0} scale={4.8} rotation={0.18} />
        <Asset object={library.cliffLarge} x={5.8} z={0.3} scale={4.1} rotation={-0.35} />
      </group>
      {trees.map(([x, z, scale, rotation], i) => (
        <Asset
          key={i}
          object={i % 2 ? library.treeOak : library.treeTall}
          x={x}
          z={z}
          scale={scale}
          rotation={rotation}
        />
      ))}
      {plants.map((p, i) => (
        <Asset
          key={i}
          object={
            i % 5 === 0 ? library.bushLarge : i % 3 === 0 ? library.grassLarge : library.grass
          }
          x={p.x}
          z={p.z}
          scale={p.s}
          rotation={i * 0.73}
        />
      ))}
      <Asset object={library.rockLarge} x={-8} z={5} scale={2.4} rotation={0.4} />
      <Asset object={library.rockTall} x={8} z={4} scale={2.1} rotation={1.2} />
    </group>
  );
}

export default function BenchmarkV3Scene() {
  return <V3Landscape />;
}
