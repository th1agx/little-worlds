let canvas: HTMLCanvasElement | null = null;

export function registerPointerLockCanvas(element: HTMLCanvasElement | null): void {
  canvas = element;
}

export function requestExperiencePointerLock(): void {
  canvas?.requestPointerLock();
}

export function releaseExperiencePointerLock(): void {
  if (document.pointerLockElement === canvas) document.exitPointerLock();
}

export function isExperiencePointerLocked(): boolean {
  return document.pointerLockElement === canvas;
}
