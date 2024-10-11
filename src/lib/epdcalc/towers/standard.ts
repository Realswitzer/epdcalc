import { type Tower } from '../types';

export const anarchist: Tower = [
	{
		damage: 25,
		cooldown: 2,
		range: 45,
		radius: 8,
		valor: 0.5,
		armor_destruction: 0.2,
		aim: 145,
		shield_dmg: 4,
		price: 2_750
	},
	{
		damage: 25,
		cooldown: 2,
		range: 50,
		radius: 10,
		valor: 0.55,
		armor_destruction: 0.2,
		aim: 145,
		shield_dmg: 5,
		price: 1_300
	},
	{
		damage: 40,
		cooldown: 2,
		range: 55,
		radius: 10,
		valor: 0.55,
		armor_destruction: 0.25,
		aim: 145,
		shield_dmg: 7,
		price: 2_900
	},
	{
		damage: 90,
		cooldown: 1.7,
		range: 60,
		radius: 10,
		valor: 0.6,
		armor_destruction: 0.25,
		aim: 145,
		shield_dmg: 9,
		price: 9_400
	},
	{
		damage: 190,
		cooldown: 1.7,
		range: 65,
		radius: 12,
		valor: 0.6,
		armor_destruction: 0.3,
		aim: 145,
		shield_dmg: 13,
		price: 33_800
	},
	{
		damage: 500,
		cooldown: 1.55,
		range: 70,
		radius: 12,
		valor: 0.75,
		armor_destruction: 0.35,
		camo: true,
		aim: 145,
		shield_dmg: 18,
		price: 112_000
	},
	{
		damage: 900,
		cooldown: 0.24,
		range: 70,
		radius: 15,
		execution: 1.5,
		armor_destruction: 0.1,
		camo: true,
		aim: 145,
		shield_dmg: 18,
		price: 760_000
	},
	{
		damage: 5_000,
		cooldown: 1.15,
		range: 95,
		radius: 12,
		valor: 2,
		armor_destruction: 0.45,
		camo: true,
		aim: 145,
		shield_dmg: 42,
		price: 990_000
	}
];

export const bombarder: Tower = [
	{
		damage: 30,
		cooldown: 6.5,
		range: 120,
		exclusion: 45,
		radius: 30,
		rupture: 0.08,
		rupture_duration: 3.5,
		shield_dmg: 8,
		price: 3_800
	},
	{
		damage: 30,
		cooldown: 6.5,
		range: 140,
		exclusion: 40,
		radius: 30,
		rupture: 0.08,
		rupture_duration: 4,
		shield_dmg: 8,
		price: 1_600
	},
	{
		damage: 70,
		cooldown: 6.5,
		range: 145,
		exclusion: 40,
		radius: 30,
		rupture: 0.1,
		rupture_duration: 4,
		shield_dmg: 8,
		price: 4_800
	},
	{
		damage: 180,
		cooldown: 6.5,
		range: 145,
		exclusion: 40,
		radius: 35,
		rupture: 0.1,
		rupture_duration: 4.5,
		shield_dmg: 8,
		price: 19_000
	},
	{
		damage: 375,
		cooldown: 5.8,
		range: 160,
		exclusion: 40,
		radius: 40,
		rupture: 0.12,
		rupture_duration: 4.5,
		armor_piercing: true,
		shield_dmg: 8,
		price: 75_000
	},
	{
		damage: 1_000,
		cooldown: 4.6,
		range: 170,
		exclusion: 40,
		radius: 40,
		rupture: 0.12,
		rupture_duration: 4.5,
		armor_piercing: true,
		shield_dmg: 8,
		price: 215_000
	},
	{
		damage: 2_400,
		cooldown: 2.7,
		range: 170,
		exclusion: 45,
		radius: 40,
		rupture: 0.2,
		rupture_duration: 4.5,
		armor_piercing: true,
		shield_dmg: 8,
		price: 1_400_000
	},
	{
		damage: 3_600,
		cooldown: 4.6,
		range: 240,
		exclusion: 80,
		radius: 55,
		rupture: 0.12,
		rupture_duration: 7,
		armor_piercing: true,
		shield_dmg: 8,
		price: 1_650_000
	}
];

