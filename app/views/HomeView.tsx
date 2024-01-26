'use client';

import { useEffect, useState } from 'react';

import { cities } from '@/utils/cities';
import { getForecast } from '@/utils/smhiService';
import { Name, SMHIServiceResponse } from '@/types/smhiServiceResponse';
import { getAccumulatedPrecipitation, getHighestValue } from '@/utils/transformDayForecast';
import { Card } from '@/components/Card/Card';
import { Header } from '@/components/Header/Header';
import { capitalize } from '@/utils/capitalize';

import styles from './HomeView.module.css';

interface Props {
  translations: any;
  lang: string;
  city?: string;
}

export default function HomeView({ translations, lang, city }: Props) {
  const [forecast, setForecast] = useState<SMHIServiceResponse>();
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');
  const [precipitation, setPrecipitation] = useState('');
  const [wind, setWind] = useState('');
  const [humidity, setHumidity] = useState('');

  const getCityData = async (dropdownCity: string) => {
    const selectedCity = cities.find((city) => city.name === dropdownCity);

    if (typeof selectedCity === 'undefined') return;

    const data = await getForecast(selectedCity.longitude, selectedCity.latitude);

    setForecast(data);
  };

  useEffect(() => {
    if (city) {
      const capitalizedCity = capitalize(city);
      getCityData(decodeURIComponent(capitalizedCity));
    }
  }, [city]);

  useEffect(() => {
    if (forecast) {
      const highestTemperature = getHighestValue(forecast, Name.T);
      setTemperature(highestTemperature.parameter.toString());
      setIcon(highestTemperature.wsymb2Value.toString());

      const highestPrecipitation = getAccumulatedPrecipitation(forecast);
      setPrecipitation(highestPrecipitation.toString());

      const highestWind = getHighestValue(forecast, Name.Ws);
      setWind(highestWind.parameter.toString());

      const highestHumidity = getHighestValue(forecast, Name.R);
      setHumidity(highestHumidity.parameter.toString());
    }
  }, [forecast]);

  return (
    <>
      <Header translations={translations.header} lang={lang} city={city} />
      <main>
        <div className={styles.container}>
          <Card label={translations.home.temp} value={temperature} icon={icon} type="temp" />
          <Card
            label={translations.home.precipitation}
            value={precipitation}
            type="precipitation"
          />
          <Card label={translations.home.wind} value={wind} type="wind" />
          <Card label={translations.home.humidity} value={humidity} type="humidity" />
        </div>
      </main>
    </>
  );
}
