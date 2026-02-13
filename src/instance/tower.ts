import { KnownStatKeys, Tower, TowerLevel, TowerStats } from "../types";

// maybe rework due to buff stacking
export interface Buffs {
  dmg?: number;
  cd?: number;
  range?: number;
  upgReduction?: number;
  // i forgot how bounty worked
  // bounty?: number
  // bountyAmp?: number
}

let i = 0;
function nextId() {
  return i++;
}
export class TowerInstance {
  public id: number;
  public buffs: Required<Buffs> = {
    dmg: 0,
    cd: 0,
    range: 0,
    upgReduction: 0,
  };
  public constructor(
    readonly tower: Tower,
    readonly level: TowerLevel,
  ) {
    this.id = nextId();
  }
  // TODO: Fix damage and CD buffs
  // When using multipliers, remember to just use them. It's not 1+getDamageMultiplier(), it is just getDamageMultiplier()
  public getDamageBuff(): number {
    // dmg buffs from other sources seem to stack, so this is wrong
    return this.buffs.dmg;
  }
  public getDamageMultiplier(): number {
    return 1 + this.getDamageBuff();
  }
  public getCooldownBuff(): number {
    // ditto
    return this.buffs.cd;
  }
  public getCooldownMultiplier(): number {
    return 1 - this.getCooldownBuff();
  }
  public getRangeBuff(): number {
    return this.buffs.range;
  }
  public getUpgradeReductionBuff(): number {
    return this.buffs.upgReduction;
  }

  public getStatNumber(key: KnownStatKeys): number | null;
  public getStatNumber(key: string): number | null;
  public getStatNumber(key: string): number | null {
    const value = this.level.stats[key];
    if (typeof value === "number") {
      return value;
    } else {
      return null;
    }
  }
  public getStatBoolean(key: KnownStatKeys): boolean;
  public getStatBoolean(key: string): boolean;
  public getStatBoolean(key: string): boolean {
    const value = this.level.stats[key];
    return value === true;
  }

  public has(key: KnownStatKeys): boolean;
  public has(key: string): boolean;
  public has(key: string): boolean {
    if (this.getStatBoolean(key) || this.getStatNumber(key)) return true;
    return false;
  }
}

// new TowerInstance(
//   elder_godfather,
//   elder_godfather.paths.find((v) => v.id === "a")!,
// ).getStatBoolean("camo");
