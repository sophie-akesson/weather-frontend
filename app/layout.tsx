import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import './globals.css';
import { CityProvider } from './lib/CityContext';
import { Header } from './components/Header/Header';

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
