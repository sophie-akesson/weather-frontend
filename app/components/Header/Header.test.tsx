import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { header } from '../../../translations/sv.json';

import { Header } from './Header';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Header', () => {
  it('renders successfully', () => {
    const { container } = render(<Header translations={header} lang="sv" />);
    expect(container).toBeInTheDocument();
  });
});
