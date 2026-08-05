"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { DevelopmentMetrics } from "@/features/experience/components/DevelopmentMetrics";
import { PointerLockManager } from "@/features/experience/pointer-lock/PointerLockManager";
import { EnvironmentManager } from "@/features/world/components/EnvironmentManager";
import { SceneManager } from "@/features/world/components/SceneManager";
import { PlayerController } from "@/features/player/components/PlayerController";
import { CameraManager } from "@/lib/three/CameraManager";
import { createRenderPipeline } from "@/lib/three/RenderPipeline";
import { useExperienceStore } from "@/stores/experienceStore";

export function ExperienceCanvas() {
  const activeSceneId = useExperienceStore((state) => state.activeSceneId);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  return (
    <div className="experience-canvas">
      <Canvas
        camera={{ fov: 70, near: 0.1, far: 250, position: [0, 1.65, 5] }}
        dpr={[1, 1.5]}
        gl={createRenderPipeline}
        onCreated={(state) => setCanvas(state.gl.domElement)}
      >
        <CameraManager>
          {canvas ? <PointerLockManager canvas={canvas} /> : null}
          <EnvironmentManager />
          <PlayerController />
          {process.env.NODE_ENV === "development" ? <DevelopmentMetrics /> : null}
          <Suspense fallback={null}>
            <SceneManager sceneId={activeSceneId} />
          </Suspense>
        </CameraManager>
      </Canvas>
    </div>
  );
}
