"use client";

import { useExperienceStore } from "@/stores/experienceStore";

/** Confirmation shown only after the phenomenon itself has communicated availability. */
export function ThresholdPrompt() {
  const threshold = useExperienceStore((state) => state.threshold);
  const thresholdPhase = useExperienceStore((state) => state.thresholdPhase);
  const requestThresholdCrossing = useExperienceStore((state) => state.requestThresholdCrossing);

  if (!threshold || thresholdPhase !== "active") return null;

  return (
    <div aria-live="polite" className="threshold-prompt">
      <button onClick={requestThresholdCrossing} type="button">
        {threshold.label} <kbd>E</kbd>
      </button>
    </div>
  );
}
