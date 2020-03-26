import styled from 'vue-styled-components'

export interface WrapperProps {
  direction?: string
}
const props = { direction: String }

const Wrapper = styled('div', props)`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
`

export default Wrapper
