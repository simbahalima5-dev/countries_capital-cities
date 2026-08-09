export class AudioService {
  private static instance: AudioService;
  private audioCtx: AudioContext | null = null;

  private constructor() {}

  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  private initAudio(): void {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
  }

  public playBeep(freq: number, type: OscillatorType, duration: number): void {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch {
      // Audio not supported or autoplay blocked
    }
  }

  public playCorrectSound(): void {
    this.playBeep(523.25, 'sine', 0.15); // C5
    setTimeout(() => this.playBeep(659.25, 'sine', 0.2), 100); // E5
  }

  public playWrongSound(): void {
    this.playBeep(220, 'sawtooth', 0.25); // A3
    setTimeout(() => this.playBeep(180, 'sawtooth', 0.3), 150);
  }

  public playClickSound(): void {
    this.playBeep(800, 'sine', 0.05);
  }
}
