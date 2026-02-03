import { Rad } from '../formulas';
import { apollos_blessing } from '../Towers/exalted';
import { uranium_stryker } from '../Towers/fabled';
import { TowerUpgrade, Upgrade } from '../types';

console.log(Rad(apollos_blessing[Upgrade.Level7a]));
console.log(Rad(apollos_blessing[Upgrade.Level7b]));
console.log(Rad(uranium_stryker[Upgrade.Level7a]));
console.log(Rad(uranium_stryker[Upgrade.Level7b]));
