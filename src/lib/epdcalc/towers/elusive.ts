import { type Tower } from '../types';

export const lemonade_stand: Tower = [
	{
		income: 15,
		cooldown: 4,
		range: 45,
		bounty_amp: 0.1,
		bounty_add: 1,
		cooldown_buff: 0.05,
		price: 1_725
	},
	{
		income: 25,
		cooldown: 4,
		range: 50,
		bounty_amp: 0.12,
		bounty_add: 2,
		cooldown_buff: 0.05,
		price: 900
	},
	{
		income: 40,
		cooldown: 3.5,
		range: 50,
		bounty_amp: 0.15,
		bounty_add: 4,
		cooldown_buff: 0.075,
		price: 1_950
	},
	{
		income: 100,
		cooldown: 3.5,
		range: 60,
		bounty_amp: 0.15,
		bounty_add: 10,
		damage_buff: 0.1,
		cooldown_buff: 0.075,
		price: 6_500
	},
	{
		income: 250,
		cooldown: 3,
		range: 60,
		bounty_amp: 0.2,
		bounty_add: 25,
		damage_buff: 0.15,
		cooldown_buff: 0.075,
		price: 21_600
	},
	{
		income: 600,
		cooldown: 3,
		range: 70,
		bounty_amp: 0.2,
		bounty_add: 65,
		damage_buff: 0.15,
		cooldown_buff: 0.1,
		price: 72_000
	},
	{
		income: 3_250,
		cooldown: 1.5,
		range: 95,
		bounty_amp: 0.32,
		bounty_add: 750,
		interest: 0.02,
		max_interest: 1_000_000,
		damage_buff: 0.15,
		cooldown_buff: 0.1,
		price: 777_000
	},
	{
		income: 8_000,
		cooldown: 3,
		range: 75,
		bounty_amp: 0.2,
		bounty_add: 65,
		damage_buff: 0.25,
		cooldown_buff: 0.175,
		taxxing: 0.02,
		price: 888_000
	}
];
// TODO: add stats
export const scorcher: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const blizzard: Tower = [
	{
		damage: 8,
		cooldown: 18,
		range: 155,
		exclusion: 85, // check: video was super fucking grainy at this point like i cant read this shit to save my life
		frostbite: 0.015,
		frost_time: 3.5,
		bliz_length: 2, // check: see above.
		bliz_radius: 20,
		shield_dmg: 0.05,
		price: 8_700
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const scrambler: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const golden_shotgunner: Tower = [
	{
		damage: 50,
		cooldown: 3.5,
		radius: 9,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2,
		price: 1_000
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const silver_rogue: Tower = [
	{
		damage: 8,
		cooldown: 0.15,
		max_cooldown: 0.3,
		min_cooldown: 0.15,
		acceleration: 0.1,
		range: 98,
		armor_piercing: true,
		aim: 55,
		shield_dmg: 0.7,
		price: 3_900
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const void_pistolman: Tower = [
	{
		damage: 10,
		cooldown: 0.5,
		range: 80,
		armor_destruction: 0.15,
		camo: true,
		aim: 100,
		price: 2_500
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const hellfire: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const workshop: Tower = [
	{
		income: 120,
		cooldown: 20,
		range: 5,
		crit_chance: 0.04,
		price: 1_300
	},
	{ income: 180, cooldown: 20, range: 5, crit_chance: 0.04 },
	{ income: 360, cooldown: 20, range: 5, crit_chance: 0.05 },
	{ income: 900, cooldown: 20, range: 5, crit_chance: 0.06, price: 3_900 },
	{ income: 2_300, cooldown: 20, range: 5, crit_chance: 0.07, price: 11_200 },
	{ income: 6_900, cooldown: 20, range: 5, crit_chance: 0.08, price: 34_800 },
	{ income: 12_000, cooldown: 20, range: 5, crit_chance: 0.4, price: 360_000 }
];
//TODO: add stats
export const invisible_man: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const poacher: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const operative: Tower = [
	{
		damage: 2,
		cooldown: 0.12,
		range: 70,
		burst: 20,
		burst_cd: 2.4,
		valor: 1.5,
		armor_piercing: true,
		aim: 125,
		price: 1_600
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const bloodsucker: Tower = [
	{
		damage: 50,
		cooldown: 1,
		max_cooldown: 7.5,
		min_cooldown: 1,
		acceleration: 0.15,
		range: 100,
		bleed: 10,
		purify: 0.8,
		boss_slayer: 0.8,
		shield_dmg: 3,
		price: 6_666
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const lucifer: Tower = [
	{
		damage: 25,
		cooldown: 4,
		range: 175,
		exclusion: 60,
		radius: 5,
		burn_damage: 20,
		burn_time: 5,
		execution: 0.45,
		aim: 165,
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
//TODO: add stats
export const jar_guard: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const jar_guard_dull: Tower = [
	{
		damage: 5,
		cooldown: 1,
		range: 75,
		exclusion: 20,
		camo: true,
		soul_damage: 0.15,
		aim: 120,
		shield_dmg: 2,
		price: 1_450
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const jar_guard_polished: Tower = [
	{
		damage: 4,
		cooldown: 0.5,
		range: 75,
		exclusion: 20,
		valor: 0.4,
		camo: true,
		soul_damage: 0.3,
		aim: 150,
		shield_dmg: 2,
		price: 2_250
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const huge_jar_guard: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const festive_tree: Tower = [
	{ income: 400, range: 35, damage_buff: 0.08, range_buff: 0.12, price: 2_023 },
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const festive_tree_sapling: Tower = [
	{
		income: 200,
		range: 25,
		damage_buff: 0.06,
		range_buff: 0.09,
		price: 2_023
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
//TODO: add stats
export const huge_festive_tree: Tower = [
	{
		income: 2_000,
		range: 70,
		damage_buff: 0.08,
		range_buff: 0.12,
		price: 10_115
	},
	{
		income: 4_500,
		range: 80,
		damage_buff: 0.08,
		range_buff: 0.15,
		price: 15_115
	},
	{
		income: 7_500,
		range: 80,
		damage_buff: 0.1,
		range_buff: 0.15,
		price: 45_115
	},
	{
		income: 21_000,
		range: 90,
		damage_buff: 0.1,
		range_buff: 0.18,
		price: 135_115
	},
	{ income: 60_000, range: 90, damage_buff: 0.12, range_buff: 0.24, price: 405_115 },
	{ income: 150_000, range: 90, damage_buff: 0.16, range_buff: 0.24, price: 1_215_115 },
	{ income: 1_650_000, range: 100, damage_buff: 0.2, range_buff: 0.3, price: 18_775_839 }
];
//TODO: add stats
export const festive_tree_grand: Tower = [
	{ income: 400, range: 35, upgrade_reduction: 0.08, price: 2_023 },
	{ income: 900, range: 40, upgrade_reduction: 0.08, price: 3_023 },
	{ income: 1_500, range: 40, upgrade_reduction: 0.1, price: 9_023 },
	{ income: 4_200, range: 45, upgrade_reduction: 0.1, price: 27_023 },
	{},
	{ income: 30_000, range: 45, upgrade_reduction: 0.16, price: 243_023 },
	{ income: 300_000, range: 50, upgrade_reduction: 0.2, price: 3_755_167 }
];
//TODO: add stats
export const jar_guard_unknown: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const mystic_heavy: Tower = [{}, {}, {}, {}, {}, {}, {}];
