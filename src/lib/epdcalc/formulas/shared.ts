import { type TowerUpgrade } from '../types';

export function Cooldown(tower: TowerUpgrade): number | undefined {
	if (!tower.cooldown) {
		return undefined;
	}

	const cd: number =
		tower.burst && tower.burst_cd
			? (tower.cooldown * tower.burst + tower.burst_cd) / tower.burst
			: tower.cooldown;
	return cd;
}
