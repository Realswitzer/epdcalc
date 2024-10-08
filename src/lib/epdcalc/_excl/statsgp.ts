import { apollos_blessing } from '../towers/exalted';
import { Upgrade, type Tower, type TowerUpgrade } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _tower: TowerUpgrade = apollos_blessing[Upgrade.Level7a];
// Base DPS // On towers with accel, Base DPS seems to use the cooldown stat
export function BaseDPS(tower: TowerUpgrade): number | undefined {
	if (tower.cooldown && tower.damage) {
		return tower.damage / tower.cooldown;
	}
	return undefined;
}
// DPS // DPS = max accel? On towers without accel, DPS is the same as BaseDPS
export function DPS(tower: TowerUpgrade): number | undefined {
	if (tower.max_cooldown && tower.damage) {
		return tower.damage / tower.max_cooldown;
	}
	if (tower.cooldown && tower.damage) {
		return tower.damage / tower.cooldown;
	}
	return undefined;
}
// DPM
export function DPM(tower: TowerUpgrade): number | undefined {
	const _dps: number | undefined = DPS(tower);
	if (_dps === undefined) {
		return undefined;
	}
	return _dps * 60;
}
// DPS(Mult) // factor in all multipliers. will need some other wacky formula.

// DPM(Mult) // DPSMult*60

// DpS (Bleed) // No idea how this is truly calculated, will need to review more footage.
// DPM (Bleed)
// Crit Avg // This is also calculated in a weird way from what I can tell. 60x crit = 19x crit avg
// RPS ///firerate per second // 1/firerate
export function RPS(tower: TowerUpgrade): number | undefined {
	if (tower.cooldown) {
		return 1 / tower.cooldown;
	}
	return undefined;
}
// RPM ///firerate per minute (1/firerate)*60
export function RPM(tower: TowerUpgrade): number | undefined {
	const _rps: number | undefined = RPS(tower);
	if (_rps === undefined) {
		return undefined;
	}
	return 60 * _rps;
}
// Cost/DPS // Find cumulative tower cost and then divide that by DPS()
export function CumulativePrice(tower: Tower, upgrade: Upgrade): number | undefined {
	const _towerUpgrade: TowerUpgrade = tower[upgrade] || {};
	let cost: number = 0;
	if (typeof upgrade === 'number') {
		// TODO: add TowerUpgrade support
		if (
			[
				Upgrade.Level7a,
				Upgrade.Level7b,
				Upgrade.Level7c,
				Upgrade.Level7d,
				Upgrade.Level7e
			].includes(upgrade)
		) {
			cost += _towerUpgrade.price || 0;
			upgrade = Upgrade.Level6;
		}
		while (upgrade >= Upgrade.Level1) {
			cost += tower[upgrade]?.price || 0;
			upgrade--;
		}
		return cost;
	}
	return undefined;
}

export function CostPerDPS(tower: Tower, upgrade: Upgrade): number | undefined {
	const _price: number = CumulativePrice(tower, upgrade) || NaN;
	const _dps: number = DPS(tower[upgrade] || {}) || NaN;
	if (!Number.isNaN(_price) && !Number.isNaN(_dps)) {
		return _dps / _price;
	}
	return undefined;
}

// CPS (cash per sec) // Time-based income
// CPM
// Cost/CPS

// -- ENGIS
// Spawn DPS
// Spawn DPM
// Max DPS (spawndps*maxspawn)
// Max DPM
// Cost/spawn dps
// Cost/max dps
