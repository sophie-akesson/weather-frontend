import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { CityProvider } from '@/utils/cityContext';
import { Header } from '@/components/Header/Header';

import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Väder frontend',
  description: 'En applikation som presenterar väder med data från SMHI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <CityProvider>
          <Header />
          {children}
        </CityProvider>
      </body>
    </html>
  );
}
