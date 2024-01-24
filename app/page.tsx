'use client';

import { useState } from 'react';

import { cities } from '@/lib/cities';
import { Header } from '@/components/Header/Header';
import { getForecast } from '@/lib/smhiService';
import { SMHIServiceResponse } from '@/types/smhiServiceResponse';

export default function Home() {
  const [forecast, setForecast] = useState<SMHIServiceResponse>();

  const getCityData = async (dropdownCity: string) => {
    const selectedCity = cities.find((city) => city.name === dropdownCity);

    if (typeof selectedCity === 'undefined') return;

    const data = await getForecast(selectedCity.longitude, selectedCity.latitude);

    setForecast(data);
  };

  return (
    <>
      <Header handleCityChange={getCityData} />
      <main>
        <p>Väder från SMHI</p>
        {forecast ? <p>{forecast.geometry.coordinates[0]}</p> : null}
      </main>
    </>
  );
}
