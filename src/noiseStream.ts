import { noiseUnit } from "./noiseUnit";

export function noiseStream(seed: number = 0): () => number {
  const sab = new ArrayBuffer(8);
  const ta = new Uint32Array(sab);
  Atomics.store(ta, 0, Math.round(seed));
  return () => {
    return noiseUnit(Atomics.add(ta, 0, 1));
  };
}
