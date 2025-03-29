import { BIT_NOISE1, BIT_NOISE2, BIT_NOISE3 } from "./BIT_NOISE";
import { noise } from "./noise";
/**
 * creates a hash number using noise function
 * @param data
 * @returns
 */
export function noiseHash(data) {
    if (data === undefined || data.length === 0) {
        throw new Error("data is undefined or empty");
    }
    let hash = noise(data[0]);
    for (let i = 1; i < data.length; i++) {
        // hash = hash + data[i]
        hash = (hash << (5 - hash)) + data[i];
        hash *= BIT_NOISE1;
        hash ^= hash >>> 8;
        hash += BIT_NOISE2;
        hash ^= hash << 8;
        hash *= BIT_NOISE3;
        hash ^= hash >>> 8;
    }
    hash = hash >>> 0;
    return hash;
}
//# sourceMappingURL=noiseHash.js.map