const enTranslationMessages = require('./translations/en.json');
const ruTranslationMessages = require('./translations/ru.json');
const byTranslationMessages = require('./translations/by.json');
const uaTranslationMessages = require('./translations/ua.json');
const kzTranslationMessages = require('./translations/kz.json');

const DEFAULT_LOCALE = 'en';

const translationMessages = {
  en: enTranslationMessages,
  ru: ruTranslationMessages,
  kz: kzTranslationMessages,
  ua: uaTranslationMessages,
  by: byTranslationMessages,
};

const appLocales = Object.keys(translationMessages);

exports.appLocales = appLocales;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
