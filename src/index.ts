import { serializableNoiseStream } from "./serializableNoiseStream";
import { noiseRange } from "./noiseRange";
import { noiseStream } from "./noiseStream";
import { noiseBoolean } from "./noiseBoolean";
import { noiseUnit } from "./noiseUnit";
import { noiseHash } from "./noiseHash";
import { noiseUint32 } from "./noiseUint32";
import { squirrel3 } from "./squirrel3";

import { perlin2, perlin3, simplex2, simplex3 } from "./perlin";

export * from "./type/SerializableNoiseState";

export const Noises = {
  perlin2: (x: number, y: number) => {
    return (perlin2(x * 255, y * 255) + 1) / 2;
  },
  perlin3,
  simplex2: (x: number, y: number) => {
    return (simplex2(x * 255, y * 255) + 1) / 2;
  },
  simplex3: (x: number, y: number, z: number) => {
    return (simplex3(x * 255, y * 255, z * 255) + 1) / 2;
  },
  squirrel3,
  noiseUint32,
  noiseHash,
  noiseUnit,
  noiseBoolean,
  noiseStream,
  noiseRange,
  serializableNoiseStream,
};
