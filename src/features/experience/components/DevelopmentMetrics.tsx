"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useExperienceStore } from "@/stores/experienceStore";

export function DevelopmentMetrics() {
  const updateMetrics = useExperienceStore((state) => state.updateMetrics);
  const elapsed = useRef(0);

  useFrame((state, delta) => {
    elapsed.current += delta;
    if (elapsed.current < 0.5) return;
    updateMetrics({
      fps: Math.round(1 / Math.max(delta, 0.001)),
      drawCalls: state.gl.info.render.calls,
      triangles: state.gl.info.render.triangles,
      geometries: state.gl.info.memory.geometries,
      textures: state.gl.info.memory.textures,
      programs: state.gl.info.programs?.length ?? 0,
    });
    elapsed.current = 0;
  });

  return null;
}
