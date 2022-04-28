import { FunctionComponent } from 'react'
import styled from 'styled-components'

import Background from './assets/background.png'

interface Props {}

const Message:FunctionComponent<Props> = () => {

  return (
    <Wrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  background: url(${Background}) 100% 100% no-repeat;
  background-size: cover;
`


export default Message