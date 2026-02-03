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
  public buffs: Buffs = {};
  constructor(readonly tower: TowerLevel) {}
}
