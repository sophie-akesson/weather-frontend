import type { Meta, StoryObj } from '@storybook/react';

import header from '../../../translations/sv.json';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  args: {
    translations: header.header,
    lang: 'sv',
    city: 'Sundsvall',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
