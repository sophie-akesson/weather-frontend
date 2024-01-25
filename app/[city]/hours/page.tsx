'use client';

import { useEffect, useState } from 'react';

import { getForecast } from '@/utils/smhiService';
import { cities } from '@/utils/cities';
import { ICityContext, useCityContext } from '@/utils/cityContext';
import { Forecast, transformHoursForecast } from '@/utils/transformHoursForecast';
import { Table } from '@/components/Table/Table';

interface Hours {
  params: {
    city: string;
  };
}

export default function Hours() {
  const { cityState } = useCityContext() as ICityContext;
  const [forecast, setForecast] = useState<Forecast[]>();

  const getCityData = async (dropdownCity: string) => {
    const selectedCity = cities.find((city) => city.name === dropdownCity);

    if (typeof selectedCity === 'undefined') return;

    const data = await getForecast(selectedCity.longitude, selectedCity.latitude);

    const transformedData = transformHoursForecast(data);
    setForecast(transformedData);
  };

  useEffect(() => {
    console.log(forecast);
  }, [forecast]);

  useEffect(() => {
    getCityData(cityState);
  }, [cityState]);

  return (
    <main>
      <Table forecast={forecast} />
    </main>
  );
}
