import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/ui/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  argTypes: {
    reactVersion: {
      control: 'text',
    },
    nextVersion: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    reactVersion: '18.2.0',
    nextVersion: '14.0.3',
  },
};
