import { Clickable } from '@/ui/Clickable';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Clickable> = {
  title: 'Clickable',
  component: Clickable,
  argTypes: {
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
    buttonType: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clickable>;

export const Default: Story = {
  args: {
    children: 'Clickable',
    buttonType: 'button',
    onClick: () => {},
  },
};
