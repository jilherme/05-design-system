import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@jiij-ignite-ui/react/src'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
