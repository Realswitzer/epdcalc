import { type Tower } from '../../types';

// TODO: add stats
export const quantum_stryker: Tower = [
  {
    damage: 18,
    crit_chance: 0.15,
    crit_dmg: 10,
    cooldown: 4,
    range: 999,
    exclusion: 180,
    radius: 30,
    inaccuracy: 15,
    bleed: 1,
    rad_strength: 0.2,
    rad_length: 2,
    shredding: 0.15,
    shredding_length: 2.5,
    all_seeing: 1e100, // no idea on this or stats after it.
    price: 13_660
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    // i sure hope this is 7b otherwise ill look real stupid
    damage: 3_200,
    crit_chance: 0.7,
    crit_dmg: 25,
    cooldown: 1.8,
    range: 999,
    exclusion: 180,
    radius: 45,
    inaccuracy: 5
    // ok nvm he didnt scroll down either.
  }
];
