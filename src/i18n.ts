import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enMonths from '@locales/en/months.json';
import viMonths from '@locales/vi_VN/months.json';

export const resources = {
  ['en-GB']: {
    translation: {
      ...enMonths,
    },
  },
  ['vi-VN']: {
    translation: {
      ...viMonths,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en-GB',
  returnEmptyString: false,
  compatibilityJSON: 'v3',
  partialBundledLanguages: true,
  ns: [],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
