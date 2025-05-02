import { expect, test, describe } from "vitest";
import { noiseStream } from "./noiseStream";
describe("NoiseStream", () => {
    test("different stream values", () => {
        const random = noiseStream(0);
        for (let i = 0; i < 100; i++) {
            const r1 = random();
            const r2 = random();
            expect(r1).not.toEqual(r2);
        }
    });
    test("noise between 0 and 1", () => {
        const random = noiseStream(0);
        for (let i = 0; i < 100; i++) {
            expect(random()).toBeLessThan(1);
            expect(random()).toBeGreaterThan(0);
        }
    });
});
//# sourceMappingURL=noiseStream.test.js.map