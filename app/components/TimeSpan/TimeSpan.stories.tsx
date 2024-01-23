import type { Meta, StoryObj } from '@storybook/react';

import { TimeSpan } from './TimeSpan';

const meta: Meta<typeof TimeSpan> = {
  component: TimeSpan,
};

export default meta;

type Story = StoryObj<typeof TimeSpan>;

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
        pathname: '/stockholm/hours',
      },
    },
  },
};
