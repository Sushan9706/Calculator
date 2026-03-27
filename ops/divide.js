export const symbol = '/';
export function compute(a, b) {
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
}