export const commandant: Tower = [
	{ range: 35, cooldown_buff: 0.15, price: 4_100 },
	{ range: 40, cooldown_buff: 0.15, price: 1_850 },
	{ range: 40, cooldown_buff: 0.2, price: 4_300 },
	{ range: 45, cooldown_buff: 0.2, price: 11_200 },
	{ range: 45, damage_buff: 0.05, cooldown_buff: 0.25, price: 31_600 },
	{ range: 50, damage_buff: 0.1, cooldown_buff: 0.25, price: 86_300 },
	{ range: 60, damage_buff: 0.15, cooldown_buff: 0.25, price: 670_000 },
	{ range: 50, damage_buff: 0.1, cooldown_buff: 0.35, price: 920_000 }
];

export const contractor: Tower = [
	{
		damage: 1,
		income: 200,
		cooldown: 0.2,
		range: 40,
		burst: 3,
		burst_cd: 0.9,
		aim: 90,
		price: 725
	},
	{
		damage: 1,
		income: 300,
		cooldown: 0.2,
		range: 50,
		burst: 3,
		burst_cd: 0.9,
		aim: 90,
		price: 450
	},
	{
		damage: 2,
		income: 600,
		cooldown: 0.2,
		range: 55,
		burst: 3,
		burst_cd: 0.9,
		aim: 90,
		price: 900
	},
	{
		damage: 5,
		income: 1_200,
		cooldown: 0.18,
		range: 55,
		burst: 4,
		burst_cd: 0.8,
		aim: 90,
		price: 3_200
	},
	{
		damage: 15,
		income: 3_000,
		cooldown: 0.18,
		range: 65,
		burst: 5,
		burst_cd: 0.7,
		aim: 90,
		price: 12_000
	},
	{
		damage: 40,
		income: 8_000,
		cooldown: 0.16,
		range: 70,
		burst: 5,
		burst_cd: 0.7,
		aim: 90,
		price: 38_000
	},
	{
		damage: 100,
		income: 100_000,
		cooldown: 0.16,
		range: 90,
		burst: 5,
		burst_cd: 0.7,
		aim: 90,
		price: 360_000
	},
	{
		damage: 150,
		income: 20_000,
		cooldown: 0.08,
		range: 70,
		aim: 90,
		camo: true,
		price: 520_000
	}
];

export const coordinator: Tower = [
	{
		damage: 6,
		cooldown: 1.6,
		range: 40,
		damage_buff: 0.1,
		camo: true,
		aim: 100,
		price: 1_900
	},
	{
		damage: 6,
		cooldown: 1.6,
		range: 50,
		damage_buff: 0.1,
		camo: true,
		aim: 100,
		price: 600
	},
	{
		damage: 15,
		cooldown: 1.6,
		range: 50,
		damage_buff: 0.15,
		camo: true,
		aim: 100,
		price: 2_100
	},
	{
		damage: 40,
		cooldown: 1.6,
		range: 65,
		range_buff: 0.05,
		damage_buff: 0.15,
		camo: true,
		aim: 100,
		price: 6_400
	},
	{
		damage: 100,
		cooldown: 1.6,
		range: 65,
		range_buff: 0.1,
		damage_buff: 0.15,
		camo: true,
		aim: 100,
		price: 18_000
	},
	{
		damage: 300,
		cooldown: 1.2,
		range: 75,
		range_buff: 0.1,
		damage_buff: 0.15,
		camo: true,
		aim: 100,
		price: 58_000
	},
	{
		damage: 1_000,
		cooldown: 1.2,
		range: 100,
		range_buff: 0.25,
		damage_buff: 0.15,
		camo: true,
		aim: 100,
		price: 460_000
	},
	{
		damage: 200,
		cooldown: 0.2,
		range: 75,
		range_buff: 0.1,
		damage_buff: 0.25,
		camo: true,
		aim: 100,
		price: 600_000
	}
];

