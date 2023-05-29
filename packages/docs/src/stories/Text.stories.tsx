import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react/src'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading será sempre um `h2`, mas oidemis alterar isso com a propriedade `as`.',
      },
    },
  },
}
