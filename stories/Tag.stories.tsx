import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/ui/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    text: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    text: 'Tag',
  },
};
