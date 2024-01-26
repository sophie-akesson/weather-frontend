import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Navigation } from '@/components/Navigation/Navigation';
import { Heading } from '@/components/Heading/Heading';
import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import styles from './Header.module.css';
interface Props {
  translations: {
    heading: string;
    detailedHeading: string;
    about: string;
    dropdownLabel: string;
    navigation: {
      detailedForecastLabel: string;
      todaysForecastLabel: string;
      aboutLabel: string;
    };
  };
  lang: string;
  city?: string;
}

export const Header = ({ translations, lang, city }: Props) => {
  return (
    <div className={styles.header}>
      <Heading
        heading={translations.heading}
        detailedHeading={translations.detailedHeading}
        about={translations.about}
      />
      <Dropdown options={transformCities(cities)} label={translations.dropdownLabel} city={city} />
      <Navigation
        detailedForecastLabel={translations.navigation.detailedForecastLabel}
        todaysForecastLabel={translations.navigation.todaysForecastLabel}
        aboutLabel={translations.navigation.aboutLabel}
        lang={lang}
        city={city}
      />
    </div>
  );
};
