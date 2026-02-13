import { TowerId } from "./types";

// NOTE: used for UI, aim to keep /towers as truth
// All of this is subjective, so if I miss a tower, it's not my fault for ignoring indie Humanoids.
export interface TowerMeta {
  /**
   * Whether a tower is used for ecoing.
   *
   * Not all towers, especially some of the bad cash conv. towers (Godfather), will count
   */
  eco?: boolean;
  /**
   * Whether a tower has high Shield DPS, based on price, overall SDPS, instabreak, etc.
   *
   * NOTE: Just because it is in the list, it may not be the best, but attempts will
   * probably be made to include all stages.
   */
  shieldDps?: boolean;
  /** Whether a tower applies Rad */
  rad?: boolean;
  /** Whether a tower applies Scorch */
  scorch?: boolean;
  /** Whether a tower applies Frostbite */
  frostbite?: boolean;
  /** Whether a tower applies Rupture */
  rupture?: boolean;
  /**
   * "Win condition" describes towers that are strong and practically necessary,
   * especially factoring in late-game. This is primarily based off of what I
   * have, and not *every* tower will be included.
   *
   * Examples include corrosion towers, finisher towers, meta SDPS towers, etc.
   *
   * Some may not be win conditions themselves, but used in combinations
   * Namely, Summer Stryker with Code 0-0-2 or Code 002.
   */
  win_condition?: boolean;
  /**
   * Whether a tower has stun
   */
  stun?: boolean;
  /**
   * "Leech fodder" is a term to describe towers that leech would be extremely
   * good with. Effectively, it'll probably just be the top 5 base dmg towers.
   * Leech is already good without necessarily needing fodder, but this sets it
   * so far over the edge
   */
  leech_fodder?: boolean;
  /**
   * Some things for types of buffs, only *good* towers will be factored in.
   * Engi does not count. Nor does High Engi.
   */
  cd_buff?: boolean;
  dmg_buff?: boolean;
  range_buff?: boolean;
  upg_reduction_buff?: boolean;
}

export const towerMeta: Partial<Record<TowerId, TowerMeta>> = {
  adamant_stryker: { rad: true },
  apollos_blessing: { rad: true },
  chief_executive_officer: { upg_reduction_buff: true, range_buff: true },
  huge_heavy: { leech_fodder: true },
  huge_heckerman: { shieldDps: true, win_condition: true },
  huge_zero_two_school: { shieldDps: true, win_condition: true },
  lemonade_stand: { eco: true, cd_buff: true, dmg_buff: true },
  raygunner_alpha: { win_condition: true, leech_fodder: true },
  summer_stryker: { rad: true, scorch: true, leech_fodder: true },
  super_stryker: { rad: true },
  true_vaporizer: { shieldDps: true, stun: true },
};
