import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import { TimeSpan } from './TimeSpan';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navigation', () => {
  it('renders successfully', () => {
    const { container } = render(<TimeSpan />);
    expect(container).toBeInTheDocument();
  });

  it('should state timespan of today on start page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { container } = render(<TimeSpan />);
    expect(container.querySelector('h1')).toHaveTextContent('Dagens prognos');
  });

  it('should state timespan of 10 days on details page', () => {
    (usePathname as jest.Mock).mockReturnValue('/stockholm/hours');

    const { container } = render(<TimeSpan />);
    expect(container.querySelector('h1')).toHaveTextContent('10-dygnsprognos');
  });
});
