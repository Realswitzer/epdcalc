import { Tower } from "../../instance/tower";
import { Enemy } from "../../instance/enemy";

export function damagePerAction(tower: Tower, enemy?: Enemy): number | null {
  if (!enemy) {
    enemy = Enemy.blankEnemy();

    const { stats } = tower.tower;
    const { buffs } = tower;

    return stats.damage as number;
  }
  return null;
}
