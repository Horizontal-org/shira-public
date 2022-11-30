import { FunctionComponent  } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import ArchiveIcon from '../assets/archive.png'
import ChatIcon from '../assets/chat.png'
import PeopleIcon from '../assets/people.png'
import MarketPlaceIcon from '../assets/marketplace.png'
import RequestsIcon from '../assets/requests.png'
import StrangerPicture from "../../Whatsapp/StrangerPicture"


const IconSidebar: FunctionComponent = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon={ChatIcon} />
      </IconWrapper>

      <IconWrapper>
        <Icon icon={PeopleIcon} />
      </IconWrapper>

      <IconWrapper>
        <Icon icon={MarketPlaceIcon} />
      </IconWrapper>

      <IconWrapper>
        <Icon icon={RequestsIcon} />
      </IconWrapper>

      <IconWrapper>
        <Icon icon={ArchiveIcon} />
      </IconWrapper>

      <BottomWrapper>
        <StrangerPicture />
      </BottomWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  border-right: 1px solid #F2F3F5;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  position: relative;
`

interface IconProps {
    icon: string;
}
  
const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;

  &:hover {
    background: rgba(60,64,67,.1);
  }

  &:active {
    background: rgba(60,64,67,.12);
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled('div')<IconProps>`
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  width: 28px;
  height: 28px;
  opacity: .71;
`

const BottomWrapper = styled.div`
  position: absolute;
  bottom: 8px;
`

export default IconSidebar