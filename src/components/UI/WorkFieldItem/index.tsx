import { FunctionComponent } from "react";
import styled from 'styled-components'

// Icons
import HumanResourcesSvg from './assets/HumanResources'
import ActivistSvg from './assets/Activist'
import Book from './assets/Book'
import Business from './assets/Business'
import Service from './assets/Service'
import Media from './assets/Media'



const icons = {
  'human-resources': <HumanResourcesSvg />,
  'activist': <ActivistSvg />,
  'journalism-and-media': <Media />,
  'business': <Business />,
  'services': <Service />,
  'education': <Book />,
  'healthcare': <ActivistSvg />,
  'marketing': <Business />,
  'arts-and-culture': <Book />,
  'human-rights': <HumanResourcesSvg />,
}

const getIcon = (slug) => {
  return icons[slug]
}

interface Props {
  id?: string;
  name: string;
  slug: string;
  selected: boolean;
  onClick?: () => void
}

export const WorkFieldItem: FunctionComponent<Props> = ({ 
  id, 
  name, 
  selected, 
  slug,
  onClick 
}) => { 
  return (
    <Box selected={selected} onClick={onClick}>
      { getIcon(slug) }
      <span>{name}</span>
    </Box>
  )
}

interface BoxProps {
  selected: boolean;
}

const Box = styled.div<BoxProps>`
  width: 215px;
  background: ${props => props.theme.secondary.light};
  border: 1px solid ${props => props.theme.secondary.light};
  border-radius: 24px;
  cursor: pointer;
  display: flex;  
  align-items: center;
  opacity: 0.55;
  padding: 16px 20px;

  > svg {
    height: 21px;
    width: 21px;
  } 

  > span {
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.64);
    padding-left: 16px;
  }

  ${props => props.selected && `
    border: 1px solid #000;
    opacity: 1;
  `}
`
