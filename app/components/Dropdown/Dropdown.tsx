'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Rubik } from 'next/font/google';

import { ICityContext, useCityContext } from '@/utils/cityContext';
import { capitalize } from '@/utils/capitalize';

import styles from './Dropdown.module.css';

const rubik = Rubik({ subsets: ['latin'] });

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
    <select
      className={`${styles.dropdown} ${rubik.className}`}
      name="city"
      value={cityState}
      onChange={(e) => handleDropdownChange(e.target.value)}
    >
      <option value="stad" disabled>
        Ingen stad vald
      </option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