export const demolisher: Tower = [
	{ damage: 10, cooldown: 5, range: 65, radius: 12, price: 800 },
	{ damage: 10, cooldown: 5, range: 75, radius: 12, price: 400 },
	{ damage: 24, cooldown: 4.2, range: 80, radius: 15, price: 1_000 },
	{ damage: 50, cooldown: 2.4, range: 80, radius: 18, price: 3_200 },
	{ damage: 110, cooldown: 2.4, range: 80, radius: 20, price: 12_000 },
	{ damage: 320, cooldown: 2.4, range: 80, radius: 20, price: 45_000 },
	{
		damage: 840,
		cooldown: 1.2,
		execution: 1,
		range: 80,
		radius: 20,
		price: 45_000
	},
	{
		damage: 5_000,
		cooldown: 6,
		range: 110,
		radius: 35,
		shield_bypass: 0.25,
		armor_piercing: true,
		camo: true,
		price: 520_000
	}
];

export const electrician: Tower = [
	{
		damage: 35,
		cooldown: 5,
		range: 100,
		radius: 5,
		paralyze: 0.2,
		armor_piercing: true,
		shield_dmg: 3,
		price: 2_400
	},
	{
		damage: 50,
		cooldown: 5,
		range: 110,
		radius: 5,
		paralyze: 0.2,
		armor_piercing: true,
		shield_dmg: 3,
		price: 1_000
	},
	{
		damage: 80,
		cooldown: 5,
		range: 110,
		radius: 8,
		paralyze: 0.25,
		armor_piercing: true,
		shield_dmg: 3,
		price: 3_000
	},
	{
		damage: 150,
		cooldown: 4,
		range: 125,
		radius: 10,
		paralyze: 0.25,
		armor_piercing: true,
		shield_dmg: 3,
		price: 8_000
	},
	{
		damage: 400,
		cooldown: 4,
		range: 140,
		radius: 10,
		paralyze: 0.25,
		armor_piercing: true,
		shield_dmg: 3,
		price: 20_000
	},
	{
		damage: 800,
		cooldown: 4,
		range: 140,
		radius: 10,
		paralyze: 0.35,
		armor_piercing: true,
		shield_dmg: 3,
		price: 65_000
	},
	{
		damage: 1_200,
		cooldown: 2.5,
		range: 140,
		radius: 10,
		paralyze: 0.35,
		armor_piercing: true,
		shield_dmg: 3,
		price: 720_000
	},
	{
		damage: 3_000,
		cooldown: 4,
		range: 155,
		radius: 12,
		paralyze: 0.4,
		camo: true,
		armor_piercing: true,
		shield_dmg: 3,
		price: 1_000_000
	}
];

export const godfather: Tower = [
	{
		damage: 4,
		cooldown: 0.2,
		range: 60,
		paralyze: 0.03,
		cash_conv: 0.25,
		aim: 120,
		shield_dmg: 0.5,
		price: 3_000
	},
	{
		damage: 4,
		cooldown: 0.2,
		range: 70,
		paralyze: 0.035,
		cash_conv: 0.25,
		aim: 120,
		shield_dmg: 0.5,
		price: 1_200
	},
	{
		damage: 6,
		cooldown: 0.2,
		range: 80,
		paralyze: 0.035,
		cash_conv: 0.25,
		aim: 120,
		shield_dmg: 0.5,
		price: 3_200
	},
	{
		damage: 15,
		cooldown: 0.15,
		range: 80,
		paralyze: 0.04,
		cash_conv: 0.25,
		aim: 120,
		shield_dmg: 0.5,
		price: 10_000
	},
	{
		damage: 25,
		cooldown: 0.12,
		range: 80,
		paralyze: 0.04,
		cash_conv: 0.25,
		aim: 120,
		shield_dmg: 0.5,
		price: 35_000
	},
	{
		damage: 65,
		cooldown: 0.12,
		range: 90,
		paralyze: 0.045,
		cash_conv: 0.3,
		aim: 120,
		shield_dmg: 0.5,
		price: 80_000
	},
	{
		damage: 250,
		cooldown: 0.06,
		range: 90,
		paralyze: 0.045,
		cash_conv: 0.4,
		aim: 120,
		shield_dmg: 0.5,
		price: 900_000
	},
	{
		damage: 650,
		cooldown: 0.12,
		range: 115,
		paralyze: 0.06,
		cash_conv: 0.3,
		aim: 120,
		shield_dmg: 0.5,
		price: 1_100_000
	}
];

