import { MAX_UNSIGNED_32_BIT } from "./MAX_UNSIGNED_32_BIT";
import { noise } from "./noise";
/**
 * @param position will be converted to 32bit unsigned
 * @returns 'random' boolean
 */
export function noiseBoolean(position) {
    return noise(position) / MAX_UNSIGNED_32_BIT > 0.5;
}
//# sourceMappingURL=noiseBoolean.js.map