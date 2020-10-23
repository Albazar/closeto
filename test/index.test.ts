import { CloseTo } from "../src";

describe('CloseTo', () => {

    const closeTo = new CloseTo(1e-1);
    it('equals', () => {
        expect(closeTo.equals(1.0, 1.0000001)).toBeTruthy();
    });

    it('greaterThanOrEqual', () => {
        expect(closeTo.greaterThanOrEqual(1.0, 1.0000001)).toBeTruthy();
    });

    it('lessThanOrEqual', () => {
        expect(closeTo.lessThanOrEqual(1.0, 1.0000001)).toBeTruthy();
    });
});
