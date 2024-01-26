'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Rubik } from 'next/font/google';

import { capitalize } from '@/utils/capitalize';

import styles from './Dropdown.module.css';

const rubik = Rubik({ subsets: ['latin'] });

interface Props {
  options: DropdownOption[];
  label: string;
  city?: string;
}

export interface DropdownOption {
  name: string;
  value: string;
}

export const Dropdown = ({ options, label, city }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [cityState, setCityState] = useState('city');

  const handleDropdownChange = (dropDownValue: string) => {
    if (pathname.includes('hours')) {
      return router.push(encodeURI(`/${dropDownValue.toLowerCase()}/hours`));
    }
    if (pathname.includes('about')) {
      return router.push(encodeURI(`/${dropDownValue.toLowerCase()}/about`));
    }

    return router.push(encodeURI(`/${dropDownValue.toLowerCase()}`));
  };

  useEffect(() => {
    if (city) {
      const capitalizedCity = city !== 'city' ? capitalize(city) : city;
      setCityState(decodeURIComponent(capitalizedCity));
    }
  }, [city]);

  return (
    <select
      className={`${styles.dropdown} ${rubik.className}`}
      name="city"
      value={cityState}
      onChange={(e) => handleDropdownChange(e.target.value)}
    >
      <option value="city" disabled>
        {label}
      </option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
