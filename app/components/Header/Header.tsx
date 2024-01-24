'use client';

import { useState } from 'react';

import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Navigation } from '@/components/Navigation/Navigation';
import { TimeSpan } from '@/components/TimeSpan/TimeSpan';
import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

interface Props {
  handleCityChange: (city: string) => void;
}

export const Header = ({ handleCityChange }: Props) => {
  const [city, setCity] = useState('');

  const updateCity = (value: string) => {
    setCity(value);
    handleCityChange(value);
  };

  return (
    <div>
      <Dropdown options={transformCities(cities)} handleDropdownChange={updateCity} />
      <TimeSpan />
      <Navigation city={city} />
    </div>
  );
};
