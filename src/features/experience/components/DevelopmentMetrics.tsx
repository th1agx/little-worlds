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
    updateMetrics({ fps: Math.round(1 / Math.max(delta, 0.001)) });
    elapsed.current = 0;
  });

  return null;
}
