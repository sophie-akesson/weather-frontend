import { getTranslation } from '@/[lang]/translations';
import DetailedView from '@/views/DetailedView';

interface Language {
  params: {
    lang: any;
    city: string;
  };
}

export default async function Hours({ params: { lang, city } }: Language) {
  const translations = await getTranslation(lang);

  return <DetailedView translations={translations} lang={lang} city={city} />;
}
