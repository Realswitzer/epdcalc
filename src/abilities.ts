import { TowerLevel } from "./types";

export interface Ability {
  id: number;
  name: string;
  price: number;
  target: "self" | "enemies";
  cooldown: number;
  duration: number;
  effect: (ctx: AbilityContext) => TowerLevel;
}

export interface AbilityContext {
  tower: TowerLevel;
}

export const abilities: Ability[] = [
  {
    id: 16,
    name: "Bloodborn",
    target: "self",
    duration: 10,
    price: 80_000,
    effect: (ctx) => {
      let tower = ctx.tower;
      tower.stats.damage *= 4;
      return tower;
    },
  },
];
