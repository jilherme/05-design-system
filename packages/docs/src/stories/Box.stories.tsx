import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react/src'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>testando o BOX</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<BoxProps> = {}
