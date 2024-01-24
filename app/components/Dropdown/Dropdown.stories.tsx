import type { Meta, StoryObj } from '@storybook/react';

import { cities } from '@/utils/cities';
import { transformCities } from '@/utils/transformCities';
import { CityProvider } from '@/utils/cityContext';

import { Dropdown } from './Dropdown';

const transformedCities = transformCities(cities);

const ContextDecorator = (Story: any) => (
  <CityProvider>
    <Story />
  </CityProvider>
);

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  decorators: [ContextDecorator],
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
  },
};
