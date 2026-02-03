import { type ShopCategory } from '../types';

export const blueprints: ShopCategory = {
  adamant_styker: 2_150,
  alchemist: 555,
  apollos_blessing: 4_500,
  casual_zero_two: 3_050,
  chief_executive_officer: 1_875,
  code_0_0_2: 2_200,
  engineer_archetype: 2_600,
  executive_founder: 4_380,
  high_engineer: 1_650,
  huge_heckerman: 16_950,
  huge_zero_two_school: 8_025,
  killzone: 320,
  killzone_rookie: 3_100,
  mechanic: 2_100,
  mystic_apollo: 7_780,
  mystic_zero_two: 10_250,
  quantum_stryker: 5_700,
  quantum_turret: 3_950,
  raygunner_alpha: 2_400,
  // TODO: find price
  raygunner_mk2: 999999,
  shrine_of_apollo: 350,
  stryker: 200,
  super_stryker: 1_925,
  titanium_turret: 3_800,
  true_vaporizer: 1_475,
  turret_overclocked: 3_860,
  turret: 300,
  // TODO: find price
  uranium_stryker: 999999,
  zero_two_school: 2_725,
  zero_two: 220
};
export const exalteds: ShopCategory = {
  adamant_styker: 16_300,
  apollos_blessing: 29_900,
  casual_zero_two: 19_200,
  chief_executive_officer: 13_800,
  high_engineer: 13_200,
  raygunner_mk2: 12_700,
  super_stryker: 14_200,
  titanium_turret: 25_600,
  // todo: find price
  true_vaporizer: 9999999,
  zero_two_school: 18_100
};
export const majestic: ShopCategory = {
  heckerman: 1_420
};
export const prestigious: ShopCategory = {
  alchemist: 5_555,
  engineer: 1_200,
  executive: 1_400,
  killzone: 2_375,
  raygunner: 1_300,
  shrine_of_apollo: 2_550,
  stryker: 1_525,
  turret: 2_050,
  vaporizer: 1_000,
  zero_two: 1_675
};

export const regular: ShopCategory = {
  ...prestigious,
  ...majestic
};
