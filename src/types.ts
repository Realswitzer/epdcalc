export interface Tower {
  id: string;
  name: string;
  levels: TowerLevel[];
  rarity: TowerRarity;
  type: TowerType[];
  paths: TowerPath[];
  generatorType?: generatorType;
}

export interface TowerLevel {
  level: number;
  name?: string;
  price: number;
  stats: TowerStats;
  abilities?: Ability[];
}

export type TowerStats = knownStats & {
  [key: string]: number | boolean | undefined;
};
export interface TowerPath extends TowerLevel {
  id: "a" | "b" | "c";
}

export enum TowerRarity {
  Elusive = "Elusive",
  ElusiveStandard = "Elusive/Standard",
  Exalted = "Exalted",
  Exotic = "Exotic",
  Fabled = "Fabled",
  Fusion = "Fusion",
  Illustrious = "Illustrious",
  Legendary = "Legendary",
  Lustrous = "Lustrous",
  Majestic = "Majestic",
  Prestigious = "Prestigious",
  Prime = "Prime",
  Prototype = "Prototype",
  Standard = "Standard",
  Synthesized = "Synthesized",
  Unknown = "Unknown",
  Unknown2 = "???",
}

export enum TowerType {
  Defense = "Defense",
  Generator = "Generator",
  Offense = "Offense",
  Support = "Support",
  UNKNOWN_TYPE = "UNKNOWN_TYPE",
}

export interface Ability {
  id: number;
  type: "add";
}

export interface Enemy {
  id: string;
  name: string;
  health: number;
  shield?: number;
  boss?: boolean;
  armor?: boolean;
  corrupted?: boolean;
  // speed: number
  // cash?: number
}

export enum generatorType {
  Wave = "wave",
  Time = "time",
}

export interface knownStats {
  acceleration?: number;
  aim?: number;
  all_seeing?: number;
  armor_destruction?: number;
  armor_piercing?: boolean;
  beams?: number;
  bleed_increase?: number;
  bleed?: number;
  bliz_length?: number;
  bliz_radius?: number;
  boss_slayer?: number;
  bounty_add?: number;
  bounty_amp?: number;
  burn_damage?: number;
  burn_time?: number;
  burst_cd?: number;
  burst?: number;
  camo?: boolean;
  cash_conv?: number;
  cooldown_buff?: number;
  cooldown?: number;
  corrosion?: number;
  crit_chance?: number;
  crit_dmg?: number;
  damage_buff?: number;
  damage_cap?: number;
  damage_increase?: number;
  damage?: number;
  departure?: number;
  exclusion?: number;
  execution?: number;
  first_strike?: number;
  frost_time?: number;
  frostbite?: number;
  hollow_point?: number;
  inaccuracy?: number;
  income?: number;
  instabreak?: number;
  leech?: number;
  max_cooldown?: number;
  max_dmg_increase?: number;
  max_interest?: number;
  max_spawns?: number;
  melt?: number;
  min_cooldown?: number;
  min_dmg_increase?: number;
  purify?: number;
  rad_length?: number;
  rad_strength?: number;
  radius?: number;
  range_buff?: number;
  range?: number;
  residue_length?: number;
  rupture_duration?: number;
  rupture?: number;
  scald?: number;
  scorch_length?: number;
  scorch?: number;
  shield_bypass?: number;
  shield_dmg?: number;
  shredding_length?: number;
  shredding?: number;
  soul_damage?: number;
  spawns_cd?: number;
  spawns_damage?: number;
  spawns_range?: number;
  stun?: number;
  targeting_rate?: number;
  upgrade_reduction?: number;
  valor?: number;
}

export type KnownStatKeys =
  | "acceleration"
  | "aim"
  | "all_seeing"
  | "armor_destruction"
  | "armor_piercing"
  | "beams"
  | "bleed_increase"
  | "bleed"
  | "bliz_length"
  | "bliz_radius"
  | "boss_slayer"
  | "bounty_add"
  | "bounty_amp"
  | "burn_damage"
  | "burn_time"
  | "burst_cd"
  | "burst"
  | "camo"
  | "cash_conv"
  | "cooldown_buff"
  | "cooldown"
  | "corrosion"
  | "crit_chance"
  | "crit_dmg"
  | "damage_buff"
  | "damage_cap"
  | "damage_increase"
  | "damage"
  | "departure"
  | "exclusion"
  | "execution"
  | "first_strike"
  | "frost_time"
  | "frostbite"
  | "hollow_point"
  | "inaccuracy"
  | "income"
  | "instabreak"
  | "leech"
  | "max_cooldown"
  | "max_dmg_increase"
  | "max_interest"
  | "max_spawns"
  | "melt"
  | "min_cooldown"
  | "min_dmg_increase"
  | "purify"
  | "rad_length"
  | "rad_strength"
  | "radius"
  | "range_buff"
  | "range"
  | "residue_length"
  | "rupture_duration"
  | "rupture"
  | "scald"
  | "scorch_length"
  | "scorch"
  | "shield_bypass"
  | "shield_dmg"
  | "shredding_length"
  | "shredding"
  | "soul_damage"
  | "spawns_cd"
  | "spawns_damage"
  | "spawns_range"
  | "stun"
  | "targeting_rate"
  | "upgrade_reduction"
  | "valor";
