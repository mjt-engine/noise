import { MAX_UNSIGNED_32_BIT } from "./MAX_UNSIGNED_32_BIT";
import { noise } from "./noise";

/**
 * @param position will be converted to 32bit unsigned
 * @returns 'random' boolean
 */

export function noiseBoolean(position: number): boolean {
  return noise(position) / MAX_UNSIGNED_32_BIT > 0.5;
}
