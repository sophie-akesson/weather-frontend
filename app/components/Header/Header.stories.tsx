import type { Meta, StoryObj } from '@storybook/react';

import { CityProvider } from '@/utils/cityContext';

import { Header } from './Header';

const ContextDecorator = (Story: any) => (
  <CityProvider>
    <Story />
  </CityProvider>
);

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [ContextDecorator],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
