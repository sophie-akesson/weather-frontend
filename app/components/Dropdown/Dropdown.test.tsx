import { getAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import { Dropdown } from './Dropdown';

const transformedCities = transformCities(cities);

describe('Dropdown', () => {
  it('renders successfully', () => {
    const mockedDropdownChange = jest.fn();
    const { container } = render(
      <Dropdown options={transformedCities} handleDropdownChange={mockedDropdownChange} />
    );
    expect(container).toBeInTheDocument();
  });

  it('should have text content', () => {
    const mockedDropdownChange = jest.fn();
    const { container } = render(
      <Dropdown options={transformedCities} handleDropdownChange={mockedDropdownChange} />
    );
    expect(container).toHaveTextContent('Sundsvall');
  });

  it('should update text content on change to second option', () => {
    const mockedDropdownChange = jest.fn();
    const { container } = render(
      <Dropdown options={transformedCities} handleDropdownChange={mockedDropdownChange} />
    );
    const options = container.children[0];
    const dropdownOptions = getAllByRole(container, 'option');

    expect(options).toHaveTextContent('Sundsvall');

    container.click();
    dropdownOptions[1].click();

    expect(container).toHaveTextContent('Malmö');
  });
});
