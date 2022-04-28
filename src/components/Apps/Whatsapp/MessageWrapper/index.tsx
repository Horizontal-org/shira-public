import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Recipient from './components/Recipient'
import Message from './components/Message'

interface Props {}

const MessageWrapper: FunctionComponent<Props> = () => {

  return (
    <Wrapper>
      <Recipient />
      <Message />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default MessageWrapper