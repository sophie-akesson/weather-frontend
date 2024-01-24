import type { Meta, StoryObj } from '@storybook/react';

import { Card, Label } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    label: 'Temperatur' as Label,
    value: '16°',
    icon: '4',
  },
};
