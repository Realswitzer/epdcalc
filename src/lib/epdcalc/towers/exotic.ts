import { type Tower } from '../types';

export const assassin: Tower = [
	{
		damage: 3,
		cooldown: 2.5,
		range: 75,
		bleed: 5,
		first_strike: 5,
		execution: 0.2,
		armor_piercing: true,
		camo: true,
		aim: 180,
		price: 1_100
	},
	{
		damage: 3,
		cooldown: 2.5,
		range: 85,
		bleed: 5,
		first_strike: 6,
		execution: 0.2,
		armor_piercing: true,
		camo: true,
		aim: 180
	},
	{
		damage: 5,
		cooldown: 2.2,
		range: 85,
		bleed: 10,
		first_strike: 6,
		execution: 0.25,
		armor_piercing: true,
		camo: true,
		aim: 180
	},
	{
		damage: 15,
		cooldown: 2.2,
		range: 90,
		bleed: 10,
		first_strike: 7,
		execution: 0.25,
		armor_piercing: true,
		camo: true,
		aim: 180
	},
	{
		damage: 35,
		cooldown: 2,
		range: 90,
		bleed: 50,
		first_strike: 7,
		execution: 0.3,
		armor_piercing: true,
		camo: true,
		aim: 180
	},
	{
		damage: 75,
		cooldown: 2,
		range: 105,
		bleed: 50,
		first_strike: 9,
		execution: 0.4,
		armor_piercing: true,
		camo: true,
		aim: 180
	},
	{
		damage: 500,
		cooldown: 1.2,
		range: 130,
		bleed: 1_000,
		first_strike: 9,
		execution: 0.4,
		armor_piercing: true,
		camo: true,
		aim: 180
	},
	{
		damage: 2_500,
		cooldown: 3.5,
		range: 105,
		bleed: 50,
		first_strike: 20,
		execution: 0.65,
		armor_piercing: true,
		camo: true,
		aim: 180
	}
];

export const capitalist: Tower = [
	{
		damage: 4, // youtube compression jumpscare. ill ask darz later.
		cooldown: 1.5,
		range: 60,
		camo: true,
		cash_conv: 0.7,
		aim: 115,
		shield_dmg: 2,
		price: 720
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
export const handler: Tower = [
	{ income: 100, cooldown: 5, range: 40, bounty_amp: 0.11, bounty_add: 1.2, price: 500 },
	{ income: 200, cooldown: 5, range: 40, bounty_amp: 0.15, bounty_add: 3, price: 1_000 },
	{ income: 300, cooldown: 10, range: 40, bounty_amp: 0.2, bounty_add: 6, price: 3_000 },
	{ income: 500, cooldown: 10, range: 60, bounty_amp: 0.2, bounty_add: 15, price: 10_000 },
	{ income: 1_000, cooldown: 8, range: 70, bounty_amp: 0.3, bounty_add: 40, price: 21_000 },
	{ income: 1_500, cooldown: 5, range: 80, bounty_amp: 0.3, bounty_add: 100, price: 56_000 },
	{ income: 69_000, cooldown: 15, range: 111, bounty_amp: 4.8, bounty_add: 1_200, price: 740_000 }
];
export const shredder: Tower = [
	{
		damage: 3,
		crit_chance: 0.1,
		crit_dmg: 1,
		cooldown: 0.2,
		max_cooldown: 1,
		min_cooldown: 0.2,
		acceleration: 0.06,
		range: 85,
		exclusion: 35,
		bleed: 1,
		armor_destruction: 0.03,
		aim: 100,
		price: 3_650
	},
	{
		damage: 4,
		crit_chance: 0.15,
		crit_dmg: 1,
		cooldown: 0.2,
		max_cooldown: 0.8,
		min_cooldown: 0.2,
		acceleration: 0.06,
		range: 100,
		exclusion: 30,
		bleed: 2,
		armor_destruction: 0.03,
		aim: 100
	},
	{
		damage: 8,
		crit_chance: 0.15,
		crit_dmg: 1.4,
		cooldown: 0.18,
		max_cooldown: 0.8,
		min_cooldown: 0.18,
		acceleration: 0.06,
		range: 100,
		exclusion: 30,
		bleed: 4,
		armor_destruction: 0.04,
		aim: 100
	},
	{
		damage: 25,
		crit_chance: 0.2,
		crit_dmg: 1.4,
		cooldown: 0.18,
		max_cooldown: 0.7,
		min_cooldown: 0.18,
		acceleration: 0.8,
		range: 100,
		exclusion: 25,
		bleed: 10,
		armor_destruction: 0.08,
		camo: true,
		aim: 100
	},
	{
		damage: 65,
		crit_chance: 0.2,
		crit_dmg: 2,
		cooldown: 0.18,
		max_cooldown: 0.7,
		min_cooldown: 0.18,
		acceleration: 0.8,
		range: 125,
		exclusion: 25,
		bleed: 25,
		boss_slayer: 1.4,
		armor_destruction: 0.06,
		camo: true,
		aim: 100
	},
	{
		damage: 200,
		crit_chance: 0.3,
		crit_dmg: 2,
		cooldown: 0.14,
		max_cooldown: 0.5,
		min_cooldown: 0.14,
		acceleration: 0.1,
		range: 125,
		exclusion: 25,
		bleed: 60,
		boss_slayer: 1.4,
		armor_destruction: 0.06,
		camo: true,
		aim: 100
	},
	{
		damage: 2_500,
		crit_chance: 1,
		crit_dmg: 2,
		cooldown: 0.01,
		max_cooldown: 0.5,
		min_cooldown: 0.06,
		acceleration: 0.4,
		range: 125,
		exclusion: 25,
		bleed: 2_500,
		boss_slayer: 1.4,
		armor_destruction: 0.06,
		camo: true,
		aim: 100
	},
	{
		damage: 6_000,
		crit_chance: 0.3,
		crit_dmg: 50,
		cooldown: 0.14,
		max_cooldown: 0.3,
		min_cooldown: 0.14,
		acceleration: 0.1,
		range: 145,
		exclusion: 25,
		bleed: 4_500,
		boss_slayer: 3.2,
		armor_destruction: 0.1,
		camo: true,
		aim: 100
	}
];
