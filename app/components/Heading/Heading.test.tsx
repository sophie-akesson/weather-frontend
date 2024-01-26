import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';

import { header } from '../../../translations/sv.json';

import { Heading } from './Heading';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Heading', () => {
  it('renders successfully', () => {
    const { container } = render(
      <Heading
        heading={header.heading}
        detailedHeading={header.detailedHeading}
        about={header.about}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should state heading of today on start page', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    const { container } = render(
      <Heading
        heading={header.heading}
        detailedHeading={header.detailedHeading}
        about={header.about}
      />
    );
    expect(container.querySelector('h1')).toHaveTextContent('Dagens prognos');
  });

  it('should state heading of 10 days on details page', () => {
    (usePathname as jest.Mock).mockReturnValue('/stockholm/hours');

    const { container } = render(
      <Heading
        heading={header.heading}
        detailedHeading={header.detailedHeading}
        about={header.about}
      />
    );
    expect(container.querySelector('h1')).toHaveTextContent('10-dygnsprognos');
  });
});
