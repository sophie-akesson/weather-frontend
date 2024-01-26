import type { Meta, StoryObj } from '@storybook/react';

import table from '../../../translations/sv.json';

import { Table } from './Table';
import mockData from './mockData.json';

const meta: Meta<typeof Table> = {
  component: Table,
  args: {
    forecast: mockData,
    ariaPrecipitationLabel: table.table.ariaPrecipitationLabel,
    humiditylabel: table.table.humiditylabel,
    tempLabel: table.table.tempLabel,
    timeLabel: table.table.timeLabel,
    longPrecipitationLabel: table.table.longPrecipitationLabel,
    shortPrecipitationLabel: table.table.shortPrecipitationLabel,
    windLabel: table.table.windLabel,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {};
