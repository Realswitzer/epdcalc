import { type TowerUpgrade } from '../types';

export function Bounty(tower: TowerUpgrade, reward: number = 1) {
	return Math.floor(reward * (1 + 1.1 * (tower.bounty_amp + tower.bounty_amp / 0.5)));
}
export function Time(tower: TowerUpgrade, time: number = 1) {
	return (tower.income / tower.cooldown) * time;
}
export function Wave(tower: TowerUpgrade, waves: number = 1) {
	return tower.income * waves;
}
