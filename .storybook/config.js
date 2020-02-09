import { configure } from '@storybook/react'

configure(
  require.context('../src/design-systems', true, /\.stories\.js$/),
  module,
)
