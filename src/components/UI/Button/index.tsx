import { FunctionComponent, ReactNode } from "react";
import styled from 'styled-components'

interface Props {
  text: string
  onClick: () => void
  type?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
}

export const Button: FunctionComponent<Props> = ({
  text,
  onClick,
  type,
  leftIcon,
  rightIcon,
  disabled
}) => {
  return (
    <StyledButton
      onClick={onClick}
      styledType={type || 'primary'}
      styleDisabled={disabled || false}
      disabled={disabled || false}
    >
      { leftIcon && (
        <Left>
          { leftIcon }
        </Left>
      )}
      <span>
        {text}
      </span>
      { rightIcon && (
        <Right>
          { rightIcon }
        </Right>
      )}
    </StyledButton>
  )
}

interface StyledButtonProps {
  onClick: () => void;
  styledType: string;
  children: ReactNode;
  styleDisabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  border-radius: 4px;
  padding: 11px 16px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  
  justify-content: space-between;

  ${props => props.styledType === 'primary' && `
    color: white;
    background: ${props.theme.primary.base};
    border: 2px solid ${props.theme.primary.base};
  `}

  ${props => props.styledType === 'outline' && `
    background: white;
    border: 2px solid ${props.theme.primary.base};
    color: ${props.theme.primary.base};
  `}

  ${props => props.styledType === 'secondary' && `
    background: ${props.theme.secondary.dark};
    border: 2px solid ${props.theme.secondary.dark};
    color: white;
  `}

  ${props => props.styleDisabled && `
    background: white;
    color: #ACADAE;
    border: 2px solid #ACADAE;
    cursor: auto;    
  `}

`

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
`

const Left = styled(SvgWrapper)`
  margin-right: 12px;
`

const Right = styled(SvgWrapper)`  
  margin-left: 12px;
`

Button.defaultProps = {
  type: 'primary',  
}