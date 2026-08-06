"use client";

import { useExperienceStore } from "@/stores/experienceStore";

/** A contextual prompt, rendered only at an activated threshold. */
export function PortalPrompt() {
  const portal = useExperienceStore((state) => state.portal);
  const portalPhase = useExperienceStore((state) => state.portalPhase);
  const requestPortalActivation = useExperienceStore((state) => state.requestPortalActivation);

  if (!portal || portalPhase !== "ready") return null;

  return (
    <div aria-live="polite" className="portal-prompt">
      <button onClick={requestPortalActivation} type="button">
        {portal.label} <kbd>E</kbd>
      </button>
    </div>
  );
}
