import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@jiij-ignite-ui/react/src'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jilherme.png',
    alt: 'jilherme',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

// pass generic to StoryObj to get autocomplete
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
