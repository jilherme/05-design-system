import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@jiij-ignite-ui/react/src'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
}
