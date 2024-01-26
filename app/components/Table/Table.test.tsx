import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { table } from '../../../translations/sv.json';

import { Table } from './Table';
import mockData from './mockData.json';

describe('Table', () => {
  it('renders successfully', () => {
    const { container } = render(
      <Table
        forecast={mockData}
        ariaPrecipitationLabel={table.ariaPrecipitationLabel}
        humiditylabel={table.humiditylabel}
        tempLabel={table.tempLabel}
        timeLabel={table.timeLabel}
        longPrecipitationLabel={table.longPrecipitationLabel}
        shortPrecipitationLabel={table.shortPrecipitationLabel}
        windLabel={table.windLabel}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('should have a caption', () => {
    const { container } = render(
      <Table
        forecast={mockData}
        ariaPrecipitationLabel={table.ariaPrecipitationLabel}
        humiditylabel={table.humiditylabel}
        tempLabel={table.tempLabel}
        timeLabel={table.timeLabel}
        longPrecipitationLabel={table.longPrecipitationLabel}
        shortPrecipitationLabel={table.shortPrecipitationLabel}
        windLabel={table.windLabel}
      />
    );
    expect(container.querySelector('caption')).toHaveTextContent('25/1');
  });
});
