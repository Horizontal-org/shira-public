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
  background: ${props => props.theme.colors.light.white};
  border: 1px solid ${props => props.theme.colors.dark.mediumGrey};
  border-radius: 24px;
  cursor: pointer;
  padding: 8px 16px;
  color: #111;
  display: inline-block;

  ${props => props.selected && `
    background: ${props.theme.colors.green2};
  `}

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    display: block;
    margin-bottom: 16px;
  }
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