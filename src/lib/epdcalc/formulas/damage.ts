import { type TowerUpgrade } from '../types';
import { Cooldown } from './shared';

const multipliers: string[] = [
	'all_seeing',
	'boss_slayer',
	'execution',
	'hollow_point',
	'purify',
	'valor'
];
export function DamagePerShot(tower: TowerUpgrade): [number, string[]] {
	let damage: number = tower.damage;
	let affectedMultipliers: string[] = [];
	for (let multiplier of multipliers) {
		if (!tower[multiplier]) {
			continue;
		}
		if (['execution'].includes(tower[multiplier])) {
			damage *= 1 + tower[multiplier];
		} else {
			damage *= tower[multiplier];
		}
		affectedMultipliers.push(multiplier);
	}
	return [damage, affectedMultipliers];
}
export function DamagePerShot_pre(tower: TowerUpgrade): [number, string[]] {
	let damage: number = tower.damage;
	let affectedMultipliers: string[] = [];
	for (let multiplier of multipliers) {
		if (tower[multiplier]) {
			damage *= tower[multiplier];
			affectedMultipliers.push(multiplier);
		}
	}
	return [damage, affectedMultipliers];
}
export function DamagePerSecond(tower: TowerUpgrade): [number, string[]] {
	let DPShotArray: [number, string[]] = DamagePerShot(tower);
	return [DPShotArray[0] / tower.cooldown, DPShotArray[1]];
}
export function BaseDamagePerShot(tower: TowerUpgrade): number {
	return tower.damage;
}
export function BaseDamagePerSecond(tower: TowerUpgrade): number {
	return tower.damage / Cooldown(tower);
}
export function ShieldDamagePerSecond(tower: TowerUpgrade): number {
	return tower.shield_dmg / Cooldown(tower);
}

export function AvgCritRateDamagePerShot(tower: TowerUpgrade, rupture: number = 0): number {
	return (
		tower.damage * (1 - tower.crit_chance) +
		tower.damage * (tower.crit_dmg * (1 + rupture)) * tower.crit_chance
		// note: damage*(crit_dmg+(1+rupture)) is the same as damage*(crit_damage+(crit_dmg*rupture)).
	);
}
export function AvgCritRateDamagePerSecond(tower: TowerUpgrade, rupture: number = 0): number {
	return AvgCritRateDamagePerShot(tower, rupture) / Cooldown(tower);
}
export function MaxCritRateDamagePerShot(tower: TowerUpgrade, rupture: number = 0): number {
	return tower.damage * (tower.crit_dmg * (1 + rupture));
}
export function MaxCritRateDamagePerSecond(tower: TowerUpgrade, rupture: number = 0): number {
	return MaxCritRateDamagePerShot(tower, rupture) / Cooldown(tower);
}
