import { Tower } from "../../instance/tower";
import { Enemy } from "../../instance/enemy";

export function damagePerAction(tower: Tower, enemy?: Enemy): number {
  if (!enemy) {
    enemy = new Enemy();
  }
}
