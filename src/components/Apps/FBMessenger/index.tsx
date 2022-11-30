import { FunctionComponent  } from "react"
import styled from 'styled-components'

import IconSidebar from "./IconSIdebar"
import MessageSidebar from "./MessagesSidebar/Index"
import Chat from "./Chat"

const FBMessenger: FunctionComponent = () => {
  return (
    <DesktopWrapper>
      <Content>
        <IconSidebar />
        <MessageSidebar />
        <Chat />
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

export default FBMessenger