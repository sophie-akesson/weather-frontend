'use server';

const translations = {
  en: () => import('../../translations/en.json').then((module) => module.default),
  sv: () => import('../../translations/sv.json').then((module) => module.default),
};

export const getTranslation = async (locale: keyof typeof translations) => translations[locale]();
