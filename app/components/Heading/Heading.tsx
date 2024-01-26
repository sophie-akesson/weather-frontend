'use client';

import { usePathname } from 'next/navigation';

import styles from './Heading.module.css';

interface Props {
  heading: string;
  detailedHeading: string;
  about: string;
}

export const Heading = ({ heading, about, detailedHeading }: Props) => {
  const pathname = usePathname();

  return (
    <div className={styles.heading}>
      {pathname && pathname.includes('about') ? <h1 className={styles.heading}>{about}</h1> : null}
      {pathname && pathname.includes('hours') ? (
        <h1 className={styles.heading}>{detailedHeading}</h1>
      ) : null}
      {pathname && !pathname.includes('hours') && !pathname.includes('about') ? (
        <h1 className={styles.heading}>{heading}</h1>
      ) : null}
    </div>
  );
};
