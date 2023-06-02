import type { Meta, StoryObj } from '@storybook/react'

import { Box, Checkbox, CheckboxProps, Text } from '@jiij-ignite-ui/react/src'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => (
      <Box as="label" css={{ display: 'flex', gap: '$2' }}>
        <Story />
        <Text size="sm">Accept terms of use</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<CheckboxProps> = {}
