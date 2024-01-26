import type { Meta, StoryObj } from '@storybook/react';

import header from '../../../translations/sv.json';

import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  args: {
    detailedForecastLabel: header.header.navigation.detailedForecastLabel,
    todaysForecastLabel: header.header.navigation.todaysForecastLabel,
    aboutLabel: header.header.navigation.aboutLabel,
    lang: 'sv',
    city: 'Sundsvall',
  },
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
