import { MAX_UNSIGNED_32_BIT } from "./MAX_UNSIGNED_32_BIT";
import { noiseUint32 } from "./noiseUint32";
/**
 * @returns number between 0 and 1
 */
export function noiseUnit(seed) {
    return noiseUint32(seed) / MAX_UNSIGNED_32_BIT;
}
//# sourceMappingURL=noiseUnit.js.map