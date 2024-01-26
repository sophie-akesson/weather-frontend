import type { Meta, StoryObj } from '@storybook/react';

import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import header from '../../../translations/sv.json';

import { Dropdown } from './Dropdown';

const transformedCities = transformCities(cities);

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {
    options: transformedCities,
    label: header.header.dropdownLabel,
  },
};
