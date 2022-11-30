import { FunctionComponent  } from "react"
import styled from 'styled-components'

import VideoIcon from '../assets/video.png'
import NewMessageIcon from '../assets/new-message.png'

const MessageSidebar: FunctionComponent = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Chats</Title>
        <HeaderIcons>
          <IconWrapper>
            <Icon icon={VideoIcon}></Icon>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={NewMessageIcon}></Icon>
          </IconWrapper>
        </HeaderIcons>
      </Header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  border-right: 1px solid #F2F3F5;
  width: 361px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 88px;    
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderIcons = styled.div`
  display: flex;
`

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  background: rgba(60,64,67,.05);
  margin-left: 16px;

  &:hover {
    background: rgba(60,64,67,.12);
  }


  display: flex;
  align-items: center;
  justify-content: center;
`
interface IconProps {
  icon: string;
}

const Icon = styled('div')<IconProps>`
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  width: 28px;
  height: 28px;
  opacity: .71;
`

const Title = styled.h2`
  padding: 0;
  margin: 0
`

export default MessageSidebar