export const heavy: Tower = [
	{
		damage: 4,
		cooldown: 0.12,
		range: 55,
		hollow_point: 1.5,
		aim: 85,
		shield_dmg: 0.25,
		price: 5_500
	},
	{
		damage: 4,
		cooldown: 0.12,
		range: 65,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 2_400
	},
	{
		damage: 9,
		cooldown: 0.12,
		range: 65,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 6_500
	},
	{
		damage: 20,
		cooldown: 0.12,
		range: 70,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 20_000
	},
	{
		damage: 50,
		cooldown: 0.08,
		range: 90,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 75_000
	},
	{
		damage: 120,
		cooldown: 0.08,
		range: 100,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 280_000
	},
	{
		damage: 800,
		cooldown: 0.1,
		range: 125,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 1_600_000
	},
	{
		damage: 500,
		cooldown: 0.05,
		range: 100,
		hollow_point: 1.5,
		camo: true,
		aim: 85,
		shield_dmg: 0.25,
		price: 2_100_000
	}
];

export const heckler: Tower = [
	{
		damage: 1,
		cooldown: 0.09,
		range: 40,
		bleed: 1,
		aim: 105,
		shield_dmg: 0.6,
		price: 4_600
	},
	{
		damage: 1,
		cooldown: 0.09,
		range: 45,
		bleed: 1,
		aim: 105,
		shield_dmg: 0.6,
		price: 1_900
	},
	{
		damage: 2,
		cooldown: 0.09,
		range: 50,
		bleed: 1,
		camo: true,
		aim: 105,
		shield_dmg: 0.6,
		price: 5_100
	},
	{
		damage: 5,
		cooldown: 0.075,
		range: 70,
		bleed: 2,
		camo: true,
		aim: 105,
		shield_dmg: 0.6,
		price: 19_500
	},
	{
		damage: 12,
		cooldown: 0.075,
		range: 80,
		bleed: 3,
		camo: true,
		aim: 105,
		shield_dmg: 0.6,
		price: 61_000
	},
	{
		damage: 30,
		cooldown: 0.07,
		range: 90,
		bleed: 8,
		camo: true,
		aim: 105,
		shield_dmg: 0.6,
		price: 210_000
	},
	{
		damage: 175,
		cooldown: 0.07,
		range: 90,
		bleed: 20,
		camo: true,
		aim: 105,
		shield_dmg: 0.6,
		price: 1_520_000
	},
	{
		damage: 300,
		cooldown: 0.105,
		range: 100,
		bleed: 40,
		camo: true,
		armor_piercing: true,
		aim: 105,
		shield_dmg: 0.6,
		price: 1_860_000
	}
];

export const marksman: Tower = [
	{ damage: 5, cooldown: 4, range: 80, aim: 95, shield_dmg: 2, price: 350 },
	{ damage: 7, cooldown: 3.6, range: 90, aim: 95, shield_dmg: 2, price: 200 },
	{ damage: 12, cooldown: 3.2, range: 100, aim: 95, shield_dmg: 2, price: 700 },
	{
		damage: 30,
		cooldown: 2.6,
		range: 115,
		aim: 95,
		shield_dmg: 2,
		price: 2_150
	},
	{
		damage: 60,
		cooldown: 2,
		range: 130,
		aim: 95,
		armor_piercing: true,
		camo: true,
		shield_dmg: 2,
		price: 6_000
	},
	{
		damage: 150,
		cooldown: 1.8,
		range: 135,
		aim: 95,
		armor_piercing: true,
		camo: true,
		shield_dmg: 2,
		price: 20_000
	},
	{
		damage: 2_000,
		cooldown: 3,
		range: 170,
		aim: 95,
		paralyze: 0.6,
		armor_piercing: true,
		camo: true,
		shield_dmg: 2,
		price: 160_000
	},
	{
		damage: 225,
		cooldown: 0.3,
		range: 135,
		aim: 95,
		armor_piercing: true,
		camo: true,
		shield_dmg: 2,
		price: 200_000
	}
];

