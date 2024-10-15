import { type Tower } from '../types';

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
	{
		damage: 1_444,
		cooldown: 9,
		range: 120,
		exclusion: 20,
		radius: 30,
		valor: 0.5,
		armor_piercing: true,
		shield_dmg: 10
	},
	{
		damage: 3_000,
		cooldown: 8,
		range: 120,
		exclusion: 20,
		radius: 35,
		valor: 0.5,
		armor_piercing: true,
		shield_dmg: 10
	},
	{
		damage: 10_000,
		cooldown: 6,
		range: 130,
		exclusion: 20,
		radius: 35,
		valor: 0.5,
		armor_piercing: true,
		shield_dmg: 10
	},
	{
		damage: 16_900,
		cooldown: 6,
		range: 130,
		exclusion: 20,
		radius: 60,
		valor: 0.5,
		armor_piercing: true,
		camo: true,
		shield_dmg: 10
	},
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
		damage: 536_000,
		cooldown: 6,
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
	{
		damage: 60,
		cooldown: 15,
		range: 30,
		radius: 15,
		stun: 3,
		rupture: 0.1,
		rupture_duration: 3
	},
	{
		damage: 120,
		cooldown: 13,
		range: 30,
		radius: 15,
		stun: 3.5,
		rupture: 0.12,
		rupture_duration: 3.5
	},
	{
		damage: 300,
		cooldown: 13,
		range: 30,
		radius: 20,
		stun: 3.5,
		rupture: 0.15,
		rupture_duration: 3.5
	},
	{
		damage: 1_000,
		cooldown: 11.5,
		range: 30,
		radius: 20,
		stun: 4.5,
		rupture: 0.15,
		rupture_duration: 4.5
	},
	{
		damage: 3_600,
		cooldown: 11.5,
		range: 30,
		radius: 25,
		stun: 4.5,
		rupture: 0.2,
		rupture_duration: 4.5
	},
	{
		damage: 12_000,
		cooldown: 5.75,
		range: 30,
		radius: 25,
		stun: 4.5,
		rupture: 0.25,
		rupture_duration: 4.5
	},
	{
		damage: 36_000,
		cooldown: 11.5,
		range: 30,
		radius: 35,
		stun: 6,
		rupture: 0.2,
		rupture_duration: 6,
		armor_piercing: true
	}
];

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
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 75,
		cooldown: 1.8,
		range: 55,
		first_strike: 14,
		valor: 0.4,
		shield_bypass: 0.75,
		armor_piercing: true
	},
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 260,
		cooldown: 1.8,
		range: 75,
		first_strike: 17,
		valor: 0.45,
		shield_bypass: 0.8,
		armor_piercing: true
	},
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 900,
		cooldown: 1.62,
		range: 90,
		first_strike: 17,
		valor: 0.45,
		shield_bypass: 0.8,
		armor_piercing: true,
		camo: true
	},
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 3_000,
		cooldown: 1.62,
		range: 100,
		first_strike: 22,
		valor: 0.5,
		shield_bypass: 0.8,
		armor_piercing: true,
		camo: true
	},
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 10_000,
		cooldown: 1.5,
		range: 120,
		first_strike: 30,
		valor: 0.6,
		shield_bypass: 0.85,
		armor_piercing: true,
		camo: true
	},
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 60_000,
		cooldown: 1.5,
		range: 125,
		first_strike: 60,
		valor: 1.2,
		shield_bypass: 0.85,
		armor_piercing: true,
		camo: true
	},
	{
		damage: 1,
		crit_chance: 1,
		crit_dmg: 120_000,
		cooldown: 0.6,
		range: 175,
		first_strike: 30,
		valor: 0.6,
		shield_bypass: 1,
		armor_piercing: true,
		camo: true
	}
];
