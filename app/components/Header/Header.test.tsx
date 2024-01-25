import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './Header';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

jest.mock('../../utils/cityContext', () => ({
  useCityContext: () => {
    return {
      cityState: 'Stockholm',
    };
  },
}));

describe('Header', () => {
  it('renders successfully', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