export const mercenary: Tower = [
	{
		damage: 1,
		crit_chance: 0.1,
		crit_dmg: 0.5,
		cooldown: 0.2,
		range: 60,
		armor_piercing: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 800
	},
	{
		damage: 1,
		crit_chance: 0.15,
		crit_dmg: 0.5,
		cooldown: 0.2,
		range: 65,
		armor_piercing: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 250
	},
	{
		damage: 2,
		crit_chance: 0.15,
		crit_dmg: 0.65,
		cooldown: 0.18,
		range: 65,
		armor_piercing: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 700
	},
	{
		damage: 5,
		crit_chance: 0.15,
		crit_dmg: 0.65,
		cooldown: 0.18,
		range: 75,
		valor: 0.2,
		armor_piercing: true,
		camo: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 1_900
	},
	{
		damage: 12,
		crit_chance: 0.2,
		crit_dmg: 0.65,
		cooldown: 0.18,
		range: 75,
		valor: 0.3,
		armor_piercing: true,
		camo: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 5_400
	},
	{
		damage: 25,
		crit_chance: 0.2,
		crit_dmg: 0.85,
		cooldown: 0.15,
		range: 75,
		valor: 0.4,
		armor_piercing: true,
		camo: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 14_600
	},
	{
		damage: 750,
		crit_chance: 0.35,
		crit_dmg: 0.85,
		cooldown: 0.15,
		range: 90,
		valor: 15,
		armor_piercing: true,
		camo: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 138_000
	},
	{
		damage: 1_600,
		crit_chance: 0.2,
		crit_dmg: 11,
		cooldown: 0.12,
		range: 75,
		valor: 0.4,
		armor_piercing: true,
		camo: true,
		aim: 80,
		shield_dmg: 0.85,
		price: 194_000
	}
];

export const pistolman: Tower = [
	{ damage: 1, cooldown: 1, range: 40, aim: 100, shield_dmg: 1, price: 200 },
	{ damage: 2, cooldown: 1, range: 45, aim: 100, shield_dmg: 1, price: 120 },
	{ damage: 2, cooldown: 0.8, range: 50, aim: 100, shield_dmg: 1, price: 300 },
	{
		damage: 4,
		cooldown: 0.65,
		range: 60,
		aim: 100,
		shield_dmg: 2,
		price: 1_100
	},
	{
		damage: 10,
		cooldown: 0.55,
		range: 60,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 2,
		price: 3_600
	},
	{
		damage: 15,
		cooldown: 0.3,
		range: 60,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 2,
		price: 11_000
	},
	{
		damage: 80,
		cooldown: 0.3,
		range: 95,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_bypass: 0.15,
		shield_dmg: 4,
		price: 80_000
	},
	{
		damage: 20,
		cooldown: 0.08,
		range: 60,
		hollow_point: 2.5,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 2,
		price: 110_000
	}
];

export const rogue: Tower = [
	{
		damage: 2,
		cooldown: 0.15,
		max_cooldown: 0.3,
		min_cooldown: 0.15,
		acceleration: 0.05,
		range: 65,
		aim: 65,
		shield_dmg: 0.7,
		price: 1_300
	},
	{
		damage: 2,
		cooldown: 0.15,
		max_cooldown: 0.27,
		min_cooldown: 0.15,
		acceleration: 0.05,
		range: 75,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 450
	},
	{
		damage: 4,
		cooldown: 0.15,
		max_cooldown: 0.27,
		min_cooldown: 0.15,
		acceleration: 0.07,
		range: 80,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 1_150
	},
	{
		damage: 8,
		cooldown: 0.125,
		max_cooldown: 0.27,
		min_cooldown: 0.125,
		acceleration: 0.07,
		range: 80,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 3_200
	},
	{
		damage: 24,
		cooldown: 0.125,
		max_cooldown: 0.27,
		min_cooldown: 0.125,
		acceleration: 0.1,
		range: 90,
		armor_piercing: true,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 11_000
	},
	{
		damage: 70,
		cooldown: 0.125,
		max_cooldown: 0.24,
		min_cooldown: 0.125,
		acceleration: 0.12,
		range: 90,
		armor_piercing: true,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 38_000
	},
	{
		damage: 600,
		cooldown: 0.125,
		max_cooldown: 0.2,
		min_cooldown: 0.125,
		acceleration: 0.12,
		range: 120,
		armor_piercing: true,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 280_000
	},
	{
		damage: 360,
		cooldown: 0.09,
		max_cooldown: 0.24,
		min_cooldown: 0.09,
		acceleration: 0.12,
		range: 90,
		purify: 2,
		armor_piercing: true,
		camo: true,
		aim: 65,
		shield_dmg: 0.7,
		price: 360_000
	}
];

