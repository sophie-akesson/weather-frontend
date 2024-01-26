import { getTranslation } from '@/[lang]/translations';
import { Header } from '@/components/Header/Header';

import styles from './page.module.css';

interface Language {
  params: {
    lang: any;
    city: string;
  };
}

export default async function About({ params: { lang, city } }: Language) {
  const translations = await getTranslation(lang);

  return (
    <>
      <Header translations={translations.header} lang={lang} city={city} />
      <main>
        <div className={styles.about}>
          <p>{translations.about.paragraphOne}</p>
          <p>{translations.about.paragraphTwo}</p>
          <p>{translations.about.paragraphThree}</p>
        </div>
      </main>
    </>
  );
}
