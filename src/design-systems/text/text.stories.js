import React from 'react'
import Text from '.'

// 대제목
export default { title: 'Text', component: Text }
// 소제목
export const baseText = () => (
  <>
    <Text size="30">Hello</Text>
    <Text bold>Hello</Text>
    <Text margin="10px 0">Hello</Text>
    <Text padding="10px 0">Hello</Text>
  </>
)
