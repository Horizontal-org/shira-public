import { FunctionComponent  } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Sidebar from "./Sidebar"
import MailOptions from "./MailOptions"
import Applications from "./Applications"
// google font 
import '../../../fonts/GoogleSans/style.css'

interface Props {}

const Gmail: FunctionComponent<Props> = () => {
  return (
    <DesktopWrapper>
      <Font />
      <div>
        <Header />
      </div>
      <Content>
        <Sidebar />
        <MailOptions />
        <Applications />
      </Content>
    </DesktopWrapper>
  )
}

const Font = createGlobalStyle`
  body {
    font-family: 'Product Sans Regular';
  }
`


const DesktopWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  height: 100%;
`

export default Gmail