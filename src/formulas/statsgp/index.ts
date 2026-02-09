import { TowerInstance } from "../../instance";

interface Formula {
  id: string;
  label: string;
  canCompute(tower: TowerInstance): boolean;
  compute(tower: TowerInstance): number | null;
}

export const Formulas = [
  {
    id: "bleedDps",
    label: "Bleed DPS",
    canCompute: (t) => t.has("bleed"),
    compute: (t) => t.getStatNumber("bleed")! / 5,
  },
  {
    id: "DPS",
    label: "DPS",
    canCompute: (t) => t.has("damage") && t.has("cooldown"),
    compute: (t) => t.getStatNumber("damage")! / t.getStatNumber("cooldown")!,
  },
  {
    id: "DPM",
    label: "DPM",
    canCompute: (t) => t.has("damage") && t.has("cooldown"),
    compute: (t) =>
      (t.getStatNumber("damage")! / t.getStatNumber("cooldown")!) * 60,
  },
  {
    id: "UltimateDPS",
    label: "Ultimate DPS",
    canCompute: (t) =>
      t.has("damage") && t.has("cooldown") && t.has("damage_cap"),
    compute: (t) => {
      const damage = t.getStatNumber("damage")!;
      const cooldown = t.getStatNumber("cooldown")!;
      const damageCap = t.getStatNumber("damage_cap")!;
      const maximumDamage = damage * damageCap;
      return maximumDamage / cooldown;
    },
  },
  {
    id: "maxCharge",
    label: "Max. Charge",
    canCompute: (t) =>
      t.has("damage_cap") && t.has("min_dmg_increase") && t.has("cooldown"),
    compute: (t) => {
      const damageCap = t.getStatNumber("damage_cap")!;
      const minDmgIncrease = t.getStatNumber("min_dmg_increase")!;
      const cooldown = t.getStatNumber("cooldown")!;
      const periodsToCap = Math.ceil(
        Math.log(damageCap) / Math.log(1 + minDmgIncrease),
      );
      return periodsToCap * cooldown;
    },
  },
  {
    id: "avgCharge",
    label: "Avg. Charge",
    canCompute: (t) =>
      t.has("damage_cap") &&
      t.has("min_dmg_increase") &&
      t.has("max_dmg_increase") &&
      t.has("cooldown"),
    compute: (t) => {
      const damageCap = t.getStatNumber("damage_cap")!;
      const avgDmgIncrease =
        (t.getStatNumber("min_dmg_increase")! +
          t.getStatNumber("max_dmg_increase")!) /
        2;
      const cooldown = t.getStatNumber("cooldown")!;
      const periodsToCap = Math.ceil(
        Math.log(damageCap) / Math.log(1 + avgDmgIncrease),
      );
      const totalChargeTime = periodsToCap * cooldown;
      return totalChargeTime / 2;
    },
  },
  {
    id: "minCharge",
    label: "Min. Charge",
    canCompute: (t) =>
      t.has("damage_cap") && t.has("max_dmg_increase") && t.has("cooldown"),
    compute: (t) => {
      const damageCap = t.getStatNumber("damage_cap")!;
      const maxDmgIncrease = t.getStatNumber("max_dmg_increase")!;
      const cooldown = t.getStatNumber("cooldown")!;
      const periodsToCap = Math.ceil(
        Math.log(damageCap) / Math.log(1 + maxDmgIncrease),
      );
      return periodsToCap * cooldown;
    },
  },
  {
    id: "spawnDPS",
    label: "Spawn DPS",
    canCompute: (t) => t.has("spawns_damage") && t.has("spawns_cd"),
    compute: (t) =>
      t.getStatNumber("spawns_damage")! / t.getStatNumber("spawns_cooldown")!,
  },
  {
    id: "spawnDPM",
    label: "Spawn DPM",
    canCompute: (t) => t.has("spawns_damage") && t.has("spawns_cd"),
    compute: (t) =>
      (t.getStatNumber("spawns_damage")! /
        t.getStatNumber("spawns_cooldown")!) *
      60,
  },
  {
    id: "maxDPS",
    label: "Max DPS",
    canCompute: (t) =>
      t.has("spawns_damage") && t.has("spawns_cd") && t.has("max_spawns"),
    compute: (t) =>
      (t.getStatNumber("spawns_damage")! /
        t.getStatNumber("spawns_cooldown")!) *
      t.getStatNumber("max_spawns")!,
  },
  {
    id: "maxDPM",
    label: "Max DPM",
    canCompute: (t) =>
      t.has("spawns_damage") && t.has("spawns_cd") && t.has("max_spawns"),
    compute: (t) =>
      (t.getStatNumber("spawns_damage")! /
        t.getStatNumber("spawns_cooldown")!) *
      t.getStatNumber("max_spawns")! *
      60,
  },
  {
    id: "costPerSpawnDps",
    label: "Cost/Spawn DPS",
    canCompute: (t) =>
      t.has("spawns_damage") &&
      t.has("spawns_cd") &&
      t.getTotalPrice() !== null,
    compute: (t) =>
      t.getTotalPrice()! /
      (t.getStatNumber("spawns_damage")! / t.getStatNumber("spawns_cooldown")!),
  },
  {
    id: "costPerSpawnDpm",
    label: "Cost/Spawn DPM",
    canCompute: (t) =>
      t.has("spawns_damage") &&
      t.has("spawns_cd") &&
      t.getTotalPrice() !== null,
    compute: (t) =>
      (t.getTotalPrice()! /
        (t.getStatNumber("spawns_damage")! /
          t.getStatNumber("spawns_cooldown")!)) *
      60,
  },
  {
    // NOTE: Base DPS appears on every vaporizer variant
    // This formula seems to be off?
    // dmg=5500, mx=0.0008, expect(6.8M) but get 6_875_000 -- rounding error?
    id: "baseDps",
    label: "Base DPS",
    canCompute: (t) => t.has("damage") && t.has("max_cooldown"),
    compute: (t) =>
      t.getStatNumber("damage")! / t.getStatNumber("max_cooldown")!,
  },
  // no idea how this is calculated
  // {
  //   id: "dpsMinutePlus",
  //   label: "DPS (60s+)",
  //   canCompute: (t) =>
  //     t.has("damage") && t.has("damage_increase") && t.has("min_cooldown"),
  // },
] satisfies Formula[];
