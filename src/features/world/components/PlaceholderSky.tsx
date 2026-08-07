"use client";

import { useMemo } from "react";
import { BackSide, BufferGeometry, Color, Float32BufferAttribute, SphereGeometry } from "three";

const skyStops = [
  new Color("#263b59"),
  new Color("#78658d"),
  new Color("#b77779"),
  new Color("#ce714a"),
  new Color("#e8cfa7"),
  new Color("#f2bc5b"),
];

const starDirections = [
  [-0.72, 0.63, -0.28],
  [-0.41, 0.84, -0.36],
  [-0.14, 0.91, -0.38],
  [0.17, 0.78, -0.48],
  [0.44, 0.68, -0.42],
  [0.7, 0.57, -0.32],
  [-0.62, 0.73, 0.24],
  [-0.2, 0.81, 0.47],
  [0.29, 0.88, 0.27],
  [0.64, 0.66, 0.34],
] as const;

export function PlaceholderSky() {
  const geometry = useMemo(() => {
    const sphere = new SphereGeometry(120, 24, 16);
    const colors: number[] = [];
    const position = sphere.getAttribute("position");
    const color = new Color();
    for (let index = 0; index < position.count; index += 1) {
      const normalizedY = Math.max(0, Math.min(0.999, (position.getY(index) / 120 + 1) / 2));
      const segment = Math.min(
        skyStops.length - 2,
        Math.floor(normalizedY * (skyStops.length - 1)),
      );
      const localMix = normalizedY * (skyStops.length - 1) - segment;
      color.copy(skyStops[segment]).lerp(skyStops[segment + 1], localMix);
      colors.push(color.r, color.g, color.b);
    }
    sphere.setAttribute("color", new Float32BufferAttribute(colors, 3));
    return sphere;
  }, []);
  const stars = useMemo(() => {
    const positions: number[] = [];
    starDirections.forEach(([x, y, z]) => {
      const length = Math.hypot(x, y, z);
      positions.push((x / length) * 118, (y / length) * 118, (z / length) * 118);
    });
    const points = new BufferGeometry();
    points.setAttribute("position", new Float32BufferAttribute(positions, 3));
    return points;
  }, []);

  return (
    <group>
      <mesh geometry={geometry}>
        <meshBasicMaterial side={BackSide} vertexColors />
      </mesh>
      <points geometry={stars}>
        <pointsMaterial
          color="#f7e9cf"
          depthWrite={false}
          opacity={0.58}
          size={0.32}
          sizeAttenuation
          transparent
        />
      </points>
    </group>
  );
}
