import { type TowerUpgrade } from '../types';

/**
 * Determines chance of targeting another enemy
 * Found on turrets
 */
export function TargetingRate(tower: TowerUpgrade): number {
	return tower.targeting_rate / tower.cooldown;
}
/** TODO: Test, rewrite formula*/
export function Acceleration(tower: TowerUpgrade): number {
	return tower.cooldown - tower.min_cooldown * tower.acceleration;
}
