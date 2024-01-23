import { getAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { cities } from '@/lib/cities';
import { transformCities } from '@/lib/transformCities';

import { Card } from './Card';

const mock = {
  label: 'Temperatur',
  value: '16°',
  icon: 4,
};

describe('Card', () => {
  it('renders successfully', () => {
    const { container } = render(<Card label={mock.label} value={mock.value} icon={mock.icon} />);
    expect(container).toBeInTheDocument();
  });

  it('should have a label', () => {
    const { container } = render(<Card label={mock.label} value={mock.value} icon={mock.icon} />);
    expect(container.querySelector('h2')).toHaveTextContent('Temperatur');
  });

  it('should have a value', () => {
    const { container } = render(<Card label={mock.label} value={mock.value} icon={mock.icon} />);
    expect(container.querySelector('span')).toHaveTextContent('16°');
  });
});
