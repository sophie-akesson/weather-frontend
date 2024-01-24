import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Navigation } from '@/components/Navigation/Navigation';
import { TimeSpan } from '@/components/TimeSpan/TimeSpan';
import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

export const Header = () => {
  return (
    <div>
      <Dropdown options={transformCities(cities)} />
      <TimeSpan />
      <Navigation />
    </div>
  );
};
