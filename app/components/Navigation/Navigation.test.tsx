import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import { header } from '../../../translations/sv.json';

import { Navigation } from './Navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navigation', () => {
  it('renders successfully', () => {
    const { container } = render(
      <Navigation
        lang="sv"
        detailedForecastLabel={header.navigation.detailedForecastLabel}
        todaysForecastLabel={header.navigation.todaysForecastLabel}
        aboutLabel={header.navigation.aboutLabel}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should link to details page when on start page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { container } = render(
      <Navigation
        city="stockholm"
        lang="sv"
        detailedForecastLabel={header.navigation.detailedForecastLabel}
        todaysForecastLabel={header.navigation.todaysForecastLabel}
        aboutLabel={header.navigation.aboutLabel}
      />
    );
    expect(container.querySelector('a')?.getAttribute('href')).toEqual('/sv/stockholm/hours');
  });

  it('should link to start page when on details page', () => {
    (usePathname as jest.Mock).mockReturnValue('sv/stockholm/hours');

    const { container } = render(
      <Navigation
        city="stockholm"
        lang="sv"
        detailedForecastLabel={header.navigation.detailedForecastLabel}
        todaysForecastLabel={header.navigation.todaysForecastLabel}
        aboutLabel={header.navigation.aboutLabel}
      />
    );
    expect(container.querySelector('a')?.getAttribute('href')).toEqual('/sv/stockholm');
  });
});
