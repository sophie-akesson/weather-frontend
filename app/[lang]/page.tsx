import HomeView from '@/views/HomeView';

import { getTranslation } from './translations';

interface Language {
  params: {
    lang: any;
    city: string;
  };
}

export default async function Home({ params: { lang, city } }: Language) {
  const translations = await getTranslation(lang);

  return <HomeView translations={translations} lang={lang} city={city} />;
}
