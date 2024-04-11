import { Linkable } from '@/ui/Linkable';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Linkable> = {
  title: 'Linkable',
  component: Linkable,
  argTypes: {
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Linkable>;

export const Default: Story = {
  args: {
    children: 'Linkable',
    href: '#',
  },
};
