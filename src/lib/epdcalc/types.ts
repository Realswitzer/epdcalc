export enum GeneratorType {
	Time = 'Time',
	Wave = 'Wave'
}
export enum Rarity {
	Elusive = 'Elusive',
	ElusiveStandard = 'Elusive/Standard',
	Exalted = 'Exalted',
	Exotic = 'Exotic',
	Fabled = 'Fabled',
	Fusion = 'Fusion',
	Illustrious = 'Illustrious',
	Legendary = 'Legendary',
	Lustrous = 'Lustrous',
	Majestic = 'Majestic',
	Prestigious = 'Prestigious',
	Prime = 'Prime',
	Prototype = 'Prototype',
	Standard = 'Standard',
	Synthesized = 'Synthesized',
	Unknown = 'Unknown',
	Unknown2 = '???'
}
export enum TowerType {
	Defense = 'Defense',
	Generator = 'Generator',
	Offense = 'Offense',
	Support = 'Support',
	UNKNOWN_TYPE = 'UNKNOWN_TYPE' // placeholder for towers i dont have and cant have someone check it for me
}
export enum Upgrade {
	'Level1',
	'Level2',
	'Level3',
	'Level4',
	'Level5',
	'Level6',
	'Level7a',
	'Level7b',
	'Level7c',
	'Level7d',
	'Level7e'
}
export interface TowerInfo {
	GeneratorType?: GeneratorType;
	Name: string;
	Rarity: Rarity;
	Type: TowerType | TowerType[];
}
export interface TowerUpgrade {
	acceleration?: number;
	aim?: number;
	all_seeing?: number;
	armor_destruction?: number;
	armor_piercing?: boolean;
	beams?: number;
	bleed_increase?: number;
	bleed?: number;
	bliz_length?: number;
	bliz_radius?: number;
	boss_slayer?: number;
	bounty_add?: number;
	bounty_amp?: number;
	burn_damage?: number;
	burn_time?: number;
	burst_cd?: number;
	burst?: number;
	camo?: boolean;
	cash_conv?: number;
	cooldown_buff?: number;
	cooldown?: number;
	corrosion?: number;
	crit_chance?: number;
	crit_dmg?: number;
	damage_buff?: number;
	damage_cap?: number;
	damage_increase?: number;
	damage?: number;
	departure?: number;
	exclusion?: number;
	execution?: number;
	first_strike?: number;
	frost_time?: number;
	frostbite?: number;
	hollow_point?: number;
	inaccuracy?: number;
	income?: number;
	instabreak?: number;
	interest?: number;
	intimidation?: number;
	leech?: number;
	max_cooldown?: number;
	max_dmg_increase?: number;
	max_interest?: number;
	max_spawns?: number;
	min_cooldown?: number;
	min_dmg_increase?: number;
	oblivion?: number;
	paralyze?: number;
	price?: number;
	purify?: number;
	rad_length?: number;
	rad_strength?: number;
	radius?: number;
	range_buff?: number;
	range?: number;
	residue_length?: number;
	rupture_duration?: number;
	rupture?: number;
	scald?: number;
	scorch_length?: number;
	scorch?: number;
	shield_bypass?: number;
	shield_dmg?: number;
	shredding_length?: number;
	shredding?: number;
	soul_damage?: number;
	spawns_cd?: number;
	spawns_damage?: number;
	spawns_range?: number;
	stun?: number;
	targeting_rate?: number;
	taxxing?: number;
	upgrade_reduction?: number;
	valor?: number;
}
export type Blueprint = {
	[key in TowerName]?: number;
}

export type SalvageCategory = {
	[key in TowerName]?: [number, number];
};

