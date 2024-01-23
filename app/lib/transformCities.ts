import { DropdownOption } from '@/components/Dropdown/Dropdown';
import { City } from '@/types/city';

export const transformCities = (cities: City[]): DropdownOption[] => {
  return cities.map((city) => {
    return { name: city.name, value: city.name };
  });
};
