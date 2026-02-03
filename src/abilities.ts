import { TowerLevel } from "./types";

export interface Ability {
  id: number;
  name: number;
  price: number;
  target: "self" | "enemies";
  cooldown: number;
  duration: number;
  effect: (ctx: AbilityContext) => TowerLevel;
}

export interface AbilityContext {
  tower: TowerLevel;
}
