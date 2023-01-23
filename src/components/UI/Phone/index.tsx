import { FunctionComponent, ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

interface Props {
  children: ReactNode,
  className: string,
  background: string
}

export const Phone: FunctionComponent<Props> = ({ children, className, background }) => {
  return (
    <DesktopWrapper>
      <Font />
      <Mobile background={background} className={className}>
        { children }
      </Mobile>
    </DesktopWrapper>
  )
}

const Font = createGlobalStyle`
  .android {
    font-family: 'Product Sans Regular';
  }
`

const DesktopWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => lighten('0.4', props.theme.secondary.base)};
  display: flex;
  justify-content: center;
  align-items: center;
`

interface PhoneProps {
  background: string
}

const Mobile = styled('div')<PhoneProps>`
  box-sizing: border-box;
  padding-top: 30px;
  width: 390px;
  height: 650px;
  background: ${props => props.background};
  border-radius: 30px;
  border: 2px solid #424242;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    border-radius: 0;
    height: 100%;   
  }
`