import { TowerInstance } from "../../instance/tower";
import { Enemy } from "../../instance/enemy";

export function damagePerAction(
  tower: TowerInstance,
  enemy?: Enemy
): number | null {
  const damage = tower.getStatNumber("damage");
  if (!damage) {
    return null;
  }
  if (!enemy) {
    enemy = Enemy.blankEnemy();
  }
  let totalDamage = damage;
  let multiplierCount = 0;
  let mult;

  mult = tower.getStatNumber("all_seeing");
  if (mult && enemy.camo) {
    totalDamage *= 1 + mult;
    multiplierCount++;
  }
  mult = tower.getStatNumber("boss_slayer");
  if (mult && enemy.boss) {
    totalDamage *= 1 + mult;
    multiplierCount++;
  }
  mult = tower.getStatNumber("departure");
  if (mult && enemy.health / enemy.maxHealth < 0.2) {
    totalDamage *= 1 + mult;
    multiplierCount++;
  }
  mult = tower.getStatNumber("execution");
  if (mult && enemy.health / enemy.maxHealth < 0.5) {
    totalDamage *= 1 + mult;
    multiplierCount++;
  }
  mult = tower.getStatNumber("first_strike");
  if (mult && !enemy.debuffs.first_strike_ids.includes(tower.id)) {
    totalDamage *= mult;
    multiplierCount++;
    enemy.debuffs.first_strike_ids.push(tower.id);
  }
  mult = tower.getStatNumber("hollow_point");
  if (mult && !enemy.armor) {
    totalDamage *= mult++;
    multiplierCount;
  }
  //   mult = tower.getStatNumber("melt")
  mult = tower.getStatNumber("purify");
  if (mult && enemy.corrupted) {
    totalDamage *= mult;
    multiplierCount++;
  }
  mult = tower.getStatNumber("valor");
  if (mult && enemy.health / enemy.maxHealth > 0.5) {
    totalDamage *= mult;
    multiplierCount++;
  }

  if (enemy.debuffs.scorch) {
    totalDamage *= enemy.getScorchMultiplier() ** multiplierCount;
  }

  return totalDamage;
}
