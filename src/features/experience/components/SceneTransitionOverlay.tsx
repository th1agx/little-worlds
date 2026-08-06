"use client";

import { useEffect } from "react";
import { useExperienceStore } from "@/stores/experienceStore";

export function SceneTransitionOverlay() {
  const phase = useExperienceStore((state) => state.transitionPhase);
  const advance = useExperienceStore((state) => state.advanceSceneTransition);

  useEffect(() => {
    if (phase === "idle") return;
    const duration = phase === "out" ? 400 : 280;
    const timer = window.setTimeout(advance, duration);
    return () => window.clearTimeout(timer);
  }, [advance, phase]);

  if (phase === "idle") return null;

  return <div aria-hidden="true" className={`scene-transition scene-transition--${phase}`} />;
}
