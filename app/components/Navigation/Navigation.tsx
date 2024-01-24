'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ICityContext, useCityContext } from '@/utils/cityContext';

export const Navigation = () => {
  const pathname = usePathname();
  const { cityState } = useCityContext() as ICityContext;
  const href = cityState ? `${cityState.toLocaleLowerCase()}/hours` : 'city/hours';

  return (
    <nav>
      {pathname === '/' ? <Link href={href}>10-dygnsprognos</Link> : null}
      {pathname && pathname.includes('hours') ? <Link href="/">Dagens prognos</Link> : null}
      {pathname === '/about' ? (
        <div>
          <Link href="/">Dagens prognos</Link>
          <Link href={href}>10-dygnsprognos</Link>
        </div>
      ) : null}
      <Link href="/about">Om denna sida</Link>
    </nav>
  );
};
