import { FunctionComponent  } from "react"
import styled from 'styled-components'

import IconSidebar from "./IconSIdebar"
import MessageSidebar from "./MessagesSidebar/Index"
import Chat from "./Chat"

import '../../../fonts/Segoe/style.css'

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

  font-family: 'Helvetica Neue', system-ui, -apple-system, BlinkMacSystemFont, '.SFNSText-Regular', sans-serif;
`

const Content = styled.div`
  display: flex;
  height: 100%;
`

export default FBMessenger