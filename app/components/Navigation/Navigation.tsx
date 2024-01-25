'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ICityContext, useCityContext } from '@/utils/cityContext';

import styles from './Navigation.module.css';

export const Navigation = () => {
  const pathname = usePathname();
  const { cityState } = useCityContext() as ICityContext;
  const href = cityState ? `${cityState.toLocaleLowerCase()}/hours` : 'city/hours';

  return (
    <nav className={styles.navigation}>
      {pathname === '/' ? (
        <Link className={styles.link} href={href}>
          10-dygnsprognos
        </Link>
      ) : null}
      {pathname && pathname.includes('hours') ? (
        <Link className={styles.link} href="/">
          Dagens prognos
        </Link>
      ) : null}
      {pathname === '/about' ? (
        <>
          <Link className={styles.link} href="/">
            Dagens prognos
          </Link>
          <Link className={styles.link} href={href}>
            10-dygnsprognos
          </Link>
        </>
      ) : null}
      <Link className={styles.link} href="/about">
        Om denna sida
      </Link>
    </nav>
  );
};