export const scar: Tower = [
	{
		damage: 1,
		cooldown: 0.3,
		range: 40,
		bleed: 1,
		armor_piercing: true,
		aim: 100,
		shield_dmg: 3,
		price: 3_200
	},
	{
		damage: 1,
		cooldown: 0.3,
		range: 50,
		bleed: 1,
		armor_piercing: true,
		aim: 100,
		shield_dmg: 3,
		price: 1_250
	},
	{
		damage: 3,
		cooldown: 0.27,
		range: 55,
		bleed: 1,
		armor_piercing: true,
		aim: 100,
		shield_dmg: 3,
		price: 4_200
	},
	{
		damage: 8,
		cooldown: 0.27,
		range: 60,
		bleed: 2,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 3,
		price: 12_500
	},
	{
		damage: 20,
		cooldown: 0.22,
		range: 65,
		bleed: 4,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 3,
		price: 36_000
	},
	{
		damage: 50,
		cooldown: 0.22,
		range: 75,
		bleed: 6,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 3,
		price: 95_000
	},
	{
		damage: 300,
		cooldown: 0.05,
		range: 75,
		bleed: 10,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 3,
		price: 1_000_000
	},
	{
		damage: 2_500,
		cooldown: 0.1,
		range: 95,
		bleed: 80,
		armor_piercing: true,
		camo: true,
		aim: 100,
		shield_dmg: 3,
		price: 1_250_000
	}
];

export const server_farm: Tower = [
	{ income: 40, cooldown: 20, range: 5, price: 500 },
	{ income: 70, cooldown: 20, range: 5, price: 300 },
	{ income: 150, cooldown: 18, range: 5, price: 850 },
	{ income: 375, cooldown: 18, range: 5, price: 1_900 },
	{ income: 800, cooldown: 15, range: 5, price: 7_000 },
	{ income: 2_350, cooldown: 6, range: 5, price: 21_000 },
	{ income: 8_250, cooldown: 3, range: 5, price: 180_000 },
	{ income: 16_500, cooldown: 6, range: 50, price: 255_000 }
];

export const sharpshooter: Tower = [
	{
		damage: 30,
		cooldown: 5,
		exclusion: 50,
		stun: 2,
		armor_piercing: true,
		aim: 150,
		shield_dmg: 5,
		price: 1_350
	},
	{
		damage: 40,
		cooldown: 5,
		exclusion: 45,
		stun: 2,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 6,
		price: 700
	},
	{
		damage: 56,
		cooldown: 4.2,
		exclusion: 45,
		stun: 2.5,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 7,
		price: 1_600
	},
	{
		damage: 120,
		cooldown: 4.2,
		exclusion: 40,
		stun: 3,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 10,
		price: 5_000
	},
	{
		damage: 360,
		cooldown: 3.7,
		exclusion: 40,
		stun: 3,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 13,
		price: 16_400
	},
	{
		damage: 1_200,
		cooldown: 3.7,
		exclusion: 35,
		stun: 3.5,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 17,
		price: 55_000
	},
	{
		damage: 3_600,
		cooldown: 2.1,
		exclusion: 20,
		stun: 3.5,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 17,
		price: 540_000
	},
	{
		damage: 8_000,
		cooldown: 7,
		exclusion: 35,
		stun: 6.5,
		armor_piercing: true,
		camo: true,
		aim: 150,
		shield_dmg: 27,
		price: 720_000
	}
];

