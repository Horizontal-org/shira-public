import { FunctionComponent  } from "react"
import styled from 'styled-components'

import VideoIcon from '../assets/video.png'
import NewMessageIcon from '../assets/new-message.png'
import SearchIcon from '../assets/search.png'

const MessageSidebar: FunctionComponent = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Chats</Title>
        <HeaderIcons>
          <IconWrapper>
            <Icon icon={VideoIcon} size='28'></Icon>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={NewMessageIcon} size='28'></Icon>
          </IconWrapper>
        </HeaderIcons>
      </Header>

      <SearchBar>
        <SearchIconWrapper>
          <Icon icon={SearchIcon} size='16'/>
        </SearchIconWrapper>
        <SearchText>
          Search in Messenger
        </SearchText>
      </SearchBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  border-right: 1px solid #F2F3F5;
  width: 361px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 88px;    
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;   
  }
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
  size: string;
}

const Icon = styled('div')<IconProps>`
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  opacity: .71;
`

const Title = styled.h2`
  padding: 0;
  margin: 0
`

const SearchBar = styled.div`
  width: 100%;
  border-radius: 24px;
  background: rgba(60,64,67,.05);

  display: flex;
  align-items: center;
  margin-top: 8px;
`

const SearchIconWrapper = styled(IconWrapper)`
  margin-left: 0;
  background: transparent;

  &:hover {
    background: transparent;
  }
`

const SearchText = styled.span`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;   
  }
`

export default MessageSidebar