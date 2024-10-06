export interface TowerUpgrade {
	acceleration?: number;
	aim?: number;
	all_seeing?: number;
	armor_destruction?: number;
	armor_piercing?: boolean;
	beams?: number;
	bleed?: number;
	boss_slayer?: number;
	bounty_add?: number;
	bounty_amp?: number;
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
	exclusion?: number;
	execution?: number;
	hollow_point?: number;
	inaccuracy?: number;
	income?: number;
	instabreak?: number;
	interest?: number;
	intimidation?: number;
	max_cooldown?: number;
	max_dmg_increase?: number;
	max_interest?: number;
	max_spawns?: number;
	min_cooldown?: number;
	min_dmg_increase?: number;
	oblivion?: number;
	paralyze?: number;
	price?: number;
	first_strike?: number;
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
	soul_damage?: number;
	spawns_cd?: number;
	spawns_damage?: number;
	spawns_range?: number;
	stun?: number;
	targeting_rate?: number;
	taxxing?: number;
	upgrade_reduction?: number;
	valor?: number;
	shredding?: number;
	shredding_length?: number;
	burn_damage?: number;
	burn_time?: number;
	frostbite?: number;
	departure?: number;
	frost_time?: number;
	bliz_length?: number;
	bliz_radius?: number;
	leech?: number;
	bleed_increase?: number;
}
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
export enum Upgrade {
	'Level1',
	'Level2',
	'Level3',
	'Level4',
	'Level5',
	'Level6',
	'Level7a',
	'Level7b',
	'level7c',
	'level7d',
	'level7e'
}
export interface TowerInfo {
	Name: string;
	Rarity: Rarity;
	Type: TowerType | TowerType[];
	GeneratorType?: GeneratorType;
}
export enum Rarity {
	Standard = 'Standard',
	Exalted = 'Exalted',
	Prestigious = 'Prestigious',
	Unknown2 = '???',
	Lustrous = 'Lustrous',
	Unknown = 'Unknown',
	Synthesized = 'Synthesized',
	Majestic = 'Majestic',
	Elusive = 'Elusive',
	Fabled = 'Fabled',
	Legendary = 'Legendary',
	Illustrious = 'Illustrious',
	Fusion = 'Fusion',
	Exotic = 'Exotic',
	ElusiveStandard = 'Elusive/Standard',
	Prime = 'Prime',
	Prototype = 'Prototype'
}
export enum TowerType {
	Offense = 'Offense',
	Support = 'Support',
	Generator = 'Generator',
	Defense = 'Defense',
	UNKNOWN_TYPE = 'UNKNOWN_TYPE' // placeholder for towers i dont have and cant have someone check it for me
}
export enum GeneratorType {
	Wave = 'Wave',
	Time = 'Time'
}

