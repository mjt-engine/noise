import { BIT_NOISE1, BIT_NOISE2, BIT_NOISE3 } from "./BIT_NOISE";

/**
 *
 * @param position
 * @see https://www.youtube.com/watch?v=LWFzPP8ZbdU&t=2666s
 */
export function squirrel3(position: number): number {
  let mangled = position >>> 0; // trick to get to 32bit unsigned
  mangled *= BIT_NOISE1;
  mangled ^= mangled >>> 8;
  mangled += BIT_NOISE2;
  mangled ^= mangled << 8;
  mangled *= BIT_NOISE3;
  mangled ^= mangled >>> 8;
  mangled = mangled >>> 0;
  return mangled;
}
