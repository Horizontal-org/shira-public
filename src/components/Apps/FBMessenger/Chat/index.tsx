import { FunctionComponent  } from "react"
import styled from 'styled-components'
import BottomBar from "./BottomBar"

import OptionsIcon from './assets/options.png'
import InfoIcon from './assets/info.png'
import StrangerPicture from "../../Whatsapp/StrangerPicture"

const Chat: FunctionComponent = () => {
  return (
    <ChatWrapper>
      <TopBar>
        <UserInfo>
          <StrangerPicture />
          <Name> Lionel Messi </Name>
        </UserInfo>
        <FlexWrapper>
          <OptionsWrapper>
            <Icon icon={OptionsIcon} size='26'/>
          </OptionsWrapper>

          <IconWrapper>
            <Icon icon={InfoIcon} size='26'/>
          </IconWrapper>
        </FlexWrapper>

      </TopBar>
      <div></div>
      <BottomBar />
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  flex-grow: 1;
  border-right: 1px solid #F2F3F5;
  position: relative;
`

const TopBar = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`

const UserInfo = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
`

const Name = styled.div`
  margin-left: 8px;
`

const FlexWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  &:hover {
    background: rgba(60,64,67,.1);
  }


  display: flex;
  align-items: center;
  justify-content: center;
`

const OptionsWrapper = styled(IconWrapper)`
  background: #1877F2;
  width: 50px;
  height: 26px;

  border-radius: 24px;

  &:hover {
    background: #1877F2;
  }

  margin-right: 8px;

`

interface IconProps {
  icon: string;
  size: string
}

const Icon = styled('div')<IconProps>`
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`

export default Chat