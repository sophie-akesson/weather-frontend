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
      {pathname === '/' ? (
        <Link href={`${city.toLocaleLowerCase()}/hours`}>10-dygnsprognos</Link>
      ) : (
        <Link href="/">Dagens prognos</Link>
      )}
      <Link href="/about">Om denna sida</Link>
    </nav>
  );
};
