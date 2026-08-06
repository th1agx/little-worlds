"use client";

import { useEffect, useState } from "react";
import type {
  LocomotionModel,
  LocomotionTuning,
} from "@/features/player/locomotion/PlayerMotionModel";
import { useExperienceStore } from "@/stores/experienceStore";

interface CalibrationSliderProps {
  label: string;
  field: keyof LocomotionTuning;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (field: keyof LocomotionTuning, value: number) => void;
}

function CalibrationSlider({
  label,
  field,
  min,
  max,
  step,
  value,
  onChange,
}: CalibrationSliderProps) {
  return (
    <label className="calibration-slider">
      <span>
        {label}: {value.toFixed(step < 0.1 ? 2 : 1)}
      </span>
      <input
        data-testid={`calibration-${field}`}
        max={max}
        min={min}
        onChange={(event) => onChange(field, Number(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
    </label>
  );
}

const calibrationControls: Omit<CalibrationSliderProps, "value" | "onChange">[] = [
  { label: "Velocidade normal", field: "walkSpeed", min: 2, max: 8, step: 0.1 },
  { label: "Velocidade rápida", field: "fastSpeed", min: 3, max: 10, step: 0.1 },
  { label: "Aceleração", field: "acceleration", min: 2, max: 18, step: 0.1 },
  { label: "Desaceleração", field: "deceleration", min: 2, max: 18, step: 0.1 },
  { label: "Altura-base", field: "baseHoverHeight", min: 0.15, max: 0.7, step: 0.01 },
  { label: "Amplitude", field: "hoverAmplitude", min: 0.02, max: 0.2, step: 0.01 },
  { label: "Frequência", field: "hoverFrequency", min: 0.2, max: 0.7, step: 0.01 },
  { label: "Câmera / flutuação", field: "cameraHoverFollow", min: 0, max: 0.5, step: 0.01 },
  { label: "Força do impulso", field: "jumpVelocity", min: 3, max: 8, step: 0.1 },
  { label: "Gravidade na subida", field: "ascentGravity", min: 4, max: 16, step: 0.1 },
  { label: "Gravidade na descida", field: "descentGravity", min: 4, max: 18, step: 0.1 },
  { label: "Controle aéreo", field: "airControl", min: 0, max: 2, step: 0.05 },
  { label: "Suavização da rotação", field: "rotationSmoothing", min: 4, max: 26, step: 0.5 },
  { label: "Reação ao impulso", field: "cameraImpulseReaction", min: 0, max: 0.12, step: 0.005 },
  { label: "Retorno ao repouso", field: "cameraRestReturn", min: 8, max: 36, step: 0.5 },
];

function ModelButton({
  active,
  model,
  onSelect,
  children,
}: {
  active: boolean;
  model: LocomotionModel;
  onSelect: (model: LocomotionModel) => void;
  children: string;
}) {
  return (
    <button aria-pressed={active} onClick={() => onSelect(model)} type="button">
      {children}
    </button>
  );
}

export function DevelopmentPanel() {
  const [view, setView] = useState<"compact" | "full" | "hidden">("compact");
  const metrics = useExperienceStore((state) => state.metrics);
  const requestSceneTransition = useExperienceStore((state) => state.requestSceneTransition);
  const locomotionModel = useExperienceStore((state) => state.locomotionModel);
  const tuning = useExperienceStore((state) => state.locomotionTuning);
  const setLocomotionModel = useExperienceStore((state) => state.setLocomotionModel);
  const updateTuning = useExperienceStore((state) => state.updateLocomotionTuning);
  const restoreTuning = useExperienceStore((state) => state.restoreLocomotionTuning);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "F3") return;
      event.preventDefault();
      setView((current) => (current === "full" ? "hidden" : "full"));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;
  if (view === "hidden") return null;

  if (view === "compact") {
    return (
      <aside
        aria-label="Diagnóstico compacto"
        className="development-panel development-panel--compact"
      >
        <span>FPS: {metrics.fps}</span>
        <span>Cena: {metrics.sceneId}</span>
        <span>Modelo: {metrics.locomotionModel}</span>
      </aside>
    );
  }

  return (
    <aside aria-label="Diagnóstico de desenvolvimento" className="development-panel">
      <strong>Diagnóstico local</strong>
      <span>Modelo: {metrics.locomotionModel}</span>
      <span>FPS: {metrics.fps}</span>
      <span>Cena: {metrics.sceneId}</span>
      <span>Cursor: {metrics.pointerLocked ? "capturado" : "livre"}</span>
      <span>Solo: {metrics.grounded ? "sim" : "não"}</span>
      <span>Movimento: {metrics.locomotion}</span>
      <span>Áudio: {metrics.audioActive ? "ativo" : "mudo"}</span>
      <span>Draw calls: {metrics.drawCalls}</span>
      <span>Triângulos: {metrics.triangles}</span>
      <span>Geometrias: {metrics.geometries}</span>
      <span>Texturas: {metrics.textures}</span>
      <span>Programas: {metrics.programs}</span>
      <span>Velocidade: {metrics.speed.toFixed(2)} m/s</span>
      <span>Altura de suspensão: {metrics.hoverHeight.toFixed(3)} m</span>
      <span>Vel. vertical: {metrics.verticalVelocity.toFixed(2)} m/s</span>
      <span>Tempo no ar: {metrics.airborneTime.toFixed(2)} s</span>
      <span>Distância do impulso: {metrics.jumpDistance.toFixed(2)} m</span>
      <div>
        <button onClick={() => requestSceneTransition("hub")} type="button">
          Hub
        </button>
        <button onClick={() => requestSceneTransition("projects")} type="button">
          Projetos
        </button>
        <button onClick={() => requestSceneTransition("benchmark")} type="button">
          Benchmark
        </button>
        <button onClick={() => requestSceneTransition("benchmark-v2")} type="button">
          Benchmark V2
        </button>
      </div>
      <hr />
      <strong>Comparar locomoção</strong>
      <div>
        <ModelButton
          active={locomotionModel === "legacy"}
          model="legacy"
          onSelect={setLocomotionModel}
        >
          Legacy
        </ModelButton>
        <ModelButton
          active={locomotionModel === "controlled-levitation"}
          model="controlled-levitation"
          onSelect={setLocomotionModel}
        >
          Controlled Levitation
        </ModelButton>
      </div>
      <strong>Calibração em tempo real</strong>
      {calibrationControls.map((control) => (
        <CalibrationSlider
          {...control}
          key={control.field}
          onChange={(field, value) => updateTuning({ [field]: value })}
          value={tuning[control.field]}
        />
      ))}
      <button onClick={restoreTuning} type="button">
        Restaurar valores propostos
      </button>
    </aside>
  );
}
