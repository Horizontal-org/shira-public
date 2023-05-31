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
  'human-resources': '✊🏽',
  'activist': '📢',
  'journalism-and-media': '🗒️',
  'business': '💼',
  'services': '☕',
  'education': '🏫',
  'healthcare': '💊',
  'marketing': '📢',
  'arts-and-culture': '🎨',
  'human-rights': '✊🏽',
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
      <div>{getIcon(slug)}</div>
      <span>{name}</span>
    </Box>
  )
}

interface BoxProps {
  selected: boolean;
}

const Box = styled.div<BoxProps>`
  width: 80%;
  background: ${props => props.theme.colors.light.white};
  border: 1px solid ${props => props.theme.colors.dark.mediumGrey};
  border-radius: 100px;
  cursor: pointer;
  display: flex;  
  align-items: center;;
  padding: 16px 20px;
  margin-bottom: 12px;

  > div {
    display: flex;
    jiustify-content: center;
    font-size: 21px;
  } 

  > span {
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.64);
    padding-left: 8px;
  }

  ${props => props.selected && `
    background: ${props.theme.colors.green2};
  `}

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
    margin-right: 0;
  }

`