// what is a better way to do this :sob:
type TowerName =
	| 'adamant_styker'
	| 'alchemist'
	| 'anarchist'
	| 'apollos_blessing'
	| 'ashigaru'
	| 'bombarder'
	| 'casual_zero_two'
	| 'chief_executive_officer'
	| 'commandant'
	| 'contractor'
	| 'coordinator'
	| 'demolisher'
	| 'elder_godfather'
	| 'electrician'
	| 'engineer_archetype'
	| 'engineer'
	| 'executive'
	| 'godfather'
	| 'hatred_gokenin'
	| 'heavy'
	| 'heckerman'
	| 'heckler'
	| 'high_engineer'
	| 'huge_elder_godfather'
	| 'huge_heavy'
	| 'huge_heckerman'
	| 'killzone_rookie'
	| 'killzone'
	| 'lemonade_stand'
	| 'marksman'
	| 'mechanic'
	| 'mercenary'
	| 'mystic_vaporizer'
	| 'phase_turret'
	| 'pistolman'
	| 'quantum_turret'
	| 'mystic_zero_two'
	| 'uranium_stryker'
	| 'raygunner_alpha'
	| 'raygunner'
	| 'rogue'
	| 'samurai_sentinel'
	| 'sanctified_stryker'
	| 'scar'
	| 'scorcher'
	| 'server_farm'
	| 'sharpshooter'
	| 'shotgunner'
	| 'shrine_of_apollo'
	| 'soldier'
	| 'stryker'
	| 'stunner'
	| 'summer_stryker'
	| 'sunshadow_operative'
	| 'super_stryker'
	| 'titanium_turret'
	| 'true_vaporizer'
	| 'turret'
	| 'vaporizer'
	| 'visible_man'
	| 'zero_two_school'
	| 'zero_two_supreme'
	| 'zero_two_unknown'
	| 'zero_two'
	| 'angelic_warrior'
	| 'shredder'
	| 'assassin'
	| 'capitalist'
	| 'handler'
	| 'blizzard'
	| 'scrambler'
	| 'golden_shotgunner'
	| 'silver_rogue'
	| 'void_pistolman'
	| 'hellfire'
	| 'workshop'
	| 'invisible_man'
	| 'poacher'
	| 'operative'
	| 'bloodsucker'
	| 'lucifer'
	| 'jar_guard'
	| 'jar_guard_dull'
	| 'jar_guard_polished'
	| 'huge_jar_guard'
	| 'festive_tree'
	| 'festive_tree_sapling'
	| 'huge_festive_tree'
	| 'festive_tree_grand'
	| 'jar_guard_unknown'
	| 'mystic_heavy'
	| 'huge_scar'
	| 'huge_demolisher'
	| 'huge_godfather'
	| 'huge_server_farm'
	| 'huge_mercenary'
	| 'huge_coordinator'
	| 'huge_sharpshooter'
	| 'huge_shotgunner'
	| 'spirit_of_christmas'
	| 'hellfire_conflagration'
	| 'turret_overclocked'
	| 'executive_founder'
	| 'mystic_apollo'
	| 'liferender'
	| 'limeade_stand'
	| 'alien_raygunner'
	| 'empyrean_jar_guard_omega'
	| 'phantom_killzone'
	| 'empyrean_jar_guard_alpha'
	| 'empyrean_jar_guard_eminence'
	| 'arcane_blizzard'
	| 'luxurious_festive_tree_glorious'
	| 'luxurious_festive_tree_majestic'
	| 'empyrean_jar_guard_eminence_test'
	| 'phantom_killzone_test'
	| 'cursed_blizzard'
	| 'lord_lucifer'
	| 'equinox_executive'
	| 'blazing_apollo'
	| 'severe_scorcher'
	| 'strawberry_lemonade_stand'
	| 'terroret'
	| 'solar_vaporizer'
	| 'radiant_raygunner'
	| 'molten_turret'
	| 'two_zero'
	| 'hallowed_stryker'
	| 'summer_zero_two'
	| 'virtual_turret'
	| 'lord_lucifer_true'
	| 'archangel_lucifer_sublime'
	| 'archangel_lucifer_divine'
	| 'shrine_of_tartarus'
	| 'jar_guard_precursor'
	| 'jar_guard_progenitor'
	| 'jar_guard_singularity'
	| 'jar_guard_origin'
	| 'jar_guard_null'
	| 'jar_guard_shiniest'
	| 'cursed_blizzard_fake'
	| 'winter_executive'
	| 'festive_tree_red'
	| 'festive_tree_green'
	| 'festive_tree_violet'
	| 'festive_tree_orange'
	| 'festive_tree_cobalt'
	| 'festive_tree_gold'
	| 'jar_guard_singularity_test'
	| 'strawberry_lemonade_stand_test'
	| 'quantum_stryker'
	| 'mystic_engineer'
	| 'demolitions_expert'
	| 'hitman'
	| 'abyssal'
	| 'code_0_0_2'
	| 'huge_zero_two_school'
	| 'raygunner_mk2';

export type ShopCategory = {
	[key in TowerName]?: number;
};
export type SalvageCategory = {
	[key in TowerName]?: [number, number];
};
export type Blueprint = {
	[key in TowerName]?: number;
};
