import { noiseUnit } from "./noiseUnit";
export function noiseStream(seed = 0) {
    return () => {
        return noiseUnit(seed++);
    };
}
//# sourceMappingURL=noiseStream.js.map