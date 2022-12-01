import { FunctionComponent } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'
import { Header } from './Header';
// google font 
import '../../../fonts/GoogleSans/style.css'
import { Footer } from './Footer';
import { Content } from './Content';

interface Props {
  phone: string;
  content: HTMLElement;
}


export const SMS: FunctionComponent<Props> = ({ phone, content }) => {
  return (
    <DesktopWrapper>
      <Font />
      <Mobile className='android'>
        <Header phone={phone}/>
        <Content data={content}/>
        <Footer />
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