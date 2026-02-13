// TODO: Check ability
import { TowerRarity, TowerType, type Tower } from "../types";
export const huge_heavy: Tower = {
  id: "huge_heavy",
  name: "HUGE Heavy",
  rarity: TowerRarity.Unknown,
  type: [TowerType.Offense],
  levels: [
    {
      level: 1,
      price: 550_000,
      stats: {
        damage: 400,
        cooldown: 0.12,
        range: 140,
        hollow_point: 1.5,
        shield_dmg: 0.25,
      },
    },
    {
      level: 2,
      price: 240_000,
      stats: {
        damage: 400,
        cooldown: 0.12,
        range: 165,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
    {
      level: 3,
      price: 650_000,
      stats: {
        damage: 900,
        cooldown: 0.12,
        range: 165,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
    {
      level: 4,
      price: 2_000_000,
      stats: {
        damage: 2_000,
        cooldown: 0.12,
        range: 175,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
    {
      level: 5,
      price: 7_500_000,
      stats: {
        damage: 5_000,
        cooldown: 0.08,
        range: 225,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
    {
      level: 6,
      price: 28_000_000,
      stats: {
        damage: 12_000,
        cooldown: 0.08,
        range: 250,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
  ],
  paths: [
    {
      id: "a",
      level: 7,
      price: 160_000_000,
      stats: {
        damage: 80_000,
        cooldown: 0.1,
        range: 315,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
    {
      id: "b",
      level: 7,
      price: 210_000_000,
      stats: {
        damage: 50_000,
        cooldown: 0.05,
        range: 250,
        hollow_point: 1.5,
        camo: true,
        shield_dmg: 0.25,
      },
    },
  ],
};
