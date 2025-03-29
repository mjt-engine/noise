import { serializableNoiseStream } from "./serializableNoiseStream";
import { noiseRange } from "./noiseRange";
import { noiseStream } from "./noiseStream";
import { noiseBoolean } from "./noiseBoolean";
import { noiseUnit } from "./noiseUnit";
import { noiseHash } from "./noiseHash";
import { noise } from "./noise";
import { squirrel3 } from "./squirrel3";
import { seed } from "./perlin";
import { perlin2, perlin3, simplex2, simplex3 } from "./perlin";
export * from "./type/SerializableNoiseState";
export const Noises = {
    seed, // TODO perlin/simplex noise functions want state parameter.
    perlin2: (x, y) => {
        return (perlin2(x * 255, y * 255) + 1) / 2;
    },
    perlin3,
    simplex2: (x, y) => {
        return (simplex2(x * 255, y * 255) + 1) / 2;
    },
    simplex3: (x, y, z) => {
        return (simplex3(x * 255, y * 255, z * 255) + 1) / 2;
    },
    squirrel3,
    noise,
    noiseHash,
    noiseUnit,
    noiseBoolean,
    noiseStream,
    noiseRange,
    serializableNoiseStream,
};
//# sourceMappingURL=index.js.map