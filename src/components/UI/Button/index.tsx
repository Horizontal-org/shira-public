import { FunctionComponent, ReactNode } from "react";
import styled from 'styled-components'

interface Props {
  text: string
  onClick: () => void
  type?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  size?: string
}

export const Button: FunctionComponent<Props> = ({
  text,
  onClick,
  type,
  leftIcon,
  rightIcon,
  disabled,
  size
}) => {
  return (
    <StyledButton
      onClick={onClick}
      styledType={type || 'primary'}
      styleDisabled={disabled || false}
      disabled={disabled || false}
      size={size}
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
  size?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  -webkit-tap-highlight-color: transparent;
  border-radius: 100px;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 8px 16px;
    font-size: 14px;
  }

  ${props => props.styledType === 'primary' && `
    color: white;
    background: ${props.theme.colors.blue7};
    border: 2px solid ${props.theme.colors.blue7};
    &:hover {
      background: ${props.theme.colors.blue8};
      border-color: ${props.theme.colors.blue8};
    }
    &:focus {
      background: ${props.theme.colors.blue8};
      border-color: ${props.theme.colors.blue4};
    }
  `}

  ${props => props.styledType === 'outline' && `
    background: white;
    border: 1px solid ${props.theme.colors.dark.mediumGrey};
    color: ${props.theme.colors.dark.black};

    &:focus {
      border: 2px solid ${props.theme.colors.dark.mediumGrey};
    }
  `}

  ${props => props.styledType === 'secondary' && `
    background: ${props.theme.colors.green7};
    border: 1px solid ${props.theme.colors.green7};
    color: white;
  `}

  ${props => props.styleDisabled && `
    opacity: 0.5;
    cursor: auto;    
  `}

  ${props => props.size === 'lg' && `
    width: 80%;
    justify-content: center;
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