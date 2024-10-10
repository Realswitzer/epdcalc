import { enUS } from './locale/enUS';
import { locale } from './types';

const localization_object: locale = enUS;
const default_locale: locale = enUS;

export function localize(key: string): string {
	return localization_object[key as keyof locale] || default_locale[key as keyof locale] || key;
}
