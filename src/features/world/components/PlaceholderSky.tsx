"use client";

import { useMemo } from "react";
import { BackSide, Color, Float32BufferAttribute, SphereGeometry } from "three";

const skyStops = [
  new Color("#263b59"),
  new Color("#78658d"),
  new Color("#b77779"),
  new Color("#f2bc5b"),
];

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

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial side={BackSide} vertexColors />
    </mesh>
  );
}
