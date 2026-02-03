import { TowerLevel } from "../types";

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

export class Tower {
  public buffs: Required<Buffs> = {
    dmg: 0,
    cd: 0,
    range: 0,
    upgReduction: 0,
  };
  public constructor(readonly tower: TowerLevel) {}
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
}
