import { squirrel3 } from "./squirrel3";
/**
 * @returns 'random' 32bit unsigned
 */
export function noiseUint32(seed) {
    return squirrel3(seed);
}
//# sourceMappingURL=noiseUint32.js.map