# CloseTo

This library makes floating point numbers easier to deal when comparing 2 values in the real world.

### Tolerance

Using a tolerance makes comparing similar numbers a lot easier.
For instance you might not care about the difference between `1.0` and `1.000001`.

So for this we could use a tolerance of `1e-4` and then check for equality:
```javascript
const closeTo = new CloseTo(1e-4);

if (closeTo.equals(1.0, 1.000001)) {
    console.log('Close enough');
}
```