export const stunner: Tower = [
	{
		damage: 1,
		cooldown: 3,
		range: 50,
		stun: 1.5,
		aim: 140,
		shield_dmg: 4,
		price: 600
	},
	{
		damage: 1,
		cooldown: 3,
		range: 60,
		stun: 1.5,
		aim: 140,
		shield_dmg: 5,
		price: 350
	},
	{
		damage: 2,
		cooldown: 2.4,
		range: 70,
		stun: 2,
		aim: 140,
		shield_dmg: 8,
		price: 800
	},
	{
		damage: 5,
		cooldown: 2.4,
		range: 80,
		stun: 2,
		aim: 140,
		shield_dmg: 10,
		price: 2_000
	},
	{
		damage: 10,
		cooldown: 2,
		range: 80,
		stun: 2.5,
		aim: 140,
		shield_dmg: 12,
		price: 5_500
	},
	{
		damage: 20,
		cooldown: 2,
		range: 90,
		stun: 3,
		aim: 140,
		shield_dmg: 15,
		price: 14_000
	},
	{
		damage: 40,
		cooldown: 1.6,
		range: 90,
		stun: 3.5,
		shield_bypass: 0.2,
		aim: 140,
		shield_dmg: 15,
		price: 180_000
	},
	{
		damage: 100,
		cooldown: 2,
		range: 115,
		stun: 5,
		aim: 140,
		shield_dmg: 25,
		price: 260_000
	}
];

export const shotgunner: Tower = [
	{
		damage: 8,
		cooldown: 3,
		range: 30,
		radius: 6,
		aim: 110,
		shield_dmg: 2,
		price: 300
	},
	{
		damage: 12,
		cooldown: 2.8,
		range: 35,
		radius: 6,
		aim: 110,
		shield_dmg: 2,
		price: 250
	},
	{
		damage: 26,
		cooldown: 2.55,
		range: 35,
		radius: 6,
		aim: 110,
		shield_dmg: 2,
		price: 800
	},
	{
		damage: 72,
		cooldown: 2.55,
		range: 35,
		radius: 6,
		aim: 110,
		shield_dmg: 2,
		price: 2_500
	},
	{
		damage: 164,
		cooldown: 2,
		range: 35,
		radius: 6,
		camo: true,
		aim: 110,
		shield_dmg: 2,
		price: 8_500
	},
	{
		damage: 320,
		cooldown: 1.55,
		range: 35,
		radius: 6,
		camo: true,
		aim: 110,
		shield_dmg: 2,
		price: 20_000
	},
	{
		damage: 1_800,
		cooldown: 2,
		range: 50,
		radius: 3,
		stun: 3,
		armor_piercing: true,
		camo: true,
		aim: 110,
		shield_dmg: 2,
		price: 120_000
	},
	{
		damage: 320,
		cooldown: 0.2,
		range: 35,
		radius: 8,
		camo: true,
		aim: 110,
		shield_dmg: 2,
		price: 160_000
	}
];

export const soldier: Tower = [
	{
		damage: 1,
		cooldown: 0.12,
		range: 50,
		aim: 90,
		shield_dmg: 2,
		price: 2_100
	},
	{
		damage: 2,
		cooldown: 0.12,
		range: 55,
		camo: true,
		aim: 90,
		shield_dmg: 2,
		price: 1_000
	},
	{
		damage: 3,
		cooldown: 0.12,
		range: 55,
		hollow_point: 1.4,
		shield_bypass: 0.35,
		camo: true,
		aim: 90,
		shield_dmg: 3,
		price: 2_400
	},
	{
		damage: 6,
		cooldown: 0.08,
		range: 65,
		hollow_point: 1.7,
		shield_bypass: 0.35,
		camo: true,
		aim: 90,
		shield_dmg: 3,
		price: 7_900
	},
	{
		damage: 15,
		cooldown: 0.08,
		range: 65,
		hollow_point: 2,
		shield_bypass: 0.4,
		camo: true,
		aim: 90,
		shield_dmg: 5,
		price: 18_600
	},
	{
		damage: 40,
		cooldown: 0.07,
		range: 75,
		hollow_point: 2.4,
		shield_bypass: 0.4,
		camo: true,
		aim: 90,
		shield_dmg: 5,
		price: 61_000
	},
	{
		damage: 270,
		cooldown: 0.07,
		range: 75,
		hollow_point: 3.2,
		shield_bypass: 0.4,
		camo: true,
		aim: 90,
		shield_dmg: 7,
		price: 640_000
	},
	{
		damage: 540,
		cooldown: 0.06,
		range: 85,
		burst: 3,
		burst_cd: 0.24,
		hollow_point: 2.4,
		shield_bypass: 0.6,
		camo: true,
		aim: 90,
		shield_dmg: 10,
		price: 790_000
	}
];
// TODO: ??? its in the index.
// export const angelic_warrior: Tower = [{},{},{},{},{},{},{}]
