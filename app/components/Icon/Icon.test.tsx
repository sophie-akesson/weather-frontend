import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Icon } from './Icon';

describe('Icon', () => {
  it('renders successfully', () => {
    const { container } = render(<Icon number="6" />);
    expect(container).toBeInTheDocument();
  });
});
