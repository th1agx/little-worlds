"use client";

import { useState } from "react";
import { temporaryAudioController } from "@/features/audio/TemporaryAudioController";
import { requestExperiencePointerLock } from "@/features/experience/pointer-lock/pointerLockService";
import { useExperienceStore } from "@/stores/experienceStore";

export function ExperienceControls() {
  const [open, setOpen] = useState(false);
  const preferences = useExperienceStore((state) => state.preferences);
  const updatePreferences = useExperienceStore((state) => state.updatePreferences);

  const updateAudio = (enabled: boolean) => {
    updatePreferences({ audioEnabled: enabled });
    if (enabled) void temporaryAudioController.activate(true, preferences.masterVolume);
    else temporaryAudioController.setEnabled(false);
  };

  if (!open) {
    return (
      <button className="utility-button" onClick={() => setOpen(true)} type="button">
        Controles temporários
      </button>
    );
  }

  return (
    <section aria-label="Controles temporários" className="control-panel">
      <div className="panel-heading">
        <h2>Controles temporários</h2>
        <button
          aria-label="Fechar controles temporários"
          onClick={() => setOpen(false)}
          type="button"
        >
          Fechar
        </button>
      </div>
      <label>
        Volume geral
        <input
          max="0.6"
          min="0"
          onChange={(event) => {
            const masterVolume = Number(event.target.value);
            updatePreferences({ masterVolume });
            temporaryAudioController.setVolume(masterVolume);
          }}
          step="0.05"
          type="range"
          value={preferences.masterVolume}
        />
      </label>
      <label>
        Sensibilidade do mouse
        <input
          max="0.004"
          min="0.0005"
          onChange={(event) => updatePreferences({ mouseSensitivity: Number(event.target.value) })}
          step="0.0005"
          type="range"
          value={preferences.mouseSensitivity}
        />
      </label>
      <label>
        <input
          checked={preferences.visualMotionEnabled}
          onChange={(event) => updatePreferences({ visualMotionEnabled: event.target.checked })}
          type="checkbox"
        />
        Feedback visual da câmera
      </label>
      <label>
        <input
          checked={preferences.audioEnabled}
          onChange={(event) => updateAudio(event.target.checked)}
          type="checkbox"
        />
        Áudio provisório
      </label>
      <label>
        <input
          checked={preferences.reducedMotion}
          onChange={(event) => updatePreferences({ reducedMotion: event.target.checked })}
          type="checkbox"
        />
        Reduzir movimento
      </label>
      <label>
        <input
          checked={preferences.jumpEnabled}
          onChange={(event) => updatePreferences({ jumpEnabled: event.target.checked })}
          type="checkbox"
        />
        Impulso experimental (Espaço)
      </label>
      <p>A suspensão é automática e limitada ao terreno. Espaço aplica um impulso.</p>
      <button onClick={requestExperiencePointerLock} type="button">
        Retomar olhar livre
      </button>
    </section>
  );
}
