import React, { createContext } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import { Navigation } from './Navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('../../utils/cityContext', () => ({
  useCityContext: () => {
    return {
      cityState: 'Stockholm',
    };
  },
}));

describe('Navigation', () => {
  it('renders successfully', () => {
    const { container } = render(<Navigation />);
    expect(container).toBeInTheDocument();
  });

  it('should link to details page when on start page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { container } = render(<Navigation />);
    expect(container.querySelector('a')?.getAttribute('href')).toEqual('stockholm/hours');
  });

  it('should link to start page when on details page', () => {
    (usePathname as jest.Mock).mockReturnValue('/stockholm/hours');

    const { container } = render(<Navigation />);
    expect(container.querySelector('a')?.getAttribute('href')).toEqual('/');
  });
});
