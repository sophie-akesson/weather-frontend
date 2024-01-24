import type { Meta, StoryObj } from '@storybook/react';

import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';

import { Dropdown } from './Dropdown';

const transformedCities = transformCities(cities);

const handleDropdownChange = (value: string) => {
  console.log(value);
};

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    options: transformedCities,
    handleDropdownChange: handleDropdownChange,
  },
};
