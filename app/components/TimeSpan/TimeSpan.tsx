'use client';

import { usePathname } from 'next/navigation';

import styles from './TimeSpan.module.css';

export const TimeSpan = () => {
  const pathname = usePathname();

  return (
    <div className={styles.timespan}>
      {pathname === '/' ? <h1 className={styles.heading}>Dagens prognos</h1> : null}
      {pathname && pathname.includes('hours') ? (
        <h1 className={styles.heading}>10-dygnsprognos</h1>
      ) : null}
      {pathname === '/about' ? <h1 className={styles.heading}>Om denna sida</h1> : null}
    </div>
  );
};
