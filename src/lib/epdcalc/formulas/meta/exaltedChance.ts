// i feel like theres some cap but i dont know.
export function exaltedChance(CurrentPrestige: number): number {
  return exaltedChanceNumber(CurrentPrestige) / 10000;
}
export function exaltedChanceNumber(CurrentPrestige: number): number {
  return (3 + 9 * (CurrentPrestige / (CurrentPrestige + 900))) * 100;
}
