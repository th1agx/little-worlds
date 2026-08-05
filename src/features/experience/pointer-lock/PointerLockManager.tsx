"use client";

import { useEffect } from "react";
import {
  isExperiencePointerLocked,
  registerPointerLockCanvas,
  requestExperiencePointerLock,
} from "@/features/experience/pointer-lock/pointerLockService";
import { useExperienceStore } from "@/stores/experienceStore";

interface PointerLockManagerProps {
  canvas: HTMLCanvasElement;
}

export function PointerLockManager({ canvas }: PointerLockManagerProps) {
  const mode = useExperienceStore((state) => state.mode);
  const setPointerLocked = useExperienceStore((state) => state.setPointerLocked);

  useEffect(() => {
    registerPointerLockCanvas(canvas);
    const onPointerLockChange = () => setPointerLocked(isExperiencePointerLocked());
    const onCanvasClick = () => {
      if (mode === "exploring" && !isExperiencePointerLocked()) requestExperiencePointerLock();
    };

    document.addEventListener("pointerlockchange", onPointerLockChange);
    canvas.addEventListener("click", onCanvasClick);
    return () => {
      document.removeEventListener("pointerlockchange", onPointerLockChange);
      canvas.removeEventListener("click", onCanvasClick);
      registerPointerLockCanvas(null);
    };
  }, [canvas, mode, setPointerLocked]);

  return null;
}
