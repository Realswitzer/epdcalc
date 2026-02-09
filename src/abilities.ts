import { TowerLevel } from "./types";

export interface Ability {
  id: number;
  name: string;
  description: string;
  price: number;
  target: "self" | "enemies" | "towers_in_range";
  cooldown: number;
  duration: number;
  effect: (ctx: AbilityContext) => TowerLevel;
}

export interface AbilityContext {
  tower: TowerLevel;
}

export const abilities = [
  {
    id: 1,
    name: "Bulletstorm",
    description: "-15% Cooldown",
    target: "self",
    duration: 15,
    effect(ctx) {
      let tower = ctx.tower;
      tower.stats.cooldown! *= 0.85;
      return tower;
    },
    price: 27_500,
    cooldown: 35,
  },
  {
    id: 4,
    name: "Bloodlust",
    description: "+200% Damage",
    target: "self",
    duration: 6,
    price: 40_000,
    cooldown: 40,
    effect: (ctx) => {
      let tower = ctx.tower;
      tower.stats.damage! *= 3;
      return tower;
    },
  },
  {
    id: 5,
    name: "Tactical Coordination",
    description: "+25% Damage, +15% Range",
    target: "towers_in_range",
    duration: 15,
    price: 180_000,
    cooldown: 60,
    effect: (ctx) => {
      // +25% dmg, +15% range
      return ctx.tower;
    },
  },
  {
    id: 6,
    name: "Virtual Mining",
    description: "Attacks 25 times",
    target: "enemies",
    duration: 25,
    effect(ctx) {
      // Attacks 25 times
      return ctx.tower;
    },
    price: 500,
    cooldown: 90,
  },
  {
    id: 8,
    name: "Enhanced Reflexes",
    description: "-30% Cooldown",
    target: "self",
    duration: 15,
    effect(ctx) {
      let tower = ctx.tower;
      tower.stats.cooldown! *= 0.7;
      return tower;
    },
    cooldown: 55,
    price: 75_000,
  },
  {
    id: 13,
    name: "Amazing Aim",
    description: "+40% Aim, +15% Cooldown",
    target: "self",
    duration: 35,
    effect(ctx) {
      let tower = ctx.tower;
      tower.stats.aim! *= 1.4;
      tower.stats.cooldown! *= 1.15;
      return tower;
    },
    price: 48_000,
    cooldown: 60,
  },
  {
    id: 16,
    name: "Bloodborn",
    description: "+300% Damage",
    target: "self",
    duration: 10,
    price: 80_000,
    effect: (ctx) => {
      let tower = ctx.tower;
      tower.stats.damage! *= 4;
      return tower;
    },
    cooldown: 999_999, // TODO: fill out
  },
  {
    id: 19,
    name: "Absolute Aim",
    description: "+55% Aim",
    target: "self",
    duration: 35,
    price: 96_000,
    effect: (ctx) => {
      let tower = ctx.tower;
      tower.stats.aim! *= 1.55;
      return tower;
    },
    cooldown: 60,
  },
  {
    id: 31,
    name: "Quantum Mechanics",
    description: "-90% Cooldown, +1,000% Purify",
    target: "self",
    duration: 10,
    price: 10_100_000,
    effect(ctx) {
      let tower = ctx.tower;
      tower.stats.cooldown! *= 0.1;
      tower.stats.purify! *= 10;
      return tower;
    },
    cooldown: 10,
  },
] satisfies Ability[];
