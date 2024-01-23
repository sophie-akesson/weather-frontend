import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const OnStartPage: Story = {
  args: {
    city: 'Sundsvall',
  },
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
  args: {
    city: 'Sundsvall',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/sundsvall/hours',
      },
    },
  },
};
