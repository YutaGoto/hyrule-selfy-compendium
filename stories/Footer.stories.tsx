import { Footer } from '@/ui/Footer';
import type { Meta, StoryObj } from '@storybook/react';

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
    nextVersion: '14.1.0',
  },
};
