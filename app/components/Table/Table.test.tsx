import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Table } from './Table';
import mockData from './mockData.json';

describe('Table', () => {
  it('renders successfully', () => {
    const { container } = render(<Table forecast={mockData} />);
    expect(container).toBeInTheDocument();
  });

  it('should have a caption', () => {
    const { container } = render(<Table forecast={mockData} />);
    expect(container.querySelector('caption')).toHaveTextContent('25/1');
  });
});
