export interface TowerUpgrade {
  acceleration?: number;
  aim?: number;
  all_seeing?: number;
  armor_destruction?: number;
  armor_piercing?: boolean;
  beams?: number;
  bleed?: number;
  boss_slayer?: number;
  bounty_add?: number;
  bounty_amp?: number;
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
  exclusion?: number;
  execution?: number;
  hollow_point?: number;
  inaccuracy?: number;
  income?: number;
  instabreak?: number;
  interest?: number;
  intimidation?: number;
  max_cooldown?: number;
  max_dmg_increase?: number;
  max_interest?: number;
  max_spawns?: number;
  min_cooldown?: number;
  min_dmg_increase?: number;
  oblivion?: number;
  paralyze?: number;
  price?: number;
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
  soul_damage?: number;
  spawns_cd?: number;
  spawns_damage?: number;
  spawns_range?: number;
  stun?: number;
  targeting_rate?: number;
  taxxing?: number;
  upgrade_reduction?: number;
  valor?: number;
  shredding?: number;
  shredding_length?: number;
  burn_damage?: number;
  burn_time?: number;
}
export type Tower = [
  TowerUpgrade, // 1
  TowerUpgrade, // 2
  TowerUpgrade, // 3
  TowerUpgrade, // 4
  TowerUpgrade, // 5
  TowerUpgrade, // 6
  TowerUpgrade, // 7a
  TowerUpgrade?, // 7b
  TowerUpgrade?, // 7c
  TowerUpgrade?, // 7d
  TowerUpgrade? // 7e
];
export enum Upgrade {
  "Level1",
  "Level2",
  "Level3",
  "Level4",
  "Level5",
  "Level6",
  "Level7a",
  "Level7b",
  "level7c",
  "level7d",
  "level7e",
}
export interface TowerInfo {
  Name: string;
  Rarity: Rarity;
  Type: TowerType | TowerType[];
  GeneratorType?: GeneratorType;
}
export enum Rarity {
  Standard = "Standard",
  Exalted = "Exalted",
  Prestigious = "Prestigious",
  Unknown2 = "???",
  Lustrous = "Lustrous",
  Unknown = "Unknown",
  Synthesized = "Synthesized",
  Majestic = "Majestic",
  Elusive = "Elusive",
  Fabled = "Fabled",
  Legendary = "Legendary",
  Illustrious = "Illustrious",
  Fusion = "Fusion",
  Exotic = "Exotic",
  ElusiveStandard = "Elusive/Standard",
  Prime = "Prime",
  Prototype = "Prototype",
}
export enum TowerType {
  Offense = "Offense",
  Support = "Support",
  Generator = "Generator",
  Defense = "Defense",
  UNKNOWN_TYPE = "UNKNOWN_TYPE", // placeholder for towers i dont have and cant have someone check it for me
}
export enum GeneratorType {
  Wave = "Wave",
  Time = "Time",
}
