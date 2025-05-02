import { noiseUnit } from "./noiseUnit";

export function noiseStream(seed: number = 0): () => number {
  return () => {
    return noiseUnit(seed++);
  };
}
