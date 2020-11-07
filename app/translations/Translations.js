import memoize from 'lodash.memoize';
import i18n from 'i18n-js';

const DEFAULT_LANGUAGE = 'hr';

export const translations = {
  en: () => require ('./locales/en.json'),
  hr: () => require ('./locales/hr.json'),
};

export const LocalizedStrings = memoize (
  (key, config) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

export const initLocalization = (lang) => {
  let localeLanguage = lang == null ? DEFAULT_LANGUAGE : lang;

  LocalizedStrings.cache.clear();

  i18n.translations = {
    [localeLanguage]: translations[localeLanguage](),
  };
  i18n.locale = localeLanguage;
};
