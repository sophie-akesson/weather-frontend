'use client';

import { usePathname } from 'next/navigation';

export const TimeSpan = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === '/' ? <h1>Dagens prognos</h1> : null}
      {pathname && pathname.includes('hours') ? <h1>10-dygnsprognos</h1> : null}
      {pathname === '/about' ? <h1>Om denna sida</h1> : null}
    </div>
  );
};
