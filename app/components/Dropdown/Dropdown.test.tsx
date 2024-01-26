import { getAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import { header } from '../../../translations/sv.json';

import { Dropdown } from './Dropdown';

const transformedCities = transformCities(cities);

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Dropdown', () => {
  it('renders successfully', () => {
    const { container } = render(
      <Dropdown options={transformedCities} label={header.dropdownLabel} />
    );
    expect(container).toBeInTheDocument();
  });

  it('should have text content', () => {
    const { container } = render(
      <Dropdown options={transformedCities} label={header.dropdownLabel} />
    );
    expect(container).toHaveTextContent('Sundsvall');
  });

  it('should update text content on change to second option', () => {
    const { container } = render(
      <Dropdown options={transformedCities} label={header.dropdownLabel} />
    );
    const options = container.children[0];
    const dropdownOptions = getAllByRole(container, 'option');

    expect(options).toHaveTextContent('Sundsvall');

    container.click();
    dropdownOptions[1].click();

    expect(container).toHaveTextContent('Malmö');
  });
});
