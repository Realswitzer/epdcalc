import { type Tower, type TowerUpgrade } from '../../types';
import { Cooldown } from '../shared';

export function Rad(tower: TowerUpgrade): number | undefined {
	if (!(tower.rad_length && tower.rad_strength)) {
		return undefined;
	}
	let cd: number | undefined = Cooldown(tower);
	if (cd === undefined) {
		return undefined;
	}
	return (tower.rad_length / cd) * tower.rad_strength;
}
