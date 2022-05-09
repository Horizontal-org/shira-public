import { FunctionComponent } from 'react'
import styled from 'styled-components'

import CalendarIcon from './assets/calendar.png'
import ContactsIcon from './assets/contacts.png'

interface Props {}

const Applications: FunctionComponent<Props> = () => {

  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon={CalendarIcon} />
      </IconWrapper>    
      <IconWrapper>
        <Icon icon={ContactsIcon} />
      </IconWrapper>    
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  border-left: 1px solid hsla(240,5.8%,76.3%,0.2);
  padding-top: 8px;
`

const IconWrapper = styled.div`
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin: 4px 8px;
  width: 20px;
  height: 20px;

  &:hover {
    background: rgba(60,64,67,.1);
  }

  &:active {
    background: rgba(60,64,67,.12);
  }
`


interface IconProps {
  icon: string;
}

const Icon = styled('div')<IconProps>`
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
  width: 20px;
  height: 20px;
`

export default Applications