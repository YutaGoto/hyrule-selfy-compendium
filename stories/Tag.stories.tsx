import { Tag } from '@/ui/Tag';
import type { Meta, StoryObj } from '@storybook/react';

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
