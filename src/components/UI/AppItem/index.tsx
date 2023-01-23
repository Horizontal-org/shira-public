import { FunctionComponent } from "react";
import styled from 'styled-components'

// Icons
import GmailSvg from './assets/Mail'
import WhatsappSvg from './assets/Whatsapp'
import MessengerIcon from './assets/Messenger'
import DatingAppIcon from "./assets/DatingApp";
import SmsIcon from "./assets/Sms";


const icons = {
  'Whatsapp': <WhatsappSvg />,
  'Gmail': <GmailSvg />,
  'Messenger': <MessengerIcon />,
  'Dating App': <DatingAppIcon />,
  'SMS': <SmsIcon />,
}

const getIcon = (name) => {
  return icons[name]
}

interface Props {
  id?: string;
  name: string;
  selected: boolean;
  onClick?: () => void
}

export const AppItem: FunctionComponent<Props> = ({ 
  id, 
  name, 
  selected, 
  onClick 
}) => { 
  return (
    <Box selected={selected} onClick={onClick}>
      { getIcon(name) }
      <span>{name}</span>
    </Box>
  )
}

interface BoxProps {
  selected: boolean;
}

const Box = styled.div<BoxProps>`
  height: 140px;
  width: 140px;
  border: 1px solid ${props => props.theme.secondary.light};
  border-radius: 12px;
  cursor: pointer;
  background: ${props => props.theme.secondary.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.55;

  > svg {
    height: 55px;
    width: 55px;
  } 

  > span {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.64);
    padding-top: 8px;
  }

  ${props => props.selected && `
    border: 1px solid #000;
    opacity: 1;
  `}
`