export type ShopCategory = {
	[key in TowerName]?: number;
};
export type Tower = [
	TowerUpgrade, // 1
	TowerUpgrade, // 2
	TowerUpgrade, // 3
	TowerUpgrade, // 4
	TowerUpgrade, // 5
	TowerUpgrade, // 6
	TowerUpgrade, // 7a
	TowerUpgrade?, // 7b
	TowerUpgrade?, // 7c
	TowerUpgrade?, // 7d
	TowerUpgrade? // 7e
];
// what is a better way to do this :sob:
type TowerName =
	| 'abyssal'
	| 'adamant_styker'
	| 'alchemist'
	| 'alien_raygunner'
	| 'anarchist'
	| 'angelic_warrior'
	| 'apollos_blessing'
	| 'arcane_blizzard'
	| 'archangel_lucifer_divine'
	| 'archangel_lucifer_sublime'
	| 'ashigaru'
	| 'assassin'
	| 'blazing_apollo'
	| 'blizzard'
	| 'bloodsucker'
	| 'bombarder'
	| 'capitalist'
	| 'casual_zero_two'
	| 'chief_executive_officer'
	| 'code_0_0_2'
	| 'commandant'
	| 'contractor'
	| 'coordinator'
	| 'cursed_blizzard_fake'
	| 'cursed_blizzard'
	| 'demolisher'
	| 'demolitions_expert'
	| 'elder_godfather'
	| 'electrician'
	| 'empyrean_jar_guard_alpha'
	| 'empyrean_jar_guard_eminence_test'
	| 'empyrean_jar_guard_eminence'
	| 'empyrean_jar_guard_omega'
	| 'engineer_archetype'
	| 'engineer'
	| 'equinox_executive'
	| 'executive_founder'
	| 'executive'
	| 'festive_tree_cobalt'
	| 'festive_tree_gold'
	| 'festive_tree_grand'
	| 'festive_tree_green'
	| 'festive_tree_orange'
	| 'festive_tree_red'
	| 'festive_tree_sapling'
	| 'festive_tree_violet'
	| 'festive_tree'
	| 'godfather'
	| 'golden_shotgunner'
	| 'hallowed_stryker'
	| 'handler'
	| 'hatred_gokenin'
	| 'heavy'
	| 'heckerman'
	| 'heckler'
	| 'hellfire_conflagration'
	| 'hellfire'
	| 'high_engineer'
	| 'hitman'
	| 'huge_coordinator'
	| 'huge_demolisher'
	| 'huge_elder_godfather'
	| 'huge_festive_tree'
	| 'huge_godfather'
	| 'huge_heavy'
	| 'huge_heckerman'
	| 'huge_jar_guard'
	| 'huge_mercenary'
	| 'huge_scar'
	| 'huge_server_farm'
	| 'huge_sharpshooter'
	| 'huge_shotgunner'
	| 'huge_zero_two_school'
	| 'invisible_man'
	| 'jar_guard_dull'
	| 'jar_guard_null'
	| 'jar_guard_origin'
	| 'jar_guard_polished'
	| 'jar_guard_precursor'
	| 'jar_guard_progenitor'
	| 'jar_guard_shiniest'
	| 'jar_guard_singularity_test'
	| 'jar_guard_singularity'
	| 'jar_guard_unknown'
	| 'jar_guard'
	| 'killzone_rookie'
	| 'killzone'
	| 'lemonade_stand'
	| 'liferender'
	| 'limeade_stand'
	| 'lord_lucifer_true'
	| 'lord_lucifer'
	| 'lucifer'
	| 'luxurious_festive_tree_glorious'
	| 'luxurious_festive_tree_majestic'
	| 'marksman'
	| 'mechanic'
	| 'mercenary'
	| 'molten_turret'
	| 'mystic_apollo'
	| 'mystic_engineer'
	| 'mystic_heavy'
	| 'mystic_vaporizer'
	| 'mystic_zero_two'
	| 'operative'
	| 'phantom_killzone_test'
	| 'phantom_killzone'
	| 'phase_turret'
	| 'pistolman'
	| 'poacher'
	| 'quantum_stryker'
	| 'quantum_turret'
	| 'radiant_raygunner'
	| 'raygunner_alpha'
	| 'raygunner_mk2'
	| 'raygunner'
	| 'rogue'
	| 'samurai_sentinel'
	| 'sanctified_stryker'
	| 'scar'
	| 'scorcher'
	| 'scrambler'
	| 'server_farm'
	| 'severe_scorcher'
	| 'sharpshooter'
	| 'shotgunner'
	| 'shredder'
	| 'shrine_of_apollo'
	| 'shrine_of_tartarus'
	| 'silver_rogue'
	| 'solar_vaporizer'
	| 'soldier'
	| 'spirit_of_christmas'
	| 'strawberry_lemonade_stand_test'
	| 'strawberry_lemonade_stand'
	| 'stryker'
	| 'stunner'
	| 'summer_stryker'
	| 'summer_zero_two'
	| 'sunshadow_operative'
	| 'super_stryker'
	| 'terroret'
	| 'titanium_turret'
	| 'true_vaporizer'
	| 'turret_overclocked'
	| 'turret'
	| 'two_zero'
	| 'uranium_stryker'
	| 'vaporizer'
	| 'virtual_turret'
	| 'visible_man'
	| 'void_pistolman'
	| 'winter_executive'
	| 'workshop'
	| 'zero_two_school'
	| 'zero_two_supreme'
	| 'zero_two_unknown'
	| 'zero_two';
