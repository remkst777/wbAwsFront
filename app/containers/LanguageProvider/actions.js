import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export function changeLocale(languageLocale) {
  localStorage.setItem('locale', languageLocale || DEFAULT_LOCALE);
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
