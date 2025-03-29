import { squirrel3 } from "./squirrel3";

/**
 * @returns 'random' 32bit unsigned
 */

export function noise(seed: number): number {
  return squirrel3(seed);
}
