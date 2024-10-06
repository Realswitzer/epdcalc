import { type Tower } from '../types';

export const visible_man: Tower = [
	{
		damage: 14,
		cooldown: 0.35,
		range: 105,
		all_seeing: 6.6,
		shield_dmg: 8,
		price: 10_400
	},
	{
		damage: 14,
		cooldown: 0.1,
		range: 130,
		all_seeing: 12.2,
		shield_dmg: 8,
		price: 1_040
	},
	{
		damage: 14,
		cooldown: 0.1,
		range: 130,
		all_seeing: 15,
		shield_dmg: 8,
		price: 2_520
	},
	{
		damage: 500,
		cooldown: 0.1,
		range: 500,
		all_seeing: 15,
		shield_dmg: 8,
		price: 10_400
	},
	{
		damage: 1_000,
		cooldown: 0.1,
		range: 850,
		all_seeing: 20,
		execution: 15,
		shield_dmg: 8,
		price: 44_720
	},
	{
		damage: 1_000,
		cooldown: 0.1,
		range: 850,
		all_seeing: 50,
		execution: 15,
		shield_dmg: 8,
		price: 202_400
	},
	{
		damage: 1_000_000,
		cooldown: 0.05,
		range: 850,
		all_seeing: 250,
		execution: 35,
		shield_dmg: 8,
		price: 2_592_000
	},
	{
		damage: 3_600_000,
		cooldown: 0.1,
		range: 250,
		all_seeing: 25,
		execution: 15,
		shield_dmg: 8,
		price: 3_088_000
	}
];

export const visible_man_postnerf: Tower = [
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{
		damage: 50_000,
		cooldown: 0.1,
		range: 400,
		all_seeing: 100,
		armor_piercing: true,
		camo: true,
		aim: 400,
		shield_dmg: 8
	}
];

export const sunshadow_operative: Tower = [
	{
		damage: 200,
		cooldown: 0.1,
		range: 40,
		burst: 200,
		burst_cd: 5,
		valor: 0.05,
		camo: true,
		aim: 88_888_888,
		price: 20_000
	},
	{
		damage: 200,
		cooldown: 0.1,
		range: 45,
		burst: 200,
		burst_cd: 5,
		valor: 1.9,
		scald: 0.25,
		camo: true,
		aim: 88_888_888,
		price: 90_000
	},
	{
		damage: 10_000,
		cooldown: 0.1,
		range: 45,
		burst: 200,
		burst_cd: 5,
		valor: 2.22,
		scald: 0.25,
		camo: true,
		aim: 88_888_888,
		price: 153_742
	},
	{
		damage: 50_000,
		cooldown: 0.1,
		range: 50,
		burst: 200,
		burst_cd: 5,
		valor: 5,
		scald: 0.25,
		camo: true,
		aim: 88_888_888,
		price: 974_574
	},
	{
		damage: 100_000,
		cooldown: 0.1,
		range: 50,
		burst: 200,
		burst_cd: 5,
		boss_slayer: 10,
		valor: 5,
		scald: 0.25,
		camo: true,
		aim: 88_888_888,
		price: 974_574
	},
	{
		damage: 100_000,
		cooldown: 0.1,
		range: 50,
		burst: 200,
		burst_cd: 5,
		boss_slayer: 10,
		valor: 10,
		scald: 0.25,
		camo: true,
		aim: 88_888_888,
		price: 5_699_674
	},
	{
		damage: 1_000_000,
		cooldown: 0.1,
		range: 50,
		burst: 2_000_000,
		burst_cd: 5,
		boss_slayer: 10,
		valor: 55.55,
		scald: 1,
		camo: true,
		aim: 88_888_888,
		price: 16_350_000
	},
	{
		damage: 1_000_000,
		cooldown: 0.1,
		range: 50,
		burst: 200,
		burst_cd: 5,
		boss_slayer: 10,
		valor: 10,
		scald: 5,
		camo: true,
		aim: 88_888_888,
		price: 17_900_000
	}
];

