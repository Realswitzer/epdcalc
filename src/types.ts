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
  stats: Record<string, number | boolean>;
  abilities?: Ability[];
  generatorType?: generatorType; // TODO: add ref to ${{Tower}}
}

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
