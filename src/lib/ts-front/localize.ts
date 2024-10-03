import { enUS } from './enUS.ts';

let localization_object: any = enUS;

export function localize(key: string): string {
	return localization_object[key] || key;
}
