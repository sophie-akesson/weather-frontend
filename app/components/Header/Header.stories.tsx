import type { Meta, StoryObj } from '@storybook/react';

import { CityProvider } from '@/lib/CityContext';

import { Header } from './Header';

const ContextDecorator = (Story: any) => (
  <CityProvider>
    <Story />
  </CityProvider>
);

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [ContextDecorator],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
