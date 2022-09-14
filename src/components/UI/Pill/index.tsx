import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  label: string;
  onClick: () => void;
  selected: boolean;
  icon: ReactNode;
}

export const Pill: FunctionComponent<Props> = ({
  icon,
  label,
  onClick,
  selected
}) => {

  return (
    <Wrapper selected={selected} onClick={onClick}>
      <Content>
        { icon }
        { label }
      </Content>
    </Wrapper>
  )
}

interface StyledWrapper {
  selected: boolean;
}

const Wrapper = styled.div<StyledWrapper>`
  background: ${props => props.theme.secondary.light};
  border-radius: 32px;
  cursor: pointer;
  padding: 6px 12px;
  color: #111;
  display: inline-block;

  ${props => props.selected && `
    background: ${props.theme.secondary.dark};
    color: white;
    
    > div > svg {
      stroke: white;
    }
  `}
`

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;

  > svg {
    height: 18px;
    width: 18px;
    margin-right: 8px;
  }

`