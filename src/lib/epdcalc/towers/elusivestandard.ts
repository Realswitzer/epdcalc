import { type Tower } from '../types';
// Note: This is also classified as HUGE, but in the index are listed as elusive/standard.

// TODO: add stats
export const huge_scar: Tower = [
	{ damage: 3, cooldown: 0.3, range: 60, bleed: 3, armor_piercing: true, aim: 135, price: 9_600 },
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_demolisher: Tower = [
	{
		damage: 50,
		cooldown: 5,
		range: 100,
		radius: 18,
		price: 4_000
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_godfather: Tower = [
	{
		damage: 20,
		cooldown: 0.2,
		range: 90,
		paralyze: 0.045,
		cash_conv: 0.2,
		aim: 100,
		shield_dmg: 0.5,
		price: 15_000
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_server_farm: Tower = [
	{
		income: 120,
		cooldown: 20,
		range: 5,
		price: 1_500
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_mercenary: Tower = [
	{
		damage: 500,
		crit_chance: 1,
		crit_dmg: 5,
		cooldown: 0.2,
		range: 90,
		armor_piercing: true,
		camo: true,
		aim: 80,
		price: 4_000
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_coordinator: Tower = [
	{ damage: 30, cooldown: 1.6, range: 60, damage_buff: 0.15, camo: true, aim: 100, price: 9_500 },
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_sharpshooter: Tower = [
	{
		damage: 150,
		cooldown: 3.35,
		exclusion: 75,
		stun: 3,
		armor_piercing: true,
		aim: 150,
		shield_dmg: 5,
		price: 6_750
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
// TODO: add stats
export const huge_shotgunner: Tower = [
	{
		damage: 40,
		cooldown: 3,
		range: 45,
		radius: 9,
		aim: 110,
		shield_dmg: 2,
		price: 1_500 // i think, though in this the model hasnt loaded. seems like a jump cut (for some reason)
	},
	{},
	{},
	{},
	{},
	{},
	{}
];
