import { GeneratorType } from "../../types";
import { TowerInstance } from "../../instance/tower";

export function moneyPerWave(tower: TowerInstance): number | null {
  const income = tower.getStatNumber("income");
  if (income === null || tower.tower.generatorType !== GeneratorType.Wave) {
    return null;
  }
  const dmgMulti = tower.getDamageMultiplier();
  return income * dmgMulti;
}

export function moneyPerSecond(tower: TowerInstance): number | null {
  const income = tower.getStatNumber("income");
  const cooldown = tower.getStatNumber("cooldown");
  if (
    tower.tower.generatorType !== GeneratorType.Time ||
    !income ||
    !cooldown
  ) {
    return null;
  }
  const dmgMulti = tower.getDamageMultiplier();
  const cdMulti = tower.getCooldownMultiplier();
  return (income * dmgMulti) / (cooldown * cdMulti);
}
