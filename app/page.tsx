'use client';

import { useEffect, useState } from 'react';

import { cities } from '@/utils/cities';
import { getForecast } from '@/utils/smhiService';
import { Name, SMHIServiceResponse } from '@/types/smhiServiceResponse';
import { getAccumulatedPrecipitation, getHighestValue } from '@/utils/transformDayForecast';
import { Card } from '@/components/Card/Card';
import { ICityContext, useCityContext } from '@/utils/cityContext';

import styles from './page.module.css';

export default function Home() {
  const { cityState } = useCityContext() as ICityContext;
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

    console.log(data);
    setForecast(data);
  };

  useEffect(() => {
    getCityData(cityState);
  }, [cityState]);

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
    <main>
      <div className={styles.container}>
        <Card label="Temperatur" value={temperature} icon={icon} />
        <Card label="Nederbörd" value={precipitation} />
        <Card label="Vindstyrka" value={wind} />
        <Card label="Luftfuktighet" value={humidity} />
      </div>
    </main>
  );
}
