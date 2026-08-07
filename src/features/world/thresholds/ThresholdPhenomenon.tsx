"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  BufferGeometry,
  Float32BufferAttribute,
  MathUtils,
  type Group,
  type MeshStandardMaterial,
  type PointLight,
  type PointsMaterial,
} from "three";
import type {
  ThresholdDescriptor,
  ThresholdPalette,
  ThresholdPhase,
} from "@/features/world/thresholds/types";
import { useExperienceStore } from "@/stores/experienceStore";

const AWARE_DISTANCE = 6.5;
const ACTIVE_DISTANCE = 3;
const REST_SECONDS = 0.55;

interface ThresholdPhenomenonProps {
  descriptor: ThresholdDescriptor;
  position: [number, number, number];
}

const particlePositions = [
  [-1.48, 0.42, 0.18],
  [-1.1, 1.86, -0.2],
  [-0.62, 3.28, 0.12],
  [0.22, 0.34, -0.18],
  [0.72, 3.46, 0.06],
  [1.18, 1.2, -0.14],
  [1.52, 2.64, 0.2],
  [-0.18, 3.72, -0.06],
] as const;

/** A suspended, breathing presence: no frame, doorway or architectural support. */
export function ThresholdPhenomenon({ descriptor, position }: ThresholdPhenomenonProps) {
  const mass = useRef<Group>(null);
  const particles = useRef<Group>(null);
  const outerMaterial = useRef<MeshStandardMaterial>(null);
  const upperLobeMaterial = useRef<MeshStandardMaterial>(null);
  const lowerLobeMaterial = useRef<MeshStandardMaterial>(null);
  const middleMaterial = useRef<MeshStandardMaterial>(null);
  const coreMaterial = useRef<MeshStandardMaterial>(null);
  const groundMaterial = useRef<MeshStandardMaterial>(null);
  const particleMaterial = useRef<PointsMaterial>(null);
  const light = useRef<PointLight>(null);
  const phase = useRef<ThresholdPhase>("dormant");
  const restDeadline = useRef<number | null>(null);
  const setThresholdState = useExperienceStore((state) => state.setThresholdState);
  const clearThreshold = useExperienceStore((state) => state.clearThreshold);
  const activeThreshold = useExperienceStore((state) => state.threshold);
  const activeThresholdPhase = useExperienceStore((state) => state.thresholdPhase);
  const reducedMotion = useExperienceStore((state) => state.preferences.reducedMotion);

  const particleGeometry = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setAttribute(
      "position",
      new Float32BufferAttribute(
        particlePositions.flatMap((point) => [...point]),
        3,
      ),
    );
    return geometry;
  }, []);

  useEffect(() => () => clearThreshold(descriptor.id), [clearThreshold, descriptor.id]);

  useFrame((state, delta) => {
    const distance = Math.hypot(
      state.camera.position.x - position[0],
      state.camera.position.z - position[2],
    );
    let nextPhase = phase.current;

    if (activeThreshold?.id === descriptor.id && activeThresholdPhase === "crossing") {
      nextPhase = "crossing";
    } else if (distance <= ACTIVE_DISTANCE) {
      restDeadline.current = null;
      nextPhase = "active";
    } else if (distance <= AWARE_DISTANCE) {
      restDeadline.current = null;
      nextPhase = "aware";
    } else if (phase.current === "active" || phase.current === "aware") {
      restDeadline.current = state.clock.elapsedTime + REST_SECONDS;
      nextPhase = "resting";
    } else if (
      phase.current === "resting" &&
      restDeadline.current !== null &&
      state.clock.elapsedTime >= restDeadline.current
    ) {
      nextPhase = "dormant";
    }

    if (nextPhase !== phase.current) {
      phase.current = nextPhase;
      setThresholdState(descriptor, nextPhase);
    }

    const presence =
      phase.current === "crossing"
        ? 1
        : phase.current === "active"
          ? 0.76
          : phase.current === "aware"
            ? 0.48
            : phase.current === "resting"
              ? 0.32
              : 0.3;
    const breath = reducedMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.82) * 0.025;

    if (mass.current) {
      mass.current.scale.x = MathUtils.damp(mass.current.scale.x, 1 + breath, 3.5, delta);
      mass.current.scale.y = MathUtils.damp(mass.current.scale.y, 1 - breath * 0.55, 3.5, delta);
      mass.current.position.y = MathUtils.damp(
        mass.current.position.y,
        reducedMotion ? 2.15 : 2.15 + Math.sin(state.clock.elapsedTime * 0.54) * 0.055,
        4,
        delta,
      );
    }
    if (particles.current) {
      particles.current.position.y = reducedMotion
        ? 0
        : Math.sin(state.clock.elapsedTime * 0.3) * 0.06;
    }

    const animateMaterial = (
      material: MeshStandardMaterial | null,
      opacity: number,
      emissive: number,
    ) => {
      if (!material) return;
      material.opacity = MathUtils.damp(material.opacity, opacity * presence, 3.8, delta);
      material.emissiveIntensity = MathUtils.damp(
        material.emissiveIntensity,
        emissive * presence,
        3.8,
        delta,
      );
    };
    animateMaterial(outerMaterial.current, 0.3, 0.34);
    animateMaterial(upperLobeMaterial.current, 0.24, 0.3);
    animateMaterial(lowerLobeMaterial.current, 0.2, 0.26);
    animateMaterial(middleMaterial.current, 0.46, 0.7);
    animateMaterial(coreMaterial.current, 0.72, 1.15);
    animateMaterial(groundMaterial.current, 0.24, 0.32);

    if (particleMaterial.current) {
      particleMaterial.current.opacity = MathUtils.damp(
        particleMaterial.current.opacity,
        0.12 + presence * 0.34,
        2.6,
        delta,
      );
    }
    if (light.current) {
      light.current.intensity = MathUtils.damp(
        light.current.intensity,
        0.28 + presence * 1.25,
        3.4,
        delta,
      );
    }
  });

  return (
    <group name={`threshold-${descriptor.id}`} position={position}>
      <group ref={mass} position={[0, 2.15, 0]}>
        <mesh position={[-0.12, 0.02, 0]} scale={[1.3, 1.28, 0.68]}>
          <sphereGeometry args={[1, 20, 14]} />
          <meshStandardMaterial
            ref={outerMaterial}
            color={descriptor.palette.atmosphere}
            depthWrite={false}
            emissive={descriptor.palette.glow}
            emissiveIntensity={0.08}
            opacity={0.08}
            roughness={0.92}
            transparent
          />
        </mesh>
        <mesh position={[0.66, 0.42, -0.08]} scale={[0.8, 0.94, 0.52]}>
          <sphereGeometry args={[1, 16, 11]} />
          <meshStandardMaterial
            ref={upperLobeMaterial}
            color={descriptor.palette.atmosphere}
            depthWrite={false}
            emissive={descriptor.palette.glow}
            emissiveIntensity={0.08}
            opacity={0.07}
            roughness={0.9}
            transparent
          />
        </mesh>
        <mesh position={[-0.54, -0.58, 0.04]} scale={[0.72, 0.76, 0.46]}>
          <sphereGeometry args={[1, 15, 10]} />
          <meshStandardMaterial
            ref={lowerLobeMaterial}
            color={descriptor.palette.atmosphere}
            depthWrite={false}
            emissive={descriptor.palette.glow}
            emissiveIntensity={0.07}
            opacity={0.06}
            roughness={0.94}
            transparent
          />
        </mesh>
        <mesh position={[0.06, 0.01, -0.12]} scale={[1.02, 1.06, 0.52]}>
          <sphereGeometry args={[1, 18, 12]} />
          <meshStandardMaterial
            ref={middleMaterial}
            color={descriptor.palette.glow}
            depthWrite={false}
            emissive={descriptor.palette.glow}
            emissiveIntensity={0.18}
            opacity={0.13}
            roughness={0.78}
            transparent
          />
        </mesh>
        <mesh position={[-0.16, -0.08, -0.23]} scale={[0.62, 0.74, 0.38]}>
          <sphereGeometry args={[1, 16, 10]} />
          <meshStandardMaterial
            ref={coreMaterial}
            color={descriptor.palette.core}
            depthWrite={false}
            emissive={descriptor.palette.core}
            emissiveIntensity={0.28}
            opacity={0.2}
            roughness={0.64}
            transparent
          />
        </mesh>
      </group>
      <mesh position={[0, 0.035, 0.25]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.5, 1.1, 1]}>
        <circleGeometry args={[1, 32]} />
        <meshStandardMaterial
          ref={groundMaterial}
          color={descriptor.palette.glow}
          depthWrite={false}
          emissive={descriptor.palette.glow}
          emissiveIntensity={0.06}
          opacity={0.05}
          roughness={1}
          transparent
        />
      </mesh>
      <group ref={particles} position={[0, 0, 0.24]}>
        <points geometry={particleGeometry}>
          <pointsMaterial
            ref={particleMaterial}
            color={descriptor.palette.core}
            depthWrite={false}
            opacity={0.18}
            size={0.035}
            sizeAttenuation
            transparent
          />
        </points>
      </group>
      <pointLight
        ref={light}
        color={descriptor.palette.glow}
        distance={9}
        intensity={0.42}
        position={[0, 1.4, 0.65]}
      />
    </group>
  );
}

export function DistantThresholdSignal({
  palette,
  position,
  scale = 1,
}: {
  palette: ThresholdPalette;
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group name="distant-threshold-signal" position={position} scale={scale}>
      <mesh scale={[0.42, 0.58, 0.3]}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={palette.glow}
          depthWrite={false}
          emissive={palette.glow}
          emissiveIntensity={0.68}
          opacity={0.62}
          roughness={0.84}
          transparent
        />
      </mesh>
    </group>
  );
}
