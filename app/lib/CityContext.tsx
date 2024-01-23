'use client';

import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

export interface ICityContext {
  cityState: string;
  setCity: (city: string) => void;
}

const CityContext = createContext<ICityContext | null>(null);

export function useCityContext() {
  return useContext(CityContext);
}

export function CityProvider({ children }: PropsWithChildren) {
  const [cityState, setCity] = useState('');

  const value = useMemo(() => ({ cityState, setCity }), [cityState]);

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}
