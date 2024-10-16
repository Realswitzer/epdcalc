// NOTE: With the value, the initial sell price is haphazard at best. Pistolman places for 200 and sells for 199, shotgunners place for 300 and sell for 350, etc.
// The base sell price is 250 but that is unaffected by the towers initial price.
export function Value(price: number): number {
  return 0.35 * price;
}
export function ValueReverse(price: number): number {
  return (20 / 7) * price; // the value is similar to this, at least.
}
