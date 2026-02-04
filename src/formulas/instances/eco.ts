import { generatorType } from "../../types";
import { TowerInstance } from "../../instance/tower";

export function moneyPerWave(tower: TowerInstance): number | null {
  const income = tower.getStatNumber("income");
  if (income === null || tower.tower.generatorType !== generatorType.Wave) {
    return null;
  }
  const dmgMulti = tower.getDamageMultiplier();
  return income * dmgMulti;
}

export function moneyPerSecond(tower: TowerInstance): number | null {
  const income = tower.getStatNumber("income");
  const cooldown = tower.getStatNumber("cooldown");
  if (
    tower.tower.generatorType !== generatorType.Time ||
    !income ||
    !cooldown
  ) {
    return null;
  }
  const dmgMulti = tower.getDamageMultiplier();
  const cdMulti = tower.getCooldownMultiplier();
  return (income * dmgMulti) / (cooldown * cdMulti);
}
