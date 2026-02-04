import { TowerInstance } from "../../instance/tower";
import { Enemy } from "../../instance/enemy";

export function damagePerAction(
  tower: TowerInstance,
  enemy?: Enemy
): number | null {
  if (!enemy) {
    enemy = Enemy.blankEnemy();

    const { stats } = tower.level;

    return (
      (stats.damage as number) *
      tower.getDamageMultiplier() *
      enemy.getRadMultiplier()
    );
  }
  return null;
}
