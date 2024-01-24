'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { ICityContext, useCityContext } from '@/utils/cityContext';
import { capitalize } from '@/utils/capitalize';

interface Props {
  options: DropdownOption[];
}

export interface DropdownOption {
  name: string;
  value: string;
}

export const Dropdown = ({ options }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { cityState, setCity } = useCityContext() as ICityContext;

  const handleDropdownChange = (city: string) => {
    setCity(city);
  };

  useEffect(() => {
    if (cityState === 'stad' && pathname && pathname.includes('hours')) {
      const firstPath = decodeURI(pathname.split('/')[1]);

      if (firstPath === 'stad') return;

      setCity(capitalize(firstPath));
    }
  }, [cityState, pathname, setCity]);

  useEffect(() => {
    if (cityState !== 'stad' && pathname && pathname.includes('hours')) {
      router.push(encodeURI(`/${cityState.toLocaleLowerCase()}/hours`));
    }
  }, [cityState, pathname, router]);

  return (
    <select name="city" value={cityState} onChange={(e) => handleDropdownChange(e.target.value)}>
      <option value="stad" disabled>
        Stad
      </option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
