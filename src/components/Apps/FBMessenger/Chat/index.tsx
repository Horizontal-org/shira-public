import { FunctionComponent  } from "react"
import styled from 'styled-components'

const Chat: FunctionComponent = () => {
  return (
    <ChatWrapper>
      <div> top bar content</div>
      <div> content</div>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
    padding: 8px;
    flex-grow: 1;
    border-right: 1px solid #F2F3F5;
`

export default Chat