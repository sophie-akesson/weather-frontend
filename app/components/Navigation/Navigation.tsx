'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { SvgEn } from '@/components/Svg/SvgEn';
import { SvgSv } from '@/components/Svg/SvgSv';

import styles from './Navigation.module.css';

interface Props {
  detailedForecastLabel: string;
  todaysForecastLabel: string;
  aboutLabel: string;
  lang: string;
  city?: string;
}

export const Navigation = ({
  detailedForecastLabel,
  todaysForecastLabel,
  aboutLabel,
  lang,
  city,
}: Props) => {
  const pathname = usePathname();
  const [href, setHref] = useState('city');
  const [langHref, setLangHref] = useState('sv');

  useEffect(() => {
    if (city) {
      const href = `${lang}/${city}`;

      setHref(href);
    }

    if (pathname && lang) {
      const replacedHref = pathname.replace(lang, lang === 'sv' ? 'en' : 'sv');
      setLangHref(replacedHref);
    }
  }, [city, lang, pathname]);

  return (
    <nav className={styles.navigation}>
      {pathname && pathname.includes('hours') ? (
        <>
          <Link className={styles.link} href={`/${href}`}>
            {todaysForecastLabel}
          </Link>
          <Link className={styles.link} href={`/${href}/about`}>
            {aboutLabel}
          </Link>
        </>
      ) : null}
      {pathname && pathname.includes('about') ? (
        <>
          <Link className={styles.link} href={`/${href}`}>
            {todaysForecastLabel}
          </Link>
          <Link className={styles.link} href={`/${href}/hours`}>
            {detailedForecastLabel}
          </Link>
        </>
      ) : null}
      {pathname && !pathname.includes('hours') && !pathname.includes('about') ? (
        <>
          <Link className={styles.link} href={`/${href}/hours`}>
            {detailedForecastLabel}
          </Link>
          <Link className={styles.link} href={`/${href}/about`}>
            {aboutLabel}
          </Link>
        </>
      ) : null}
      <Link className={styles.link} href={langHref}>
        {lang === 'sv' ? (
          <SvgEn className={styles.icon} aria-label="Change language to English" />
        ) : (
          <SvgSv className={styles.icon} aria-label="Byt språk till Svenska" />
        )}
      </Link>
    </nav>
  );
};
