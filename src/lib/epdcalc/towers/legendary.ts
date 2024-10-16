import { type Tower } from '../types';

export const mystic_vaporizer: Tower = [
  {
    damage: 4,
    damage_increase: 6,
    cooldown: 0.5,
    max_cooldown: 0.4,
    min_cooldown: 0.5,
    acceleration: 0.12,
    range: 110,
    stun: 1,
    armor_destruction: 0.45,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 11_111
  },
  {
    damage: 4,
    damage_increase: 6,
    cooldown: 0.5,
    max_cooldown: 1.6,
    min_cooldown: 0.5,
    acceleration: 0.12,
    range: 110,
    stun: 1,
    armor_destruction: 0.45,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 11_111
  },
  {
    damage: 15,
    damage_increase: 20,
    cooldown: 0.5,
    max_cooldown: 1.6,
    min_cooldown: 0.5,
    acceleration: 0.2,
    range: 150,
    stun: 1,
    armor_destruction: 0.6,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 22_222
  },
  {
    damage: 60,
    damage_increase: 23,
    cooldown: 0.425,
    max_cooldown: 1.6,
    min_cooldown: 0.425,
    acceleration: 0.2,
    range: 150,
    stun: 1,
    armor_destruction: 0.65,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 33_333
  },
  {
    damage: 100,
    damage_increase: 75,
    cooldown: 0.425,
    max_cooldown: 1.6,
    min_cooldown: 0.425,
    acceleration: 0.2,
    range: 200,
    stun: 1,
    armor_destruction: 0.65,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 99_999
  },
  {
    damage: 1_000,
    damage_increase: 500,
    cooldown: 0.2,
    max_cooldown: 1.6,
    min_cooldown: 0.2,
    acceleration: 0.18,
    range: 200,
    stun: 1,
    armor_destruction: 0.75,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 666_000
  },
  {
    damage: 800_000,
    damage_increase: 400_000,
    cooldown: 1.2,
    max_cooldown: 1.6,
    min_cooldown: 1.2,
    acceleration: 0.3,
    range: 666,
    stun: 1,
    armor_destruction: 0.75,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 6_666_666
  },
  {
    damage: 250_000,
    damage_increase: 100_000,
    cooldown: 0.025,
    max_cooldown: 0.005,
    min_cooldown: 0.025,
    acceleration: 0.18,
    range: 200,
    stun: 1,
    armor_destruction: 0.75,
    camo: true,
    aim: 1_350_000_000,
    shield_dmg: 25,
    price: 9_999_999
  }
];
export const phase_turret: Tower = [
  {
    damage: 27,
    crit_chance: 0.08,
    crit_dmg: 90,
    cooldown: 0.4,
    range: 150,
    targeting_rate: 0.5,
    radius: 6,
    burst: 8,
    burst_cd: 2.4,
    bleed: 2,
    armor_destruction: 0.03,
    shield_bypass: 0.65,
    camo: true,
    aim: 999,
    price: 16_900
  },
  {
    damage: 38,
    crit_chance: 0.1,
    crit_dmg: 103.5,
    cooldown: 0.375,
    range: 180,
    targeting_rate: 0.5,
    radius: 6,
    burst: 10,
    burst_cd: 2.4,
    bleed: 2,
    armor_destruction: 0.04,
    shield_bypass: 0.65,
    camo: true,
    aim: 999,
    price: 11_500
  },
  {
    damage: 68,
    crit_chance: 0.1,
    crit_dmg: 126,
    cooldown: 0.375,
    range: 180,
    targeting_rate: 0.6,
    radius: 7,
    burst: 10,
    burst_cd: 2,
    bleed: 3,
    armor_destruction: 0.04,
    shield_bypass: 0.75,
    camo: true,
    aim: 999,
    price: 21_000
  },
  {
    damage: 173,
    crit_chance: 0.12,
    crit_dmg: 153,
    cooldown: 0.325,
    range: 210,
    targeting_rate: 0.6,
    radius: 7,
    burst: 12,
    burst_cd: 2,
    bleed: 8,
    armor_destruction: 0.04,
    shield_bypass: 0.75,
    camo: true,
    aim: 999,
    price: 102_500
  },
  {
    damage: 525,
    crit_chance: 0.15,
    crit_dmg: 180,
    cooldown: 0.325,
    range: 210,
    targeting_rate: 0.75,
    radius: 8,
    burst: 12,
    burst_cd: 1.7,
    bleed: 18,
    armor_destruction: 0.04,
    shield_bypass: 0.85,
    camo: true,
    aim: 999,
    price: 500_000
  },
  {
    damage: 1_500,
    crit_chance: 0.15,
    crit_dmg: 225,
    cooldown: 0.25,
    range: 250,
    targeting_rate: 0.75,
    radius: 8,
    burst: 15,
    burst_cd: 1.7,
    bleed: 45,
    armor_destruction: 0.05,
    shield_bypass: 0.85,
    camo: true,
    aim: 999,
    price: 2_440_000
  },
  {
    damage: 9_000,
    crit_chance: 0.15,
    crit_dmg: 540,
    cooldown: 0.25,
    range: 330,
    targeting_rate: 1,
    radius: 12,
    burst: 30,
    burst_cd: 1.7,
    bleed: 300,
    armor_destruction: 0.05,
    shield_bypass: 0.95,
    camo: true,
    aim: 999,
    price: 40_630_000
  },
  {
    damage: 4_050,
    crit_chance: 0.28,
    crit_dmg: 225,
    cooldown: 0.09,
    range: 250,
    targeting_rate: 2.25,
    radius: 8,
    burst: 15,
    burst_cd: 0.5,
    bleed: 120,
    armor_destruction: 0.05,
    shield_bypass: 0.85,
    camo: true,
    aim: 999,
    price: 46_050_000
  }
];
export const samurai_sentinel: Tower = [
  {
    damage: 4,
    cooldown: 0.1,
    range: 25,
    radius: 4,
    purify: 3,
    intimidation: 0.2,
    armor_piercing: true,
    shield_dmg: 1,
    price: 999
  },
  {
    damage: 10,
    cooldown: 0.1,
    range: 25,
    radius: 4,
    purify: 2,
    intimidation: 0.2,
    armor_piercing: true,
    shield_dmg: 2,
    price: 1_450
  },
  {
    damage: 50,
    cooldown: 0.2,
    range: 25,
    radius: 8,
    purify: 2,
    intimidation: 0.2,
    armor_piercing: true,
    shield_dmg: 3,
    price: 2_480
  },
  {
    damage: 600,
    cooldown: 0.5,
    range: 25,
    radius: 8,
    purify: 4,
    intimidation: 0.2,
    armor_piercing: true,
    shield_dmg: 6,
    price: 4_670
  },
  {
    damage: 4_563,
    cooldown: 1.5,
    range: 25,
    radius: 8,
    purify: 4,
    paralyze: 0.1,
    intimidation: 1,
    armor_piercing: true,
    camo: true,
    shield_dmg: 30,
    price: 12_847
  },
  {
    damage: 8_975,
    cooldown: 2,
    range: 25,
    radius: 8,
    purify: 5,
    paralyze: 0.1,
    intimidation: 1,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.2,
    shield_dmg: 45,
    price: 45_624
  },
  {
    damage: 56_384,
    cooldown: 2,
    range: 40,
    radius: 8,
    purify: 5,
    paralyze: 0.2,
    shredding: 0.5,
    shredding_length: 4,
    execution: 4,
    intimidation: 6,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.2,
    shield_dmg: 615,
    price: 3_976_315
  },
  {
    damage: 4_532,
    cooldown: 0.05,
    crit_chance: 0.1,
    crit_dmg: 4,
    range: 25,
    radius: 8,
    purify: 10,
    paralyze: 0.1,
    intimidation: 0.5,
    valor: 2,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.2,
    shield_dmg: 120,
    price: 6_354_215
  },
  {
    damage: 567_423,
    crit_chance: 0.02,
    crit_dmg: 40,
    cooldown: 1,
    range: 50,
    radius: 40,
    purify: 20,
    paralyze: 0.4,
    intimidation: 1,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.2,
    shield_dmg: 2_465,
    oblivion: 6_300,
    price: 6_354_215_478
  }
];

