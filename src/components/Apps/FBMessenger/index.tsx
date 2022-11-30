import { FunctionComponent  } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import IconSidebar from "./IconSIdebar"


const FBMessenger: FunctionComponent = () => {
  return (
    <DesktopWrapper>
      <Content>
        <IconSidebar />
        <MessagesSidebar>
            chats sidebar
        </MessagesSidebar>

        <ChatWrapper>
            <div> top bar content</div>
            <div> content</div>
        </ChatWrapper>
      </Content>
    </DesktopWrapper>
  )
}


const DesktopWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  height: 100%;
`

const MessagesSidebar = styled.div`
    border-right: 1px solid #F2F3F5;
    width: 361px;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        width: 88px;
        
    }
`

const ChatWrapper = styled.div`
    flex-grow: 1;
    border-right: 1px solid #F2F3F5;
`

export default FBMessenger