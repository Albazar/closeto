import { CloseTo } from "../src";

describe('CloseTo', () => {

    const closeTo = new CloseTo(1e-1);
    it('equals', () => {
        expect(closeTo.equals(1.1, 1.0)).toBeFalsy();
        expect(closeTo.equals(1.0, 1.01)).toBeTruthy();
        expect(closeTo.equals(1.0, 0.99)).toBeTruthy();
        expect(closeTo.equals(1.0, 1.1)).toBeFalsy();
    });

    it('greaterThanOrEqual', () => {
        expect(closeTo.greaterThanOrEqual(1.1, 1.0)).toBeTruthy();
        expect(closeTo.greaterThanOrEqual(1.0, 1.01)).toBeTruthy();
        expect(closeTo.greaterThanOrEqual(1.0, 0.99)).toBeTruthy();
        expect(closeTo.greaterThanOrEqual(1.0, 1.1)).toBeFalsy();
    });

    it('greaterThan', () => {
        expect(closeTo.greaterThan(1.1, 1.0)).toBeTruthy();
        expect(closeTo.greaterThan(1.0, 1.01)).toBeFalsy();
        expect(closeTo.greaterThan(1.0, 0.99)).toBeFalsy();
        expect(closeTo.greaterThan(1.0, 1.1)).toBeFalsy();
    });

    it('lessThanOrEqual', () => {
        expect(closeTo.lessThanOrEqual(1.1, 1.0)).toBeFalsy();
        expect(closeTo.lessThanOrEqual(1.0, 1.01)).toBeTruthy();
        expect(closeTo.lessThanOrEqual(1.0, 0.99)).toBeTruthy();
        expect(closeTo.lessThanOrEqual(1.0, 1.1)).toBeTruthy();
    });

    it('lessThan', () => {
        expect(closeTo.lessThan(1.1, 1.0)).toBeFalsy();
        expect(closeTo.lessThan(1.0, 1.01)).toBeFalsy();
        expect(closeTo.lessThan(1.0, 0.99)).toBeFalsy();
        expect(closeTo.lessThan(1.0, 1.1)).toBeTruthy();
    });
});
