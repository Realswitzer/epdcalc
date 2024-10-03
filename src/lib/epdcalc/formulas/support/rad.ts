import { type Tower, type TowerUpgrade } from '../../types';
import { Cooldown } from '../shared';

export function Rad(tower: TowerUpgrade) {
	let cd: number = Cooldown(tower);
	return (tower.rad_length / cd) * tower.rad_strength;
}
