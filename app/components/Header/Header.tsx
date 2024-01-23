'use client';

import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Navigation } from '@/components/Navigation/Navigation';
import { TimeSpan } from '@/components/TimeSpan/TimeSpan';
import { cities } from '@/lib/cities';
import { ICityContext, useCityContext } from '@/lib/CityContext';
import { transformCities } from '@/lib/transformCities';

export const Header = () => {
  const { cityState, setCity } = useCityContext() as ICityContext;

  const handleDropdownChange = (city: string): void => {
    setCity(city);
  };

  return (
    <div>
      <Dropdown options={transformCities(cities)} handleDropdownChange={handleDropdownChange} />
      <TimeSpan />
      <Navigation city={cityState} />
    </div>
  );
};
