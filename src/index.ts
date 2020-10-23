export class CloseTo {

    private precision: number;

    /**
     * If the difference of 2 numbers is less than the 'precision' they are equal.
     * @param precision number
     */
    constructor(precision: number) {
        if (precision < 0) {
            throw "Invalid precision (cannot have negative precision)";
        }
        this.precision = precision;
    }

    /**
     * Check if 'a' and 'b' are equal with the set precision.
     * @param a number
     * @param b number
     */
    public equals = (a: number, b: number): boolean => {
        return Math.abs(a - b) < this.precision;
    }

    /**
     * Check if 'a' is greater than 'b' or with in the set precision.
     * @param a number
     * @param b number
     */
    public greaterThanOrEqual = (a: number, b: number): boolean => {
        return (b - a) < this.precision;
    }

    /**
     * Check if 'a' is less than 'b' or with in the set precision.
     * @param a number
     * @param b number
     */
    public lessThanOrEqual = (a: number, b: number): boolean => {
        return (a - b) < this.precision;
    }

    /**
     * Check if 'a' is greater than 'b' and NOT with in the set precision.
     * @param a number
     * @param b number
     */
    public greaterThan = (a: number, b: number): boolean => {
        return (a - b) > this.precision;
    }

    /**
     * Check if 'a' is less than 'b' and NOT with in the set precision.
     * @param a number
     * @param b number
     */
    public lessThan = (a: number, b: number): boolean => {
        return (b - a) > this.precision;
    }
}
