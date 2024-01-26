import type { Meta, StoryObj } from '@storybook/react';

import header from '../../../translations/sv.json';

import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  args: {
    heading: header.header.heading,
    detailedHeading: header.header.detailedHeading,
    about: header.header.about,
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const OnStartPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/sv',
      },
    },
  },
};

export const OnDetailsPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/sv/stockholm/hours',
      },
    },
  },
};

export const OnAboutPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/sv/stockholm/about',
      },
    },
  },
};
