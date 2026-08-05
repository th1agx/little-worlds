"use client";

import { useThree } from "@react-three/fiber";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface CameraManagerProps {
  children: ReactNode;
}

export function CameraManager({ children }: CameraManagerProps) {
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    camera.updateProjectionMatrix();
  }, [camera]);

  return <>{children}</>;
}
