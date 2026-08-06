import type { SceneId } from "@/features/world/types";

export type PortalPhase = "dormant" | "aware" | "ready" | "transitioning" | "deactivating";

export interface PortalDescriptor {
  id: string;
  destination: SceneId;
  label: string;
}