// TODO: add stats
export const sanctified_stryker: Tower = [
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  },
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  },
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  },
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  },
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  },
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  },
  {
    damage: 75,
    cooldown: 10,
    exclusion: 180,
    radius: 65,
    inaccuracy: 100,
    rad_strength: 0.8,
    rad_length: 4,
    shredding: 0.08,
    shredding_length: 1,
    armor_destruction: 1,
    armor_piercing: true,
    camo: true,
    price: 10_400
  }
];

export const zero_two_supreme: Tower = [
  {
    damage: 2,
    crit_chance: 0.15,
    crit_dmg: 1,
    cooldown: 0.18,
    range: 100,
    bleed: 1,
    purify: 4.4,
    hollow_point: 1.5,
    execution: 1.2,
    shield_dmg: 0.3,
    price: 3_800
  },
  {
    damage: 3,
    crit_chance: 0.15,
    crit_dmg: 1.25,
    cooldown: 0.18,
    range: 115,
    bleed: 2,
    purify: 4.4,
    hollow_point: 2,
    execution: 1.2,
    shield_dmg: 0.3,
    price: 1_700
  },
  {
    damage: 6,
    crit_chance: 0.2,
    crit_dmg: 1.25,
    cooldown: 0.18,
    range: 120,
    bleed: 3,
    purify: 4.4,
    hollow_point: 2,
    execution: 1.5,
    shield_dmg: 0.3,
    price: 4_600
  },
  {
    damage: 15,
    crit_chance: 0.25,
    crit_dmg: 1.65,
    cooldown: 0.18,
    range: 120,
    bleed: 6,
    purify: 4.4,
    hollow_point: 3.5,
    execution: 1.5,
    shield_dmg: 0.3,
    price: 21_700
  },
  {
    damage: 40,
    crit_chance: 0.25,
    crit_dmg: 2.25,
    cooldown: 0.15,
    range: 140,
    bleed: 15,
    purify: 4.4,
    hollow_point: 3.5,
    execution: 1.9,
    shield_dmg: 0.3,
    price: 78_500
  },
  {
    damage: 100,
    crit_chance: 0.35,
    crit_dmg: 2.25,
    cooldown: 0.15,
    range: 165,
    bleed: 30,
    purify: 4.4,
    hollow_point: 3.5,
    execution: 2.7,
    shield_dmg: 0.3,
    camo: true,
    price: 294_000
  },
  {
    damage: 7_500,
    crit_chance: 0.35,
    crit_dmg: 54,
    cooldown: 0.15,
    range: 165,
    bleed: 900,
    purify: 4.4,
    hollow_point: 3.5,
    execution: 25,
    camo: true,
    shield_dmg: 0.3,
    price: 2_002_002
  },
  {
    damage: 2_500,
    crit_chance: 0.75,
    crit_dmg: 2.25,
    cooldown: 0.09,
    range: 205,
    bleed: 20_000,
    purify: 4.4,
    hollow_point: 5,
    execution: 2.7,
    shield_dmg: 0.3,
    camo: true,
    price: 3_002_002
  }
];
