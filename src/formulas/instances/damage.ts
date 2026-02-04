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

  return damage * tower.getDamageMultiplier() * enemy.getRadMultiplier();
}
