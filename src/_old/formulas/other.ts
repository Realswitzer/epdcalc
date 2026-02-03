import { type TowerUpgrade } from '../types';

/** TODO: Test, rewrite formula*/
export function Acceleration(tower: TowerUpgrade): number | undefined {
  if (!(tower.cooldown && tower.min_cooldown && tower.acceleration)) {
    return undefined;
  }
  return tower.cooldown - tower.min_cooldown * tower.acceleration;
}
/**
 * Determines chance of targeting another enemy
 * Found on turrets
 */
export function TargetingRate(tower: TowerUpgrade): number | undefined {
  if (!(tower.targeting_rate && tower.cooldown)) {
    return undefined;
  }
  return tower.targeting_rate / tower.cooldown;
}
