'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  city: string;
}

export const Navigation = ({ city }: Props) => {
  const pathname = usePathname();

  return (
    <nav>
      {city && pathname !== null && pathname.includes('/') ? (
        <Link href={`${city.toLocaleLowerCase()}/hours`}>10-dygnsprognos</Link>
      ) : null}
      {city && pathname !== null && pathname.includes('hours') ? (
        <Link href="/">Dagens prognos</Link>
      ) : null}
      <Link href="/about">Om denna sida</Link>
    </nav>
  );
};
