"use client";

/* R3F owns the Three camera; this component updates it only inside useFrame. */
/* eslint-disable react-hooks/immutability */

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MathUtils } from "three";
import { temporaryAudioController } from "@/features/audio/TemporaryAudioController";
import { createBoundedCollisionAdapter } from "@/features/player/collision/BoundedCollisionAdapter";
import {
  createPlayerMotionState,
  PLAYER_EYE_HEIGHT,
  stepPlayerMotion,
  type PlayerMotionState,
} from "@/features/player/locomotion/PlayerMotionModel";
import { useInputController } from "@/features/player/input/useInputController";
import { getGroundHeight } from "@/features/world/ground/groundHeight";
import { useExperienceStore } from "@/stores/experienceStore";

const MIN_PITCH = -Math.PI / 2.2;
const MAX_PITCH = Math.PI / 2.2;
const HUB_BOUNDS = createBoundedCollisionAdapter({ minX: -18, maxX: 18, minZ: -18, maxZ: 18 });
const TEST_BOUNDS = createBoundedCollisionAdapter({ minX: -14, maxX: 14, minZ: -14, maxZ: 14 });

export function PlayerController() {
  const input = useInputController();
  const { camera } = useThree();
  const sceneId = useExperienceStore((state) => state.activeSceneId);
  const mode = useExperienceStore((state) => state.mode);
  const pointerLocked = useExperienceStore((state) => state.pointerLocked);
  const preferences = useExperienceStore((state) => state.preferences);
  const locomotionModel = useExperienceStore((state) => state.locomotionModel);
  const locomotionTuning = useExperienceStore((state) => state.locomotionTuning);
  const signalLanding = useExperienceStore((state) => state.signalLanding);
  const updateMetrics = useExperienceStore((state) => state.updateMetrics);
  const targetYaw = useRef(0);
  const targetPitch = useRef(0);
  const currentYaw = useRef(0);
  const currentPitch = useRef(0);
  const initialized = useRef(false);
  const motion = useRef<PlayerMotionState>(createPlayerMotionState());
  const landingOffset = useRef(0);
  const metricsElapsed = useRef(0);
  const lastLocomotion = useRef<"idle" | "walking" | "fast-step" | "airborne">("idle");

  useEffect(() => {
    if (!initialized.current) {
      motion.current.position.copy(camera.position);
      motion.current.position.y =
        getGroundHeight(sceneId, camera.position.x, camera.position.z) +
        PLAYER_EYE_HEIGHT +
        locomotionTuning.baseHoverHeight;
      motion.current.controlledHeight = locomotionTuning.baseHoverHeight;
      camera.position.y = motion.current.position.y;
      initialized.current = true;
    }
  }, [camera, locomotionTuning.baseHoverHeight, sceneId]);

  useFrame((state, delta) => {
    if (!initialized.current || mode !== "exploring" || !pointerLocked) return;
    const snapshot = input.snapshot();
    targetYaw.current -= snapshot.look.x * preferences.mouseSensitivity;
    targetPitch.current = Math.max(
      MIN_PITCH,
      Math.min(MAX_PITCH, targetPitch.current - snapshot.look.y * preferences.mouseSensitivity),
    );
    const previousYaw = currentYaw.current;
    const angularError = Math.hypot(
      targetYaw.current - currentYaw.current,
      targetPitch.current - currentPitch.current,
    );
    const rotationResponse = preferences.reducedMotion
      ? 26
      : MathUtils.lerp(26, locomotionTuning.rotationSmoothing, Math.min(1, angularError / 0.32));
    currentYaw.current = MathUtils.damp(
      currentYaw.current,
      targetYaw.current,
      rotationResponse,
      delta,
    );
    currentPitch.current = MathUtils.damp(
      currentPitch.current,
      targetPitch.current,
      rotationResponse,
      delta,
    );
    camera.rotation.set(currentPitch.current, currentYaw.current, 0, "YXZ");

    const result = stepPlayerMotion(
      motion.current,
      {
        ...snapshot,
        delta,
        yaw: currentYaw.current,
        jumpEnabled: preferences.jumpEnabled,
        model: locomotionModel,
        tuning: locomotionTuning,
        groundHeight: getGroundHeight(
          sceneId,
          motion.current.position.x,
          motion.current.position.z,
        ),
      },
      sceneId === "hub" ? HUB_BOUNDS.resolveMovement : TEST_BOUNDS.resolveMovement,
    );

    if (result.jumped) temporaryAudioController.play("jump");
    if (result.landed) {
      temporaryAudioController.play("land");
      signalLanding();
      landingOffset.current =
        preferences.reducedMotion || !preferences.visualMotionEnabled
          ? 0
          : -locomotionTuning.cameraImpulseReaction;
    }
    temporaryAudioController.updateLevitation(result.speed, result.hoverHeight, locomotionTuning);

    landingOffset.current *= Math.exp(-delta * locomotionTuning.cameraRestReturn);
    const visualMotion = preferences.visualMotionEnabled && !preferences.reducedMotion;
    const velocityX = motion.current.horizontalVelocity.x;
    const velocityZ = motion.current.horizontalVelocity.z;
    const leadScale = visualMotion ? 0.012 * Math.min(1, result.acceleration / 8) : 0;
    const targetCameraX = motion.current.position.x + velocityX * leadScale;
    const targetCameraZ = motion.current.position.z + velocityZ * leadScale;
    const cameraHover = visualMotion ? result.hoverOffset * locomotionTuning.cameraHoverFollow : 0;
    camera.position.x = MathUtils.damp(camera.position.x, targetCameraX, 20, delta);
    camera.position.z = MathUtils.damp(camera.position.z, targetCameraZ, 20, delta);
    camera.position.y = MathUtils.damp(
      camera.position.y,
      motion.current.position.y + landingOffset.current + cameraHover,
      locomotionTuning.cameraRestReturn,
      delta,
    );
    metricsElapsed.current += delta;
    if (metricsElapsed.current >= 0.25 || lastLocomotion.current !== result.locomotion) {
      updateMetrics({
        grounded: motion.current.grounded,
        locomotion: result.locomotion,
        speed: result.speed,
        acceleration: result.acceleration,
        airborneTime: result.airborneTime,
        jumpDistance: result.jumpDistance,
        angularVelocity: Math.abs(currentYaw.current - previousYaw) / Math.max(delta, 0.001),
        hoverHeight: result.hoverHeight,
        verticalVelocity: result.verticalVelocity,
        hoverAmplitude: Math.abs(result.hoverOffset),
        hoverState: result.hoverState,
        dampingIntensity: result.dampingIntensity,
        locomotionModel,
      });
      metricsElapsed.current = 0;
      lastLocomotion.current = result.locomotion;
    }
  });

  return null;
}
