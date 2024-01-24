import type { Meta, StoryObj } from '@storybook/react';

import { CityProvider } from '@/utils/cityContext';

import { Navigation } from './Navigation';

const ContextDecorator = (Story: any) => (
  <CityProvider>
    <Story />
  </CityProvider>
);

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  decorators: [ContextDecorator],
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const OnStartPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
};

export const OnDetailsPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/sundsvall/hours',
      },
    },
  },
};
