"use client";

import { useEffect } from "react";
import { temporaryAudioController } from "@/features/audio/TemporaryAudioController";
import { DevelopmentPanel } from "@/features/experience/components/DevelopmentPanel";
import { ExperienceCanvas } from "@/features/experience/components/ExperienceCanvas";
import { ExperienceControls } from "@/features/experience/components/ExperienceControls";
import { ThresholdPrompt } from "@/features/experience/components/ThresholdPrompt";
import { SceneTransitionOverlay } from "@/features/experience/components/SceneTransitionOverlay";
import { requestExperiencePointerLock } from "@/features/experience/pointer-lock/pointerLockService";
import { useExperienceStore } from "@/stores/experienceStore";

export function ExperienceShell() {
  const mode = useExperienceStore((state) => state.mode);
  const pointerLocked = useExperienceStore((state) => state.pointerLocked);
  const preferences = useExperienceStore((state) => state.preferences);
  const beginExperience = useExperienceStore((state) => state.beginExperience);
  const updatePreferences = useExperienceStore((state) => state.updatePreferences);
  const updateMetrics = useExperienceStore((state) => state.updateMetrics);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => updatePreferences({ reducedMotion: media.matches });
    syncPreference();
    media.addEventListener("change", syncPreference);
    return () => media.removeEventListener("change", syncPreference);
  }, [updatePreferences]);

  const start = () => {
    beginExperience();
    void temporaryAudioController.activate(preferences.audioEnabled, preferences.masterVolume);
    updateMetrics({ audioActive: preferences.audioEnabled });
    requestExperiencePointerLock();
  };

  return (
    <main className="experience-shell">
      <ExperienceCanvas />
      <SceneTransitionOverlay />
      {mode === "exploring" ? <ThresholdPrompt /> : null}
      {mode === "welcome" ? (
        <section aria-labelledby="welcome-title" className="welcome-panel">
          <p className="eyebrow">Protótipo técnico provisório</p>
          <h1 id="welcome-title">Universo em formação</h1>
          <p>Uma caminhada de fim de tarde para validar escala, conforto e presença.</p>
          <ul>
            <li>WASD ou setas para caminhar</li>
            <li>Shift para passo rápido</li>
            <li>Espaço aplica um impulso; a suspensão é automática</li>
            <li>Escape libera o cursor</li>
          </ul>
          <label>
            <input
              checked={preferences.audioEnabled}
              onChange={(event) => updatePreferences({ audioEnabled: event.target.checked })}
              type="checkbox"
            />
            Ativar áudio provisório após iniciar
          </label>
          <p className="notice">O áudio só começa depois da sua interação e pode ser silenciado.</p>
          <button className="primary-button" onClick={start} type="button">
            Iniciar experiência
          </button>
        </section>
      ) : null}
      {mode === "exploring" && !pointerLocked ? (
        <section aria-live="polite" className="pointer-lock-prompt">
          <p>O cursor está livre.</p>
          <button onClick={requestExperiencePointerLock} type="button">
            Retomar experiência
          </button>
          <span>Pressione Escape a qualquer momento para sair.</span>
        </section>
      ) : null}
      {mode === "exploring" ? <ExperienceControls /> : null}
      <DevelopmentPanel />
    </main>
  );
}
