import { getAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import { Dropdown } from './Dropdown';

const transformedCities = transformCities(cities);

jest.mock('../../utils/cityContext', () => ({
  useCityContext: () => {
    return {
      cityState: 'Sundsvall',
    };
  },
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Dropdown', () => {
  it('renders successfully', () => {
    const { container } = render(<Dropdown options={transformedCities} />);
    expect(container).toBeInTheDocument();
  });

  it('should have text content', () => {
    const { container } = render(<Dropdown options={transformedCities} />);
    expect(container).toHaveTextContent('Sundsvall');
  });

  it('should update text content on change to second option', () => {
    const { container } = render(<Dropdown options={transformedCities} />);
    const options = container.children[0];
    const dropdownOptions = getAllByRole(container, 'option');

    expect(options).toHaveTextContent('Sundsvall');

    container.click();
    dropdownOptions[1].click();

    expect(container).toHaveTextContent('Malmö');
  });
});
