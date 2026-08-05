type AudioEvent = "jump" | "land" | "step";

import type { LocomotionTuning } from "@/features/player/locomotion/PlayerMotionModel";

class TemporaryAudioController {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambientSources: AudioBufferSourceNode[] = [];
  private ambientModulators: OscillatorNode[] = [];
  private enabled = false;
  private windGain: GainNode | null = null;
  private lastSettled = false;

  async activate(enabled: boolean, volume: number): Promise<void> {
    this.enabled = enabled;
    if (!enabled) {
      this.stopAmbient();
      return;
    }

    const context = this.getContext();
    await context.resume();
    this.setVolume(volume);
    this.startAmbient();
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) this.stopAmbient();
  }

  setVolume(volume: number): void {
    if (this.masterGain) this.masterGain.gain.value = Math.min(0.6, Math.max(0, volume));
  }

  play(event: AudioEvent): void {
    if (!this.enabled || !this.context || !this.masterGain) return;
    if (event !== "jump") {
      this.playAirBurst(420, 0.12);
      return;
    }

    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(245, this.context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(310, this.context.currentTime + 0.11);
    gain.gain.setValueAtTime(0.012, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 0.12);
    oscillator.connect(gain).connect(this.masterGain);
    oscillator.start();
    oscillator.stop(this.context.currentTime + 0.12);
  }

  updateLevitation(speed: number, hoverHeight: number, tuning: LocomotionTuning): void {
    if (!this.enabled || !this.context || !this.windGain) return;
    const speedRatio = Math.min(1, speed / Math.max(tuning.fastSpeed, 0.01));
    const heightRatio = Math.min(1, Math.max(0, hoverHeight - tuning.baseHoverHeight));
    const targetGain = 0.004 + speedRatio * 0.012 + heightRatio * 0.008;
    this.windGain.gain.setTargetAtTime(targetGain, this.context.currentTime, 0.12);
    const settled = speedRatio < 0.03 && heightRatio < 0.02;
    if (this.lastSettled === false && settled) this.playAirBurst(620, 0.055);
    this.lastSettled = settled;
  }

  private getContext(): AudioContext {
    if (this.context && this.masterGain) return this.context;
    this.context = new AudioContext();
    this.masterGain = this.context.createGain();
    this.masterGain.connect(this.context.destination);
    return this.context;
  }

  private startAmbient(): void {
    if (!this.context || !this.masterGain || this.ambientSources.length > 0) return;
    const buffer = this.createNoiseBuffer(3);
    const layers = [{ frequency: 620, gain: 0.006, pan: -0.15, rhythm: 0.09 }];
    this.windGain = this.context.createGain();
    this.windGain.gain.value = 0.006;
    this.windGain.connect(this.masterGain);

    for (const layer of layers) {
      const source = this.context.createBufferSource();
      const filter = this.context.createBiquadFilter();
      const gain = this.context.createGain();
      const panner = this.context.createStereoPanner();
      const modulator = this.context.createOscillator();
      const modulationDepth = this.context.createGain();
      source.buffer = buffer;
      source.loop = true;
      filter.type = "bandpass";
      filter.frequency.value = layer.frequency;
      filter.Q.value = 0.45;
      gain.gain.value = layer.gain;
      panner.pan.value = layer.pan;
      modulator.frequency.value = layer.rhythm;
      modulationDepth.gain.value = layer.gain * 0.42;
      modulator.connect(modulationDepth).connect(gain.gain);
      source.connect(filter).connect(gain).connect(panner).connect(this.windGain);
      source.start(0, Math.random() * buffer.duration);
      modulator.start();
      this.ambientSources.push(source);
      this.ambientModulators.push(modulator);
    }
  }

  private stopAmbient(): void {
    for (const source of this.ambientSources) source.stop();
    for (const modulator of this.ambientModulators) modulator.stop();
    this.ambientSources = [];
    this.ambientModulators = [];
    this.windGain = null;
    this.lastSettled = false;
  }

  private createNoiseBuffer(duration: number): AudioBuffer {
    const context = this.getContext();
    const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
    const samples = buffer.getChannelData(0);
    let previous = 0;
    for (let index = 0; index < samples.length; index += 1) {
      const white = Math.random() * 2 - 1;
      previous = previous * 0.985 + white * 0.015;
      samples[index] = previous * 2.2;
    }
    return buffer;
  }

  private playAirBurst(frequency: number, duration: number): void {
    if (!this.context || !this.masterGain) return;
    const source = this.context.createBufferSource();
    const filter = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    source.buffer = this.createNoiseBuffer(0.15);
    filter.type = "lowpass";
    filter.frequency.value = frequency;
    gain.gain.setValueAtTime(0.018, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);
    source.connect(filter).connect(gain).connect(this.masterGain);
    source.start();
    source.stop(this.context.currentTime + duration);
  }
}

export const temporaryAudioController = new TemporaryAudioController();
