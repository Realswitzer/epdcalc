import { type TowerUpgrade, type Tower } from '../types';
import { Time, Wave } from './income';

export const efficiency = {
	TimeUpgrade: function (tower: TowerUpgrade) {
		return tower.price / Time(tower);
	},
	TimeUpgradeTower: function (tower: Tower) {},
	WaveUpgrade: function (tower: TowerUpgrade) {
		return tower.price / Wave(tower);
	}
};
