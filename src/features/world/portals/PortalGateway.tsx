"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MathUtils, type MeshStandardMaterial, type PointLight } from "three";
import type { PortalDescriptor, PortalPhase } from "@/features/world/portals/types";
import { useExperienceStore } from "@/stores/experienceStore";

const AWARE_DISTANCE = 6;
const READY_DISTANCE = 2.8;
const DEACTIVATION_SECONDS = 0.35;

interface PortalGatewayProps {
  descriptor: PortalDescriptor;
  position: [number, number, number];
}

/**
 * A reusable threshold between scenes. It deliberately uses architecture,
 * copper and restrained amber light instead of a conventional magical effect.
 */
export function PortalGateway({ descriptor, position }: PortalGatewayProps) {
  const portalLight = useRef<PointLight>(null);
  const frontVeilMaterial = useRef<MeshStandardMaterial>(null);
  const middleVeilMaterial = useRef<MeshStandardMaterial>(null);
  const rearVeilMaterial = useRef<MeshStandardMaterial>(null);
  const floorGlowMaterial = useRef<MeshStandardMaterial>(null);
  const phase = useRef<PortalPhase>("dormant");
  const deactivationDeadline = useRef<number | null>(null);
  const setPortalState = useExperienceStore((state) => state.setPortalState);
  const clearPortal = useExperienceStore((state) => state.clearPortal);
  const activePortal = useExperienceStore((state) => state.portal);
  const activePortalPhase = useExperienceStore((state) => state.portalPhase);

  useEffect(() => () => clearPortal(descriptor.id), [clearPortal, descriptor.id]);

  useFrame((state, delta) => {
    const { x, z } = state.camera.position;
    const distance = Math.hypot(x - position[0], z - position[2]);
    let nextPhase: PortalPhase = phase.current;

    if (activePortal?.id === descriptor.id && activePortalPhase === "transitioning") {
      nextPhase = "transitioning";
    } else if (distance <= READY_DISTANCE) {
      deactivationDeadline.current = null;
      nextPhase = "ready";
    } else if (distance <= AWARE_DISTANCE) {
      deactivationDeadline.current = null;
      nextPhase = "aware";
    } else if (phase.current === "ready" || phase.current === "aware") {
      deactivationDeadline.current = state.clock.elapsedTime + DEACTIVATION_SECONDS;
      nextPhase = "deactivating";
    } else if (
      phase.current === "deactivating" &&
      deactivationDeadline.current !== null &&
      state.clock.elapsedTime >= deactivationDeadline.current
    ) {
      nextPhase = "dormant";
    }

    if (nextPhase !== phase.current) {
      phase.current = nextPhase;
      setPortalState(descriptor, nextPhase);
    }

    const lightTarget =
      phase.current === "transitioning"
        ? 1.8
        : phase.current === "ready"
          ? 1.35
          : phase.current === "aware"
            ? 0.62
            : 0.16;
    const frontVeilTarget =
      phase.current === "transitioning"
        ? 0.34
        : phase.current === "ready"
          ? 0.22
          : phase.current === "aware"
            ? 0.1
            : 0.025;
    const middleVeilTarget = frontVeilTarget * 0.62;
    const rearVeilTarget = frontVeilTarget * 0.38;
    if (portalLight.current) {
      portalLight.current.intensity = MathUtils.damp(
        portalLight.current.intensity,
        lightTarget,
        5,
        delta,
      );
    }
    const animateMaterial = (
      material: MeshStandardMaterial | null,
      opacityTarget: number,
      emissionScale: number,
    ) => {
      if (!material) return;
      material.opacity = MathUtils.damp(material.opacity, opacityTarget, 5, delta);
      material.emissiveIntensity = MathUtils.damp(
        material.emissiveIntensity,
        lightTarget * emissionScale,
        5,
        delta,
      );
    };
    animateMaterial(frontVeilMaterial.current, frontVeilTarget, 0.32);
    animateMaterial(middleVeilMaterial.current, middleVeilTarget, 0.2);
    animateMaterial(rearVeilMaterial.current, rearVeilTarget, 0.11);
    animateMaterial(floorGlowMaterial.current, frontVeilTarget * 0.34, 0.08);
  });

  return (
    <group name={`portal-${descriptor.id}`} position={position}>
      <mesh position={[0, 0.13, 0]} receiveShadow>
        <cylinderGeometry args={[2.15, 2.38, 0.26, 8]} />
        <meshStandardMaterial color="#9c7b67" flatShading roughness={0.95} />
      </mesh>
      {[-1.42, 1.42].map((x) => (
        <mesh key={x} position={[x, 1.72, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.4, 3.18, 8]} />
          <meshStandardMaterial color="#b9a88d" flatShading roughness={0.9} />
        </mesh>
      ))}
      <mesh position={[0, 3.3, 0]} castShadow>
        <boxGeometry args={[3.35, 0.42, 0.62]} />
        <meshStandardMaterial color="#f0dfc2" roughness={0.87} />
      </mesh>
      <mesh position={[0, 3.03, -0.34]}>
        <boxGeometry args={[2.74, 0.09, 0.08]} />
        <meshStandardMaterial color="#ce714a" emissive="#ce714a" emissiveIntensity={0.24} />
      </mesh>
      <mesh position={[0, 0.145, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.05, 32]} />
        <meshStandardMaterial
          ref={floorGlowMaterial}
          color="#f2bc5b"
          depthWrite={false}
          emissive="#f2bc5b"
          emissiveIntensity={0.01}
          opacity={0.012}
          roughness={1}
          transparent
        />
      </mesh>
      <mesh position={[0, 1.7, -0.7]}>
        <boxGeometry args={[2.25, 2.66, 0.07]} />
        <meshStandardMaterial color="#78658d" depthWrite={false} opacity={0.18} transparent />
      </mesh>
      <mesh position={[0, 1.7, 0.06]}>
        <boxGeometry args={[2.38, 2.7, 0.055]} />
        <meshStandardMaterial
          ref={frontVeilMaterial}
          color="#f2bc5b"
          emissive="#f2bc5b"
          emissiveIntensity={0.06}
          opacity={0.025}
          roughness={0.72}
          transparent
        />
      </mesh>
      <mesh position={[0.13, 1.78, -0.24]}>
        <boxGeometry args={[2.12, 2.42, 0.045]} />
        <meshStandardMaterial
          ref={middleVeilMaterial}
          color="#e8cfa7"
          depthWrite={false}
          emissive="#d9943d"
          emissiveIntensity={0.04}
          opacity={0.015}
          roughness={0.8}
          transparent
        />
      </mesh>
      <mesh position={[-0.08, 1.64, -0.48]}>
        <boxGeometry args={[1.82, 2.1, 0.04]} />
        <meshStandardMaterial
          ref={rearVeilMaterial}
          color="#f2bc5b"
          depthWrite={false}
          emissive="#f2bc5b"
          emissiveIntensity={0.02}
          opacity={0.01}
          roughness={0.9}
          transparent
        />
      </mesh>
      <pointLight
        ref={portalLight}
        color="#f2bc5b"
        distance={8}
        intensity={0.16}
        position={[0, 2.15, 0.8]}
      />
    </group>
  );
}
