'use client';

import { useEffect, useState } from 'react';

import { getForecast } from '@/utils/smhiService';
import { cities } from '@/utils/cities';
import { Forecast, transformHoursForecast } from '@/utils/transformHoursForecast';
import { Table } from '@/components/Table/Table';
import { Header } from '@/components/Header/Header';
import { capitalize } from '@/utils/capitalize';

interface Props {
  lang: string;
  translations: any;
  city: string;
}

export default function DetailedView({ translations, lang, city }: Props) {
  const [forecast, setForecast] = useState<Forecast[]>();

  const getCityData = async (dropdownCity: string) => {
    const selectedCity = cities.find((city) => city.name === dropdownCity);

    if (typeof selectedCity === 'undefined') return;

    const data = await getForecast(selectedCity.longitude, selectedCity.latitude);

    const transformedData = transformHoursForecast(data);
    setForecast(transformedData);
  };

  useEffect(() => {
    if (city) {
      const capitalizedCity = capitalize(city);
      getCityData(decodeURIComponent(capitalizedCity));
    }
  }, [city]);

  return (
    <>
      <Header translations={translations.header} lang={lang} city={city} />
      <main>
        <Table
          timeLabel={translations.table.timeLabel}
          tempLabel={translations.table.tempLabel}
          ariaPrecipitationLabel={translations.table.ariaPrecipitationLabel}
          longPrecipitationLabel={translations.table.longPrecipitationLabel}
          shortPrecipitationLabel={translations.table.shortPrecipitationLabel}
          windLabel={translations.table.windLabel}
          humiditylabel={translations.table.humiditylabel}
          forecast={forecast}
        />
      </main>
    </>
  );
}
