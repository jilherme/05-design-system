import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react/src'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        <Story />
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