// TODO: add stats
export const cursed_blizzard: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const lord_lucifer: Tower = [
	{
		damage: 25,
		crit_chance: 0.25,
		crit_dmg: 0.5,
		cooldown: 4,
		range: 175,
		exclusion: 60,
		radius: 10,
		burn_damage: 100,
		burn_time: 3,
		departure: 0.25,
		aim: 195,
		shield_dmg: 0.66,
		price: 4_444
	},
	{
		damage: 25,
		crit_chance: 0.3,
		crit_dmg: 0.6,
		cooldown: 4,
		range: 185,
		exclusion: 60,
		radius: 12,
		burn_damage: 100,
		burn_time: 4,
		departure: 0.35,
		aim: 195,
		shield_dmg: 0.66,
		price: 2_666
	},
	{},
	{
		damage: 150,
		crit_chance: 0.35,
		crit_dmg: 1,
		cooldown: 3.55,
		range: 200,
		exclusion: 55,
		radius: 16,
		burn_damage: 500
		//...
	},
	{
		damage: 380,
		crit_chance: 0.4,
		crit_dmg: 1.25,
		cooldown: 3.1,
		range: 200,
		exclusion: 55,
		radius: 16,
		burn_damage: 1_200,
		// more stats...
		armor_piercing: true
	},
	{
		/* level 4 but
    +520dmg
    +.35cd
    +40range
    -5excl
    +4radius
    +1_800brndmg
    +1brndur
    price: 543_210 i think*/
		damage: 900,
		crit_chance: 0.4,
		crit_dmg: 1.6,
		cooldown: 3.1,
		range: 240,
		exclusion: 50,
		radius: 20,
		burn_damage: 3_000
	},
	{
		/*level 6 but
    +1_766 damage
    +.26cr
    -0.7cd
    +130_330brndmg
    -4brndur
    +"instant reflexes" */
	},
	{
		damage: 6_666,
		crit_chance: 0.4,
		crit_dmg: 2.88,
		cooldown: 3.1,
		range: 300,
		exclusion: 50,
		radius: 28,
		burn_damage: 58_330,
		burn_time: 7,
		departure: 0.35,
		armor_piercing: true,
		camo: true,
		aim: 195,
		shield_dmg: 0.66,
		price: 6_666_666
	}
];
// TODO: add stats
export const equinox_executive: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const blazing_apollo: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const severe_scorcher: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const strawberry_lemonade_stand: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const terroret: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const solar_vaporizer: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const radiant_raygunner: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const molten_turret: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const two_zero: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const hallowed_stryker: Tower = [
	{
		damage: 75,
		crit_chance: 0.3,
		crit_dmg: 2.5,
		cooldown: 11.25,
		exclusion: 80,
		radius: 65,
		inaccuracy: 50,
		rad_strength: 0.48,
		rad_length: 1.2,
		purify: 1.8,
		shield_bypass: 0.7,
		armor_piercing: true,
		camo: true,
		price: 5_555
	},
	{},
	{},
	{},
	{},
	{},
	{},
	{
		// i dont know the path.
		damage: 5_000,
		crit_chance: 0.85,
		crit_dmg: 5.5,
		cooldown: 6.375,
		exclusion: 30,
		radius: 85,
		inaccuracy: 15,
		rad_strength: 1.44
		// or the stats. i guess.
	}
];
// TODO: add stats
export const summer_zero_two: Tower = [
	{
		damage: 2,
		cooldown: 0.18,
		range: 90,
		bleed: 1,
		shredding: 0.08,
		shredding_length: 0.36,
		hollow_point: 3,
		execution: 1.2,
		damage_buff: 0.1,
		cooldown_buff: 0.05,
		aim: 120,
		shield_dmg: 0.3,
		price: 6_420
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const virtual_turret: Tower = [
	{
		damage: 36,
		crit_chance: 0.15,
		crit_dmg: 10,
		cooldown: 0.8,
		range: 150,
		targeting_rate: 0.2,
		radius: 6,
		bleed: 1,
		armor_piercing: true,
		soul_damage: 0.5,
		aim: 199,
		shield_dmg: 3,
		price: 34_250
	},
	{},
	{},
	{},
	{},
	{},
	{
		damage: 12_000,
		crit_chance: 0.3,
		crit_dmg: 60,
		cooldown: 0.5,
		range: 330,
		targeting_rate: 0.4,
		radius: 12,
		bleed: 200
		// need to rewatch this part to hopefully get stats
	}
];
// TODO: add stats
export const lord_lucifer_true: Tower = [
	{
		damage: 25,
		crit_chance: 0.31,
		crit_dmg: 0.63,
		cooldown: 4,
		range: 263,
		exclusion: 60,
		radius: 10,
		burn_damage: 100,
		burn_time: 3,
		departure: 0.25,
		aim: 195,
		shield_dmg: 0.66
	},

	{
		damage: 25,
		crit_chance: 0.38,
		crit_dmg: 0.75,
		cooldown: 4,
		range: 278,
		exclusion: 60,
		radius: 12,
		burn_damage: 100,
		burn_time: 4,
		departure: 0.45,
		aim: 195,
		shield_dmg: 0.66
	},
	{},
	{},
	{},
	{},
	{},
	{
		damage: 6_666,
		crit_chance: 0.5,
		crit_dmg: 3.6,
		cooldown: 3.1,
		range: 450,
		exclusion: 50,
		radius: 28,
		burn_damage: 58_330,
		burn_time: 7,
		departure: 0.7,
		armor_piercing: true,
		camo: true,
		aim: 245,
		shield_dmg: 0.66
		// price: 1e10000
	}
];
// TODO: add stats
export const archangel_lucifer_sublime: Tower = [
	{
		damage: 75,
		cooldown: 8,
		range: 175,
		exclusion: 60,
		radius: 5,
		burn_damage: 20,
		burn_time: 10,
		purify: 2.6,
		valor: 0.45,
		shield_dmg: 0.25,
		price: 4_444
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const archangel_lucifer_divine: Tower = [
	{
		damage: 75,
		cooldown: 8,
		range: 175,
		exclusion: 60,
		radius: 5,
		burn_damage: 20,
		burn_time: 10,
		hollow_point: 2.6,
		valor: 0.45,
		aim: 165,
		shield_dmg: 2,
		price: 4_444
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const shrine_of_tartarus: Tower = [
	{
		damage: 3,
		beams: 4,
		cooldown: 1.5,
		radius: 9,
		rad_strength: 0.02,
		rad_length: 7.5,
		departure: 8,
		armor_piercing: true,
		camo: true,
		shield_dmg: 3,
		price: 13_400
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const jar_guard_precursor: Tower = [
	{
		damage: 8,
		cooldown: 1.5,
		range: 30,
		exclusion: 10,
		radius: 4,
		valor: 0.8,
		armor_destruction: 0.08,
		camo: true,
		soul_damage: 0.3,
		aim: 165,
		shield_dmg: 4,
		price: 2_400
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const jar_guard_progenitor: Tower = [
	{
		damage: 4,
		cooldown: 0.25,
		max_cooldown: 0.5,
		min_cooldown: 0.25,
		acceleration: 0.08,
		range: 75,
		exclusion: 20,
		valor: 0.8,
		camo: true,
		soul_damage: 0.3,
		aim: 135,
		shield_dmg: 2,
		price: 2_700
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const jar_guard_singularity: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const jar_guard_origin: Tower = [
	{
		damage: 8,
		cooldown: 0.2,
		range: 100,
		exclusion: 20,
		burst: 5,
		burst_cd: 3.4,
		corrosion: 0.003,
		valor: 0.8,
		camo: true,
		soul_damage: 0.3,
		aim: 150,
		shield_dmg: 2,
		price: 3_350
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const jar_guard_null: Tower = [
	{
		damage: 8,
		cooldown: 5,
		range: 75,
		exclusion: 20,
		radius: 20,
		rupture: 0.25,
		rupture_duration: 4,
		purify: 1.35,
		valor: 0.8,
		camo: true,
		soul_damage: 0.3,
		shield_dmg: 2,
		price: 2_150
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const jar_guard_shiniest: Tower = [
	{
		damage: 4,
		cooldown: 0.25,
		range: 75,
		exclusion: 20,
		valor: 1.2,
		camo: true,
		soul_damage: 0.3,
		cash_conv: 1,
		aim: 150,
		shield_dmg: 2,
		price: 9_000
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const cursed_blizzard_fake: Tower = [
	{
		damage: 8,
		cooldown: 24,
		range: 190,
		exclusion: 100,
		bliz_length: 4.5,
		bliz_radius: 25,
		shredding: 0.025,
		shredding_length: 6,
		purify: 1.2,
		armor_destruction: 0.03,
		shield_dmg: 0.5,
		price: 10_600
	},
	{},
	{},
	{},
	{},
	{},
	{},
	{
		damage: 900,
		cooldown: 12,
		range: 240,
		exclusion: 75,
		bliz_length: 8,
		bliz_radius: 40,
		shredding: 0.065,
		shredding_length: 9,
		purify: 2.2,
		armor_destruction: 0.05,
		camo: true,
		shield_dmg: 0.5
	}
];
// TODO: add stats
export const winter_executive: Tower = [
	{
		range: 40,
		upgrade_reduction: 0.075,
		price: 15_800
	},
	{
		range: 45,
		upgrade_reduction: 0.075,
		price: 8_200
	},
	{},
	{},
	{},
	{
		damage: 150,
		cooldown: 0.08,
		range: 55,

		boss_slayer: 5.4,
		range_buff: 0.15,
		upgrade_reduction: 0.15,
		camo: true,
		instabreak: 0.024
	},
	{
		damage: 750,
		cooldown: 0.07,
		range: 75,
		boss_slayer: 7,
		range_buff: 0.3,
		upgrade_reduction: 0.12,
		camo: true,
		instabreak: 0.016,
		price: 4_600_000
	},
	{
		range: 55,
		range_buff: 0.15,
		cooldown_buff: 0.12,
		upgrade_reduction: 0.3,
		camo: true,
		price: 5_860_000
	}
];
// TODO: add stats
export const festive_tree_red: Tower = [
	{ income: 440, range: 40, damage_buff: 0.1, range_buff: 0.12, price: 2_023 },
	{ income: 990, range: 45, damage_buff: 0.1, range_buff: 0.15, price: 3_023 },
	{ income: 1_650, range: 45, damage_buff: 0.125, range_buff: 0.15, price: 9_023 },
	{ income: 4_620, range: 50, damage_buff: 0.125, range_buff: 0.18, price: 27_023 },
	{ income: 13_200, range: 50, damage_buff: 0.15, range_buff: 0.24, price: 81_023 },
	{ income: 33_000, range: 50, damage_buff: 0.2, range_buff: 0.24, price: 243_023 },
	{ income: 330_000, range: 55, damage_buff: 0.25, range_buff: 0.3, price: 3_755_167 }
];
// TODO: add stats
export const festive_tree_green: Tower = [
	{
		income: 440,
		range: 40,
		damage_buff: 0.08,
		range_buff: 0.15,
		price: 2_023
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const festive_tree_violet: Tower = [
	{
		income: 440,
		range: 40,
		range_buff: 0.12,
		cooldown_buff: 0.08,
		price: 2_023
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const festive_tree_orange: Tower = [
	{
		income: 560,
		range: 40,
		damage_buff: 0.08,
		range_buff: 0.12,
		price: 2_023
	},
	{
		income: 1_260,
		range: 45,
		damage_buff: 0.08,
		range_buff: 0.15,
		price: 3_023
	},
	{
		income: 2_100,
		range: 45,
		damage_buff: 0.1,
		range_buff: 0.15,
		price: 9_023
	},
	{
		income: 5_880,
		range: 50,
		damage_buff: 0.1,
		range_buff: 0.18,
		price: 27_023
	},
	{
		income: 16_800,
		range: 50,
		damage_buff: 0.12,
		range_buff: 0.24,
		price: 81_023
	},
	{
		income: 42_000,
		range: 50,
		damage_buff: 0.16,
		range_buff: 0.24,
		price: 243_023
	},
	{
		income: 420_000,
		range: 55,
		damage_buff: 0.2,
		range_buff: 0.3,
		price: 3_755_167 // reversed-reduction: inaccurate.
	}
];
// TODO: add stats
export const festive_tree_cobalt: Tower = [
	{
		income: 440,
		range: 53,
		damage_buff: 0.08,
		range_buff: 0.12,
		price: 2_023
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const festive_tree_gold: Tower = [
	{ income: 440, range: 40, damage_buff: 0.08, upgrade_reduction: 0.12, price: 2_023 },
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const jar_guard_singularity_test: Tower = [{}, {}, {}, {}, {}, {}, {}];
// TODO: add stats
export const strawberry_lemonade_stand_test: Tower = [
	{
		income: 20,
		cooldown: 4,
		range: 50,
		bounty_amp: 0.11,
		bounty_add: 1.2,
		cooldown_buff: 0.075,
		price: 2_200
	},
	{
		income: 35,
		cooldown: 4,
		range: 55,
		bounty_amp: 0.135,
		bounty_add: 2.5,
		cooldown_buff: 0.075,
		price: 1_150
	},
	{
		income: 55,
		cooldown: 3.5,
		range: 55,
		bounty_amp: 0.165,
		bounty_add: 5,
		cooldown_buff: 0.1125,
		price: 2_500
	},
	{
		income: 135,
		cooldown: 3.5,
		range: 70,
		bounty_amp: 0.165,
		bounty_add: 12,
		damage_buff: 0.15,
		cooldown_buff: 0.1125,
		price: 8_275
	},
	{
		income: 335,
		cooldown: 3,
		range: 70,
		bounty_amp: 0.22,
		bounty_add: 30,
		damage_buff: 0.2,
		cooldown_buff: 0.1125,
		price: 27_500
	},
	{},
	{
		income: 4_350,
		cooldown: 1.5,
		range: 110,
		bounty_amp: 0.35,
		bounty_add: 900,
		damage_buff: 0.2,
		cooldown_buff: 0.15,
		interest: 0.02,
		max_interest: 50_000_000 // i think???
	},
	{}
];

export const summer_stryker: Tower = [
	{
		damage: 75,
		cooldown: 5,
		exclusion: 200,
		radius: 65,
		inaccuracy: 1,
		residue_length: 12,
		scorch: 0.0125,
		scorch_length: 12,
		rad_strength: 1.2,
		rad_length: 4,
		armor_piercing: true,
		camo: true,
		price: 24_353
	},
	{
		damage: 75,
		cooldown: 2.5,
		exclusion: 200,
		radius: 65,
		inaccuracy: 1,
		residue_length: 12,
		scorch: 0.0125,
		scorch_length: 12,
		rad_strength: 1.2,
		rad_length: 4,
		armor_piercing: true,
		camo: true,
		price: 200_000
	},
	{
		damage: 75,
		cooldown: 2.5,
		exclusion: 200,
		radius: 125,
		inaccuracy: 1,
		residue_length: 12,
		scorch: 0.0125,
		scorch_length: 12,
		rad_strength: 1.2,
		rad_length: 8,
		armor_piercing: true,
		camo: true,
		price: 750_000
	},
	{
		damage: 225,
		cooldown: 10,
		exclusion: 60,
		radius: 125,
		inaccuracy: 1,
		residue_length: 12,
		scorch: 0.0125,
		scorch_length: 12,
		rad_strength: 0.6,
		rad_length: 8,
		armor_piercing: true,
		camo: true,
		price: 2_500_000
	},
	{
		damage: 225,
		cooldown: 10,
		exclusion: 60,
		radius: 125,
		inaccuracy: 1,
		residue_length: 14,
		scorch: 0.015,
		scorch_length: 14,
		rad_strength: 0.6,
		rad_length: 16,
		armor_piercing: true,
		camo: true,
		price: 8_000_000
	},
	{
		damage: 225,
		cooldown: 10,
		exclusion: 60,
		radius: 125,
		inaccuracy: 1,
		residue_length: 14,
		scorch: 0.015,
		scorch_length: 14,
		rad_strength: 1.5,
		rad_length: 16,
		armor_piercing: true,
		camo: true,
		price: 25_000_000
	},
	{
		damage: 5_000_000_000,
		cooldown: 10,
		exclusion: 300,
		radius: 125,
		inaccuracy: 1,
		residue_length: 14,
		scorch: 0.015,
		scorch_length: 14,
		rad_strength: 1.5,
		rad_length: 16,
		armor_piercing: true,
		camo: true,
		price: 155_000_000
	},
	{
		damage: 225,
		cooldown: 5,
		exclusion: 300,
		radius: 125,
		inaccuracy: 1,
		residue_length: 14,
		scorch: 0.015,
		scorch_length: 14,
		rad_strength: 2,
		rad_length: 16,
		armor_piercing: true,
		camo: true,
		price: 200_000_000
	}
];
