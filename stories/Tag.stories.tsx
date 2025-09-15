import type { Meta, StoryObj } from '@storybook/react';

import { Tag, type TagProps } from '@/ui/Tag';

const variantOptions = [
  'default',
  'secondary',
  'destructive',
  'outline',
  'success',
  'warning',
  'info',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'amber',
  'lime',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'violet',
  'fuchsia',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
];
const sizeOptions = ['default', 'sm', 'lg'];

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Tag',
    },
    variant: {
      control: 'select',
      options: variantOptions,
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: sizeOptions,
      defaultValue: 'default',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag',
    variant: 'default',
    size: 'default',
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {variantOptions.map((variant) => (
        <Tag
          key={variant}
          variant={variant as TagProps['variant']}
          size={args.size as TagProps['size']}
        >
          {variant}
        </Tag>
      ))}
    </div>
  ),
  args: {
    size: 'default',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      {sizeOptions.map((size) => (
        <Tag
          key={size}
          variant={args.variant as TagProps['variant']}
          size={size as TagProps['size']}
        >
          {size}
        </Tag>
      ))}
    </div>
  ),
  args: {
    variant: 'default',
  },
};
