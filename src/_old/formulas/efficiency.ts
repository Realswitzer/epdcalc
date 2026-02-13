import { type TowerUpgrade } from "../types";
import { Time, Wave } from "./income";

export function TimeUpgrade(tower: TowerUpgrade): number | undefined {
  const _time: number | undefined = Time(tower);
  if (!tower.price || _time === undefined) {
    return undefined;
  }
  return tower.price / _time;
}
// TODO: add this function. export function TimeUpgradeTower(tower: Tower): undefined {}
export function WaveUpgrade(tower: TowerUpgrade): number | undefined {
  const _wave: number | undefined = Wave(tower);
  if (!tower.price || _wave === undefined) {
    return undefined;
  }
  return tower.price / _wave;
}
