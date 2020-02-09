import styled, { css } from 'styled-components'

// size, color, margin, padding, bold
// <Text color="blue" size="18" bold></Text>
const Text = styled.div`
${({ size }) => css`
  font-size: ${size || 13}px;
`}
${({ margin }) =>
  margin &&
  css`
    margin: ${margin};
  `}
${({ padding }) =>
  padding &&
  css`
    padding: ${padding};
  `}
`

export default Text
