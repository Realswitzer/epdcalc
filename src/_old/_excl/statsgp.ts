import { apollos_blessing } from '../Towers/exalted';
import { Upgrade, type Tower, type TowerUpgrade } from '../../types';

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

// DpS (Bleed) // No idea how this is truly calculated, will need to review more footage. :: Seems to be bleed/5 so it only accounts for a single proc. ?????
// iirc it's also been mentioned that bleed was 3 seconds so im a little confused about this part but bleed kinda sucks anyways so nobody will notice a calculation error.
export function BleedDamagePerSecond(tower: TowerUpgrade): number | undefined {
  // having a roken b key here makes this more inconsistent.
  if (!tower.bleed) {
    return undefined;
  }
  return tower.bleed / 5;
}

// DPM (Bleed)
export function BleedDamagePerMinute(tower: TowerUpgrade): number | undefined {
  const _bdps: number | undefined = BleedDamagePerSecond(tower);
  if (_bdps) {
    return _bdps * 60;
  } else {
    return undefined;
  }
}
// Crit Avg // This is also calculated in a weird way from what I can tell. 60x crit = 19x crit avg -- nvm im dumb. i just had to check 2 screenshots to figure it out.
export function CritAvg(tower: TowerUpgrade): number | undefined {
  if (!(tower.crit_chance && tower.crit_dmg)) {
    return undefined;
  }
  return 1 + tower.crit_chance * tower.crit_dmg;
}
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
export function CashPerSecond(tower: TowerUpgrade): number | undefined {
  if (!(tower.income && tower.cooldown)) {
    return undefined;
  }
  return tower.income / tower.cooldown;
}
// CPM
export function CashPerMinute(tower: TowerUpgrade): number | undefined {
  const _cps: number = CashPerSecond(tower) || NaN;
  if (!Number.isNaN(_cps)) {
    return _cps * 60;
  }
  return undefined;
}
// Cost/CPS
export function CostPerCPS(tower: Tower, upgrade: Upgrade): number | undefined {
  const _price: number | undefined = CumulativePrice(tower, upgrade);
  const _cps: number | undefined = CashPerSecond(tower[upgrade] || {});
  if (_price && _cps) {
    return _price / _cps;
  }
  return undefined;
}
// -- ENGIS
// Spawn DPS
export function SpawnDamagePerSecond(tower: TowerUpgrade): number | undefined {
  if (!(tower.spawns_cd && tower.spawns_damage)) {
    return undefined;
  }
  return tower.spawns_damage / tower.spawns_cd;
}
// Spawn DPM
export function SpawnDamagePerMinute(tower: TowerUpgrade): number | undefined {
  const _spawndps: number = SpawnDamagePerSecond(tower) || NaN;
  if (Number.isNaN(_spawndps)) {
    return undefined;
  }
  return _spawndps * 60;
}
// Max DPS (spawndps*maxspawn)
export function SpawnMaxDamagePerSecond(tower: TowerUpgrade): number | undefined {
  const _spawndps: number = SpawnDamagePerSecond(tower) || NaN;
  if (Number.isNaN(_spawndps)) {
    return undefined;
  }
  if (!tower.max_spawns) {
    return undefined;
  } // need to do separate so typescript stops complaining
  return _spawndps * tower.max_spawns;
}
// Max DPM
export function SpawnMaxDamagePerMinute(tower: TowerUpgrade): number | undefined {
  const _spawndpm: number = SpawnDamagePerMinute(tower) || NaN;
  if (Number.isNaN(_spawndpm)) {
    return undefined;
  }
  if (!tower.max_spawns) {
    return undefined;
  }
  return _spawndpm * tower.max_spawns;
}
// Cost/spawn dps
export function CostPerSpawnDPS(tower: Tower, upgrade: Upgrade): number | undefined {
  const towerupgrade = tower[upgrade] || {};
  const _spawndps: number | undefined = SpawnDamagePerSecond(towerupgrade);
  if (_spawndps !== undefined) {
    return undefined;
  }
  return _spawndps;
}

// Cost/max dps
export function CostPerMaxDPS(tower: Tower, upgrade: Upgrade): number | undefined {
  const towerupgrade = tower[upgrade] || {};
  const _maxdps: number | undefined = SpawnMaxDamagePerSecond(towerupgrade);
  if (!(towerupgrade.max_spawns && _maxdps !== undefined)) {
    return undefined;
  }
  return _maxdps;
}
