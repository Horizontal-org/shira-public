import { FunctionComponent, ReactNode } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

interface Props {
  children: ReactNode,
  className: string
}

export const Phone: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <DesktopWrapper>
      <Font />
      <Mobile className={className}>
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

const Mobile = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  width: 390px;
  height: 650px;
  background: white;
  border-radius: 30px;
  border: 2px solid #424242;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`