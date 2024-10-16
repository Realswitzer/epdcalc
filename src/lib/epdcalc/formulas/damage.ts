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
export function AvgCritRateDamagePerSecond(
  tower: TowerUpgrade,
  rupture: number = 0
): number | undefined {
  const _crdpshot: number | undefined = AvgCritRateDamagePerShot(tower, rupture);
  const _cd: number | undefined = Cooldown(tower);
  if (_crdpshot === undefined || _cd === undefined) {
    return undefined;
  }
  return _crdpshot / _cd;
}
export function AvgCritRateDamagePerShot(
  tower: TowerUpgrade,
  rupture: number = 0
): number | undefined {
  if (!(tower.damage && tower.crit_chance && tower.crit_dmg)) {
    return undefined;
  }
  return (
    tower.damage * (1 - tower.crit_chance) +
    tower.damage * (tower.crit_dmg * (1 + rupture)) * tower.crit_chance
    // note: damage*(crit_dmg+(1+rupture)) is the same as damage*(crit_damage+(crit_dmg*rupture)).
  );
}
export function BaseDamagePerSecond(tower: TowerUpgrade): number | undefined {
  const _dmg: number = tower.damage || NaN;
  const _cd: number | undefined = Cooldown(tower);
  if (Number.isNaN(_dmg) || _cd === undefined) {
    return undefined;
  }
  return _dmg / _cd;
}
export function BaseDamagePerShot(tower: TowerUpgrade): number | undefined {
  return tower.damage || undefined;
}
export function DamagePerSecond(tower: TowerUpgrade): [number, string[]] {
  const DPShotArray: [number, string[]] = DamagePerShot(tower);
  const _cd: number = tower.cooldown || NaN;
  if (Number.isNaN(_cd)) {
    return [NaN, []];
  }
  return [DPShotArray[0] / _cd, DPShotArray[1]];
}
export function DamagePerShot_pre(tower: TowerUpgrade): [number, string[]] {
  let damage: number = tower.damage || NaN;
  if (Number.isNaN(damage)) {
    return [NaN, []];
  }
  const affectedMultipliers: string[] = [];
  for (const multiplier of multipliers) {
    if (tower[multiplier as keyof TowerUpgrade]) {
      damage *= Number(tower[multiplier as keyof TowerUpgrade]);
      affectedMultipliers.push(multiplier);
    }
  }
  return [damage, affectedMultipliers];
}

export function DamagePerShot(tower: TowerUpgrade): [number, string[]] {
  let damage: number = tower.damage || NaN;
  if (Number.isNaN(damage)) {
    return [NaN, []];
  }
  const affectedMultipliers: string[] = [];
  for (const multiplier of multipliers) {
    if (!tower[multiplier as keyof TowerUpgrade]) {
      continue;
    }
    // fjlaksdjfkl typescript please stop complaining about errors
    if (['execution'].includes(String(tower[multiplier as keyof TowerUpgrade]))) {
      damage *= 1 + Number(tower[multiplier as keyof TowerUpgrade]);
    } else {
      damage *= Number(tower[multiplier as keyof TowerUpgrade]);
    }
    affectedMultipliers.push(multiplier);
  }
  return [damage, affectedMultipliers];
}
export function MaxCritRateDamagePerSecond(
  tower: TowerUpgrade,
  rupture: number = 0
): number | undefined {
  const _mcrdpshot: number | undefined = MaxCritRateDamagePerShot(tower, rupture);
  const _cd: number | undefined = Cooldown(tower);
  if (_mcrdpshot === undefined || _cd === undefined) {
    return undefined;
  }
  return _mcrdpshot / _cd;
}
export function MaxCritRateDamagePerShot(
  tower: TowerUpgrade,
  rupture: number = 0
): number | undefined {
  if (!(tower.damage && tower.crit_dmg)) {
    return undefined;
  }
  return tower.damage * (tower.crit_dmg * (1 + rupture));
}
export function ShieldDamagePerSecond(tower: TowerUpgrade): number | undefined {
  const _sdmg: number = tower.shield_dmg || NaN;
  const _cd: number | undefined = Cooldown(tower);
  if (Number.isNaN(_sdmg) || _cd === undefined) {
    return undefined;
  }
  return _sdmg / _cd;
}
