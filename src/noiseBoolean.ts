import { MAX_UNSIGNED_32_BIT } from "./MAX_UNSIGNED_32_BIT";
import { noiseUint32 } from "./noiseUint32";

/**
 * @param position will be converted to 32bit unsigned
 * @returns 'random' boolean
 */

export function noiseBoolean(position: number): boolean {
  return noiseUint32(position) / MAX_UNSIGNED_32_BIT > 0.5;
}
