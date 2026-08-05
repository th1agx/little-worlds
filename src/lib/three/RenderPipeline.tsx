import {
  ACESFilmicToneMapping,
  SRGBColorSpace,
  WebGLRenderer,
  type WebGLRendererParameters,
} from "three";

export function createRenderPipeline(defaults: WebGLRendererParameters): WebGLRenderer {
  const renderer = new WebGLRenderer({
    ...defaults,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  return renderer;
}
