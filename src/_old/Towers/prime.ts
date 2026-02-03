import { type Tower } from '../../types';

// TODO: add stats
export const empyrean_jar_guard_eminence: Tower = [
  {
    damage: 16,
    crit_chance: 0.15,
    crit_dmg: 2,
    cooldown: 0.5,
    max_cooldown: 1,
    min_cooldown: 0.5,
    acceleration: 0.08,
    radius: 4,
    valor: 1.2,
    armor_destruction: 0.04,
    camo: true,
    soul_damage: 0.3,
    shield_dmg: 4,
    price: 2_250
  },
  {
    damage: 24,
    crit_chance: 0.15,
    crit_dmg: 2.5,
    cooldown: 0.9,
    max_cooldown: 0.9,
    min_cooldown: 0.45,
    acceleration: 0.08,
    radius: 4,
    valor: 1.5,
    armor_destruction: 0.04,
    camo: true,
    soul_damage: 0.3,
    shield_dmg: 6,
    price: 1_400
  },
  {},
  {},
  {},
  {
    // he does a jump cut here so who tf knows
    damage: 450,
    crit_chance: 0.25,
    crit_dmg: 3.6,
    cooldown: 0.8,
    max_cooldown: 0.8,
    min_cooldown: 0.4,
    acceleration: 0.16,
    radius: 8
    // yeah no idea
  },
  {
    // whatever the above is with the following:
    /*+1_150 Damage
        +0.6 critdmg,
        -0.12cd/mxcd
        -0.06mncd,
        +6.15valor
        +0.35soul
        price:233_940 */
  },
  {},
  {
    damage: 500_000,
    crit_chance: 0.25,
    crit_dmg: 10,
    cooldown: 4.1,
    max_cooldown: 0.68,
    min_cooldown: 0.34,
    acceleration: 0.16,
    radius: 8
    // jalksdjflkjslkadfj he didnt scroll down
  }
];
// TODO: add stats
export const phantom_killzone: Tower = [
  {
    damage: 260,
    crit_chance: 0.06,
    crit_dmg: 1.4,
    cooldown: 9,
    exclusion: 200,
    radius: 9,
    rupture: 0.36,
    rupture_duration: 7,
    shredding: 0.15,
    shredding_length: 7,
    valor: 0.45,
    shield_bypass: 0.4,
    armor_piercing: true,
    aim: 959, // it goes offscreen so need to check
    price: 4_225
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    //unsure of the path
    damage: 4_444_000,
    crit_chance: 0.13,
    crit_dmg: 3.4,
    cooldown: 19.1,
    exclusion: 200,
    radius: 36,
    rupture: 0.66,
    rupture_duration: 7,
    shredding: 0.25,
    shredding_length: 16,
    valor: 2.25,
    shield_bypass: 0.95,
    armor_piercing: true,
    camo: true,
    aim: 250
    //another stat after that but its cut off. maybe ibreak?
  }
];
// TODO: add stats
export const alien_raygunner: Tower = [
  {
    damage: 32,
    damage_cap: 999_999_999_999,
    min_dmg_increase: 0.3,
    max_dmg_increase: 6,
    crit_chance: 0.05,
    crit_dmg: 40,
    cooldown: 3.6,
    range: 65,
    armor_destruction: 0.12,
    aim: 75,
    shield_dmg: 15,
    price: 5_100
  },
  {},
  {},
  {},
  {},
  {},
  {}
];
// TODO: add stats
export const arcane_blizzard: Tower = [
  {
    damage: 8,
    cooldown: 18,
    range: 155,
    exclusion: 65,
    frostbite: 0.021,
    frost_time: 2.8,
    bliz_length: 4.5,
    bliz_radius: 14,
    shield_bypass: 0.15,
    shield_dmg: 0.05,
    price: 11_600
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    // unsure of path
    damage: 3_200,
    cooldown: 15,
    range: 210,
    exclusion: 55,
    frostbite: 0.035,
    frost_time: 4.4,
    bliz_length: 4,
    bliz_radius: 70,
    shield_bypass: 0.8,
    armor_piercing: true,
    camo: true,
    shield_dmg: 8
  }
];
// TODO: add stats
export const empyrean_jar_guard_alpha: Tower = [
  {
    damage: 16,
    crit_chance: 0.15,
    crit_dmg: 2,
    cooldown: 0.5,
    max_cooldown: 1,
    min_cooldown: 0.5,
    acceleration: 0.08,
    radius: 4,
    valor: 1.2,
    armor_destruction: 0.04,
    camo: true,
    soul_damage: 0.3,
    shield_dmg: 4,
    price: 2_250
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    // unknown on path, some level 7
    damage: 200_000,
    crit_chance: 0.25,
    crit_dmg: 8,
    cooldown: 2.55,
    max_cooldown: 5.1,
    min_cooldown: 2.55,
    acceleration: 0.24,
    radius: 8,
    valor: 8.7,
    armor_destruction: 0.08,
    camo: true,
    soul_damage: 0.9,
    shield_dmg: 300
  }
];
// TODO: add stats
export const empyrean_jar_guard_eminence_test: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const empyrean_jar_guard_omega: Tower = [
  {
    damage: 8,
    cooldown: 0.2,
    radius: 12,
    burst: 5,
    burst_cd: 3.4,
    rupture: 0.08,
    rupture_duration: 4,
    corrosion: 0.001,
    purify: 1.5,
    valor: 1.2,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.3,
    shield_dmg: 4,
    price: 2_250
  },
  {
    damage: 12,
    cooldown: 0.2,
    radius: 15,
    burst: 5,
    burst_cd: 3.2,
    rupture: 0.08,
    rupture_duration: 4.5,
    corrosion: 0.001,
    purify: 1.6,
    valor: 1.5,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.3,
    shield_dmg: 6,
    price: 1_400
  },
  {
    damage: 20,
    cooldown: 0.185,
    radius: 15,
    burst: 6,
    burst_cd: 3.2,
    rupture: 0.1,
    rupture_duration: 4.5,
    corrosion: 0.0012,
    purify: 1.7,
    valor: 1.95,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.4,
    shield_dmg: 6,
    price: 2_900
  },
  {
    damage: 65,
    cooldown: 0.185,
    radius: 18,
    burst: 7,
    burst_cd: 2.9,
    rupture: 0.1,
    rupture_duration: 5.5,
    corrosion: 0.0012,
    purify: 1.7,
    valor: 1.95,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.55,
    shield_dmg: 8,
    price: 12_530
  },
  {
    damage: 225,
    cooldown: 0.14,
    radius: 18,
    burst: 8,
    burst_cd: 2.9,
    rupture: 0.12,
    rupture_duration: 5.5,
    corrosion: 0.0015,
    purify: 2,
    valor: 2.55,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.55,
    shield_dmg: 10,
    price: 54_140
  },
  {
    damage: 800,
    cooldown: 0.14,
    radius: 24,
    burst: 8,
    burst_cd: 2.6,
    rupture: 0.14,
    rupture_duration: 6.5,
    corrosion: 0.002,
    purify: 2,
    valor: 8.7,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.9,
    shield_dmg: 10,
    price: 233_940
  },
  {
    damage: 24_000,
    cooldown: 0.35,
    radius: 60,
    burst: 8,
    burst_cd: 15.35,
    rupture: 0.5,
    rupture_duration: 6.5,
    corrosion: 0.002,
    purify: 2,
    valor: 8.7,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.9,
    shield_dmg: 160,
    price: 3_676_500
  },
  {
    damage: 5_250,
    cooldown: 0.04,
    radius: 24,
    burst: 3,
    burst_cd: 0.42,
    rupture: 0.14,
    rupture_duration: 6.5,
    corrosion: 0.002,
    purify: 2,
    valor: 8.7,
    armor_piercing: true,
    camo: true,
    soul_damage: 0.9,
    shield_dmg: 16,
    price: 5_805_000
  }
];
// TODO: add stats
export const liferender: Tower = [
  {
    damage: 75,
    cooldown: 1,
    max_cooldown: 7.5,
    min_cooldown: 1,
    acceleration: 0.15,
    range: 150,
    bleed: 20,
    bleed_increase: 0.00375,
    purify: 0.8,
    boss_slayer: 0.8,
    shield_dmg: 3,
    price: 9_999
  },
  {},
  {},
  {},
  {},
  {},
  {}
];
// TODO: add stats
export const limeade_stand: Tower = [
  {
    income: 12,
    cooldown: 4,
    range: 55,
    bounty_amp: 0.05,
    bounty_add: 2,
    cooldown_buff: 0.05,
    price: 1_380
  },
  {
    income: 20,
    cooldown: 4,
    range: 65,
    bounty_amp: 0.06,
    bounty_add: 4,
    cooldown_buff: 0.05,
    price: 765
  },
  {
    income: 32,
    cooldown: 3.5,
    range: 65,
    bounty_amp: 0.075,
    bounty_add: 8,
    cooldown_buff: 0.075,
    price: 1_660
  },
  {
    income: 80,
    cooldown: 3.5,
    range: 75,
    bounty_amp: 0.075,
    bounty_add: 20,
    damage_buff: 0.1,
    cooldown_buff: 0.075,
    price: 5_525
  },
  {
    income: 200,
    cooldown: 3,
    range: 75,
    bounty_amp: 0.1,
    bounty_add: 50,
    damage_buff: 0.15,
    cooldown_buff: 0.075,
    price: 18_360
  },

  {
    income: 480,
    cooldown: 3,
    range: 85,
    bounty_amp: 0.1,
    bounty_add: 130,
    damage_buff: 0.15,
    cooldown_buff: 0.1,
    price: 61_200
  },
  {
    income: 2_600,
    cooldown: 1.5,
    range: 115,
    bounty_amp: 0.16,
    bounty_add: 1_500,
    damage_buff: 0.15,
    cooldown_buff: 0.1,
    price: 660_450
  },
  {
    income: 6_400,
    cooldown: 3,
    range: 90,
    bounty_amp: 0.1,
    bounty_add: 130,
    damage_buff: 0.25,
    cooldown_buff: 0.175,
    price: 754_800
  },
  {
    income: 8_000,
    cooldown: 3,
    range: 135,
    bounty_amp: 0.1,
    bounty_add: 1_800,
    damage_buff: 0.35,
    cooldown_buff: 0.1,
    price: 849_150
  }
];
// TODO: add stats
export const luxurious_festive_tree_glorious: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const luxurious_festive_tree_majestic: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const phantom_killzone_test: Tower = [{}, {}, {}, {}, {}, {}, {}];
