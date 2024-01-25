import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Navigation } from '@/components/Navigation/Navigation';
import { TimeSpan } from '@/components/TimeSpan/TimeSpan';
import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <TimeSpan />
      <Dropdown options={transformCities(cities)} />
      <Navigation />
    </div>
  );
};
