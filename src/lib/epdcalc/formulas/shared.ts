import { type TowerUpgrade } from '../types';

export function Cooldown(tower: TowerUpgrade): number {
	const cd: number = tower.burst
		? (tower.cooldown * tower.burst + tower.burst_cd) / tower.burst
		: tower.cooldown;
	return cd;
}
