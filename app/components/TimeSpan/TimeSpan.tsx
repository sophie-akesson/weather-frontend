'use client';

import { usePathname } from 'next/navigation';

export const TimeSpan = () => {
  const pathname = usePathname();

  return <div>{pathname === '/' ? <h1>Dagens prognos</h1> : <h1>10-dygnsprognos</h1>}</div>;
};
