import { MAX_UNSIGNED_32_BIT } from "./MAX_UNSIGNED_32_BIT";
import { noise } from "./noise";

/**
 * @returns number between 0 and 1
 */

export function noiseUnit(seed: number): number {
  return noise(seed) / MAX_UNSIGNED_32_BIT;
}
