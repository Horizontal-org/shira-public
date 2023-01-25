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
  width: 23vw;
  height: 80vh;
  background: ${props => props.background};
  border-radius: 50px;
  border: 17px solid #F3F3F3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 28vw;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 38vw;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    border-radius: 0;
    border: none;
    height: 100%;
    width: 100%;
  }
`