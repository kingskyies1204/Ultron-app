// ULTRON voice processor: granular pitch shift -> ring modulation -> damage (stutter, dropouts,
// bit/sample-rate crush, pitch wobble). Everything scales with the `damage` parameter.

const TWO_PI = Math.PI * 2;

class UltronVoiceProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      { name: "pitch", defaultValue: 0.8, minValue: 0.4, maxValue: 2, automationRate: "k-rate" },
      { name: "ringFreq", defaultValue: 42, minValue: 0, maxValue: 600, automationRate: "k-rate" },
      { name: "ringMix", defaultValue: 0.3, minValue: 0, maxValue: 1, automationRate: "k-rate" },
      { name: "damage", defaultValue: 0.15, minValue: 0, maxValue: 1, automationRate: "k-rate" },
    ];
  }

  constructor() {
    super();
    this.size = 1 << 15;
    this.mask = this.size - 1;
    this.buf = new Float32Array(this.size);
    this.w = 0;

    this.grain = Math.floor(sampleRate * 0.05); // 50 ms grains
    this.phase = 0;
    this.ringPhase = 0;
    this.wobblePhase = 0;

    // Damage state
    this.post = new Float32Array(this.size); // post-pitch history for stutters
    this.pw = 0;
    this.stutterLeft = 0; // samples of stutter remaining
    this.stutterLen = 0;
    this.stutterStart = 0;
    this.stutterPos = 0;
    this.dropLeft = 0;
    this.holdCount = 0;
    this.holdValue = 0;
  }

  read(delay) {
    const pos = this.w - delay;
    const i = Math.floor(pos);
    const frac = pos - i;
    const a = this.buf[i & this.mask];
    const b = this.buf[(i + 1) & this.mask];
    return a + (b - a) * frac;
  }

  process(inputs, outputs, params) {
    const input = inputs[0] && inputs[0][0];
    const out = outputs[0];
    const n = out[0].length;
    // Glitches (stutter, dropouts, crush, wobble) only kick in above 30% damage.
    const damage = Math.max(0, (params.damage[0] - 0.3) / 0.7);
    const ringFreq = params.ringFreq[0];
    const ringMix = params.ringMix[0];
    const basePitch = params.pitch[0];

    // Per-block chance of triggering glitch events, scaled by damage.
    if (this.stutterLeft <= 0 && Math.random() < damage * damage * 0.06) {
      this.stutterLen = Math.floor(sampleRate * (0.02 + Math.random() * 0.06));
      this.stutterLeft = this.stutterLen * (2 + Math.floor(Math.random() * 4));
      this.stutterStart = (this.pw - this.stutterLen + this.size) & this.mask;
      this.stutterPos = 0;
    }
    if (this.dropLeft <= 0 && Math.random() < damage * 0.012) {
      this.dropLeft = Math.floor(sampleRate * (0.01 + Math.random() * 0.05 * damage));
    }

    const crushBits = 16 - Math.floor(damage * 11); // 16 -> 5 bits
    const crushStep = Math.pow(2, crushBits - 1);
    const holdEvery = 1 + Math.floor(damage * damage * 10); // sample-rate reduction

    for (let s = 0; s < n; s++) {
      const x = input ? input[s] : 0;
      this.buf[this.w & this.mask] = x;

      // Wobble the pitch a bit when damaged, like a failing servo.
      this.wobblePhase += (TWO_PI * (0.7 + damage * 5)) / sampleRate;
      const pitch = basePitch * (1 + Math.sin(this.wobblePhase) * 0.04 * damage);

      // Two overlapping delay taps with Hann windows = classic granular pitch shifter.
      this.phase += (1 - pitch) / this.grain;
      this.phase -= Math.floor(this.phase);
      const p2 = (this.phase + 0.5) % 1;
      const g1 = Math.sin(Math.PI * this.phase) ** 2;
      const g2 = Math.sin(Math.PI * p2) ** 2;
      let y = this.read(this.phase * this.grain + 2) * g1 + this.read(p2 * this.grain + 2) * g2;

      // Ring modulator for the metallic edge.
      this.ringPhase += (TWO_PI * ringFreq) / sampleRate;
      if (this.ringPhase > TWO_PI) this.ringPhase -= TWO_PI;
      y = y * (1 - ringMix) + y * Math.sin(this.ringPhase) * ringMix * 1.6;

      this.post[this.pw & this.mask] = y;
      this.pw++;

      // Stutter: loop the last few ms.
      if (this.stutterLeft > 0) {
        y = this.post[(this.stutterStart + (this.stutterPos % this.stutterLen)) & this.mask];
        this.stutterPos++;
        this.stutterLeft--;
      }

      // Dropouts.
      if (this.dropLeft > 0) {
        y *= 0.02;
        this.dropLeft--;
      }

      // Sample-rate + bit crush.
      if (this.holdCount-- <= 0) {
        this.holdValue = y;
        this.holdCount = holdEvery - 1;
      }
      y = Math.round(this.holdValue * crushStep) / crushStep;

      for (let c = 0; c < out.length; c++) out[c][s] = y;
      this.w++;
    }
    return true;
  }
}

registerProcessor("ultron-voice", UltronVoiceProcessor);
