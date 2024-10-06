import { type Tower } from '../types';

// TODO: add stats
export const demolitions_expert: Tower = [
	{
		damage: 40,
		cooldown: 15,
		range: 30,
		radius: 15,
		stun: 2.5,
		rupture: 0.1,
		rupture_duration: 2.5,
		price: 1_575
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const hitman: Tower = [
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 55,
		cooldown: 2,
		range: 55,
		first_strike: 12,
		valor: 0.35,
		shield_bypass: 0.75,
		armor_piercing: true,
		price: 7_000
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const abyssal: Tower = [
	{
		damage: 666,
		cooldown: 10,
		range: 110,
		exclusion: 20,
		radius: 30,
		armor_piercing: true,
		shield_dmg: 10,
		price: 6_666
	},
	{},
	{},
	{},
	{},
	{
		damage: 53_000,
		cooldown: 4,
		range: 120,
		exclusion: 20,
		radius: 60,
		valor: 0.5,
		armor_piercing: true,
		camo: true,
		shield_dmg: 10
	},
	{
		damage: 516_000,
		cooldown: 4,
		range: 60,
		exclusion: 20,
		radius: 100,
		execution: 0.7,
		valor: 2.8,
		armor_piercing: true,
		camo: true,
		shield_dmg: 10
	},
	{
		damage: 254_000,
		cooldown: 2,
		range: 230,
		exclusion: 80,
		radius: 20,
		execution: 2.5,
		valor: 1,
		armor_piercing: true,
		camo: true,
		shield_dmg: 10
	}
];
