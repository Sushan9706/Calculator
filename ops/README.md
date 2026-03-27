# Operator modules (optional)

Drop operator files here to extend supported operations.

Each module should export:

- `symbol`: e.g. `"%"`
- `compute(a, b)`: return numeric result

Example:

```js
export const symbol = "%";
export function compute(a, b) {
  return a % b;
}
```
