import { generatorType } from "../../types";
import { Tower } from "../../instance/tower";

export function moneyPerWave(tower: Tower): number | null {
  if (
    tower.tower.stats.income &&
    tower.tower.generatorType === generatorType.Wave
  ) {
    const dmgBuff = tower.getDamageBuff();
    const { income } = tower.tower.stats;
    return (income as number) * dmgBuff;
  } else {
    return null;
  }
}

export function moneyPerSecond(tower: Tower): number | null {
  if (
    tower.tower.generatorType === generatorType.Time &&
    tower.tower.stats.income &&
    tower.tower.stats.cooldown
  ) {
    const dmgBuff = tower.getDamageBuff();
    const cdBuff = tower.getCooldownBuff();
    const { income, cooldown } = tower.tower.stats;
    // TODO: confirm formula??
    return (
      ((income as number) * dmgBuff) / ((cooldown as number) * (1 - cdBuff))
    );
  } else {
    return null;
  }
}
