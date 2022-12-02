import { FunctionComponent  } from "react"
import styled from 'styled-components'
import BottomBar from "./BottomBar"
import ChatContent from "./ChatContent"

import TopBar from "./TopBar"

const Chat: FunctionComponent = () => {
  return (
    <ChatWrapper>
      <TopBar />
      <ChatContent />
      <BottomBar />
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  flex-grow: 1;
  border-right: 1px solid #F2F3F5;
  position: relative;

  display: flex;
  flex-direction: column;
`

export default Chat