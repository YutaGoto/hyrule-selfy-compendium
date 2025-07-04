import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/ui/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
