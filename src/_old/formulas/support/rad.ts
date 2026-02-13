import { type TowerUpgrade } from "../../types";
import { Cooldown } from "../shared";

export function Rad(tower: TowerUpgrade): number | undefined {
  if (!(tower.rad_length && tower.rad_strength)) {
    return undefined;
  }
  const cd: number | undefined = Cooldown(tower);
  if (cd === undefined) {
    return undefined;
  }
  return (tower.rad_length / cd) * tower.rad_strength;
}
