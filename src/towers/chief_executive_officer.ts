// TODO: Recheck stats, esp. since there was a large rebalance AND
// get raw upgrade price (before reduction)
import { TowerRarity, TowerType, type Tower } from "../types";

export const chief_executive_officer: Tower = {
  id: "chief_executive_officer",
  name: "Chief Executive Officer",
  rarity: TowerRarity.Exalted,
  type: [TowerType.UNKNOWN_TYPE],
  variantOf: "executive",
  levels: [
    { level: 1, price: 9_750, stats: { range: 40, upgrade_reduction: 0.075 } },
    { level: 2, price: 5_088, stats: { range: 50, upgrade_reduction: 0.075 } },
    { level: 3, price: 10_308, stats: { range: 50, upgrade_reduction: 0.1 } },
    {
      level: 4,
      price: 37_678,
      stats: {
        damage: 20,
        cooldown: 0.09,
        range: 60,
        execution: 0.25,
        upgrade_reduction: 0.1,
      },
    },
    {
      level: 5,
      price: 129_799,
      stats: {
        damage: 50,
        cooldown: 0.09,
        range: 60,
        execution: 0.25,
        upgrade_reduction: 0.125,
      },
    },
    {
      level: 6,
      price: 464_255,
      stats: {
        damage: 150,
        cooldown: 0.08,
        range: 65,
        execution: 0.4,
        upgrade_reduction: 0.125,
        range_buff: 0.15,
        price: 464255,
      },
    },
  ],
  paths: [
    {
      id: "a",
      level: 7,
      price: 2_885_080,
      stats: {
        damage: 1500,
        cooldown: 0.08,
        range: 100,
        execution: 0.85,
        upgrade_reduction: 0.125,
        range_buff: 0.25,
      },
    },
    {
      level: 7,
      id: "a",
      price: 3677481,
      stats: { range: 65, upgrade_reduction: 0.275, range_buff: 0.15 },
    },
  ],
};
