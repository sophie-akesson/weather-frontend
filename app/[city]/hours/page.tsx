'use client';

import { useEffect, useState } from 'react';

import { getForecast } from '@/utils/smhiService';
import { cities } from '@/utils/cities';
import { ICityContext, useCityContext } from '@/utils/cityContext';
import { TransformedForecast, transformHoursForecast } from '@/utils/transformHoursForecast';

interface Hours {
  params: {
    city: string;
  };
}

export default function Hours() {
  const { cityState } = useCityContext() as ICityContext;
  const [forecast, setForecast] = useState<TransformedForecast[]>();

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
      {cityState && cityState !== 'stad' ? <h1>{cityState} timme för timme</h1> : null}
      {forecast
        ? forecast.map((entry) => {
            return (
              <div key={entry.formattedTime}>
                <p>{entry.formattedTime}</p>
                <p>{entry.t}</p>
                <p>{entry.pmin}</p>
                <p>{entry.ws}</p>
                <p>{entry.r}</p>
                <p>{entry.Wsymb2}</p>
              </div>
            );
          })
        : null}
    </main>
  );
}
