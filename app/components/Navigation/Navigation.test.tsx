import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import { Navigation } from './Navigation';

const mockCity = 'Stockholm';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navigation', () => {
  it('renders successfully', () => {
    const { container } = render(<Navigation city={mockCity} />);
    expect(container).toBeInTheDocument();
  });

  it('should link to details page when on start page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { container } = render(<Navigation city={mockCity} />);
    expect(container.querySelector('a')?.getAttribute('href')).toEqual('stockholm/hours');
  });

  it('should link to start page when on details page', () => {
    (usePathname as jest.Mock).mockReturnValue('/stockholm/hours');

    const { container } = render(<Navigation city={mockCity} />);
    expect(container.querySelector('a')?.getAttribute('href')).toEqual('/');
  });
});
