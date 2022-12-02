import { FunctionComponent  } from "react"
import styled from 'styled-components'

import OptionsIcon from './assets/options.png'
import InfoIcon from './assets/info.png'
import ProfilePicture from "../../Whatsapp/ProfilePicture"


const TopBar: FunctionComponent = () => {
  return (
    <Wrapper>
      <UserInfo>
        <ProfilePicture />
        <Name> Name Lastname </Name>
      </UserInfo>
      <FlexWrapper>
        <OptionsWrapper>
          <Icon icon={OptionsIcon} size='26'/>
        </OptionsWrapper>

        <IconWrapper>
          <Icon icon={InfoIcon} size='26'/>
        </IconWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

export default TopBar