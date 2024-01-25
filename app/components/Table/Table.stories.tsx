import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import mockData from './mockData.json';

const meta: Meta<typeof Table> = {
  component: Table,
  args: {
    forecast: mockData,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {};
