import { type Tower } from '../types';

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
	{
		damage: 1_100,
		cooldown: 15,
		range: 265,
		exclusion: 75,
		frostbite: 0.025,
		frost_time: 9,
		bliz_length: 8,
		bliz_radius: 55,
		armor_destruction: 0.05,
		camo: true,
		shield_dmg: 0.05
	},
	{
		damage: 900,
		cooldown: 8,
		range: 210,
		exclusion: 65,
		frostbite: 0.035,
		frost_time: 5.5,
		bliz_length: 5.5,
		bliz_radius: 35,
		armor_piercing: true,
		camo: true,
		shield_dmg: 0.05
	}
];
//TODO: add stats
export const mystic_heavy: Tower = [
	{
		damage: 40,
		cooldown: 0.12,
		range: 110,
		hollow_point: 1.5
		//ahhh he upgraded them wtf
	},
	{},
	{},
	{
		damage: 2_000,
		cooldown: 0.12,
		range: 140,
		hollow_point: 1.5
		// god damn it
	},
	{
		damage: 5_000,
		cooldown: 0.08,
		range: 180,
		hollow_point: 1.5,
		armor_destruction: 0.2,
		camo: true,
		aim: 85,
		shield_dmg: 0.75
	},
	{
		damage: 12_000,
		cooldown: 0.08,
		range: 200,
		hollow_point: 1.5,
		armor_destruction: 0.2,
		camo: true,
		aim: 85,
		shield_dmg: 0.75
	},
	{
		damage: 80_000,
		cooldown: 0.1,
		range: 250,
		hollow_point: 1.5,
		armor_destruction: 0.25,
		camo: true,
		aim: 85,
		shield_dmg: 0.75
	},
	{
		damage: 50_000,
		cooldown: 0.05,
		range: 200,
		hollow_point: 1.5,
		armor_destruction: 0.2,
		camo: true,
		aim: 85,
		shield_dmg: 0.75
	}
];
//TODO: add stats
export const poacher: Tower = [
	{},
	{},
	{},
	{},
	{},
	{},
	{
		// unsure of path but this is _a_ level 7 path.
		damage: 25_500,
		cooldown: 4.75,
		range: 80,
		radius: 35,
		stun: 3.5,
		bounty_add: 1_000,
		armor_destruction: 1,
		camo: true,
		cash_conv: 0.55,
		shield_dmg: 8
	}
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
	{
		income: 150_000,
		range: 40,
		damage_buff: 0.15,
		range_buff: 0.225
	}
];
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
	{
		damage: 100,
		cooldown: 3,
		radius: 9,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	},
	{
		damage: 150,
		cooldown: 2.5,
		radius: 9,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	},
	{
		damage: 300,
		cooldown: 2.5,
		radius: 9,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	},
	{
		damage: 500,
		cooldown: 1.5,
		radius: 9,
		valor: 1.2,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	},
	{
		damage: 2_000,
		cooldown: 1,
		radius: 9,
		valor: 2.55,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	},
	{
		damage: 10_000,
		cooldown: 3,
		radius: 30,
		stun: 10,
		corrosion: 0.005,
		valor: 2.55,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	},
	{
		damage: 2_000,
		cooldown: 0.1,
		radius: 12,
		valor: 2.55,
		armor_piercing: true,
		camo: true,
		aim: 190,
		shield_dmg: 2
	}
];
//TODO: add stats
export const hellfire: Tower = [{}, {}, {}, {}, {}, {}, {}];
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
export const huge_jar_guard: Tower = [
	{
		damage: 120,
		cooldown: 1,
		range: 150,
		exclusion: 150,
		valor: 0.4,
		camo: true,
		soul_damage: 0.3,
		aim: 150
	},
	{},
	{},
	{},
	{},
	{
		damage: 12_000,
		cooldown: 0.68,
		range: 210,
		exclusion: 50,
		valor: 1.1,
		armor_piercing: true,
		camo: true,
		soul_damage: 0.7,
		aim: 150,
		shield_dmg: 40
	},
	{
		damage: 150_000,
		cooldown: 0.68,
		range: 250,
		exclusion: 50,
		valor: 2,
		armor_piercing: true,
		camo: true,
		soul_damage: 1.15,
		aim: 150,
		shield_dmg: 96
	}
];
//TODO: add stats
export const invisible_man: Tower = [{}, {}, {}, {}, {}, {}, {}];
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
export const jar_guard_unknown: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const jar_guard: Tower = [{}, {}, {}, {}, {}, {}, {}];
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
	{
		damage: 480,
		cooldown: 0.08,
		range: 115,
		burst: 50,
		burst_cd: 1.5,
		boss_slayer: 1.55,
		valor: 7.8,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 415,
		cooldown: 0.07,
		range: 135,
		burst: 30,
		burst_cd: 1.05,
		boss_slayer: 4.2,
		valor: 4,
		armor_piercing: true,
		camo: true,
		aim: 125
	}
];

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
	{
		damage: 2,
		cooldown: 0.12,
		range: 85,
		burst: 20,
		burst_cd: 2.4,
		valor: 1.9,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 3,
		cooldown: 0.12,
		range: 85,
		burst: 20,
		burst_cd: 2.1,
		boss_slayer: 1.25,
		valor: 2.4,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 6,
		cooldown: 0.1,
		range: 95,
		burst: 30,
		burst_cd: 2.1,
		boss_slayer: 1.25,
		valor: 3,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 18,
		cooldown: 0.1,
		range: 115,
		burst: 30,
		burst_cd: 1.8,
		boss_slayer: 1.55,
		valor: 3,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 45,
		cooldown: 0.08,
		range: 115,
		burst: 30,
		burst_cd: 1.5,
		boss_slayer: 1.55,
		valor: 4,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 480,
		cooldown: 0.08,
		range: 115,
		burst: 50,
		burst_cd: 1.5,
		boss_slayer: 1.55,
		valor: 7.8,
		armor_piercing: true,
		camo: true,
		aim: 125
	},
	{
		damage: 415,
		cooldown: 0.07,
		range: 135,
		burst: 30,
		burst_cd: 1.05,
		boss_slayer: 3.2,
		valor: 4,
		armor_piercing: true,
		camo: true,
		aim: 125
	}
];
// TODO: add stats
export const scorcher: Tower = [{}, {}, {}, {}, {}, {}, {}];
//TODO: add stats
export const scrambler: Tower = [
	{},
	{},
	{},
	{},
	{},
	{},
	{
		// dont know the path, i swear there was another that was just like an ashigaru on coke
		damage: 5_000,
		cooldown: 3.9,
		range: 170,
		exclusion: 20,
		radius: 65,
		purify: 5,
		armor_piercing: true,
		camo: true,
		cash_conv: 0.2,
		shield_dmg: 21
	}
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
	{
		damage: 8,
		cooldown: 0.15,
		max_cooldown: 0.27,
		min_cooldown: 0.15,
		acceleration: 0.1,
		range: 113,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	},
	{
		damage: 16,
		cooldown: 0.15,
		max_cooldown: 0.27,
		min_cooldown: 0.15,
		acceleration: 0.14,
		range: 120,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	},
	{
		damage: 32,
		cooldown: 0.125,
		max_cooldown: 0.27,
		min_cooldown: 0.125,
		acceleration: 0.14,
		range: 120,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	},
	{
		damage: 96,
		cooldown: 0.125,
		max_cooldown: 0.27,
		min_cooldown: 0.125,
		acceleration: 0.2,
		range: 135,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	},
	{
		damage: 280,
		cooldown: 0.125,
		max_cooldown: 0.24,
		min_cooldown: 0.125,
		acceleration: 0.24,
		range: 135,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	},
	{
		damage: 24_000,
		cooldown: 0.125,
		max_cooldown: 0.002,
		min_cooldown: 0.125,
		acceleration: 0.24,
		range: 180,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	},
	{
		damage: 14_400,
		cooldown: 0.09,
		max_cooldown: 0.24,
		min_cooldown: 0.09,
		acceleration: 0.24,
		range: 135,
		purify: 8,
		armor_piercing: true,
		camo: true,
		aim: 55,
		shield_dmg: 0.7
	}
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
	{
		damage: 10,
		cooldown: 0.45,
		range: 90,
		armor_destruction: 0.2,
		camo: true,
		aim: 100
	},
	{
		damage: 20,
		cooldown: 0.375,
		range: 100,
		armor_destruction: 0.2,
		camo: true,
		aim: 100
	},
	{
		damage: 40,
		cooldown: 0.3,
		range: 120,
		armor_destruction: 0.2,
		camo: true,
		aim: 100
	},
	{
		damage: 100,
		cooldown: 0.25,
		range: 120,
		armor_destruction: 0.25,
		camo: true,
		aim: 100
	},
	{
		damage: 180,
		cooldown: 0.15,
		range: 120,
		armor_destruction: 0.25,
		camo: true,
		aim: 100
	},
	{
		damage: 800,
		cooldown: 0.15,
		range: 160,
		armor_destruction: 0.35,
		camo: true,
		aim: 100
	},
	{
		damage: 250,
		cooldown: 0.06,
		range: 120,
		execution: 1,
		armor_destruction: 0.25,
		camo: true,
		aim: 100
	}
];
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
