import { FunctionComponent  } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Background from './Background'
import MessageWrapper from "./MessageWrapper"
import Sidebar from './Sidebar'

// whatsapp font 
import '../../../fonts/Segoe/style.css'

interface Props {}

const Whatsapp: FunctionComponent<Props> = () => {
  return (
    <DesktopWrapper>
      <StyledScrollbar />
      <Background>
        <Content>
          <div>
            <Sidebar /> 
            <MessageWrapper />
          </div>
        </Content>
      </Background>
    </DesktopWrapper>
  )
}


const DesktopWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const StyledScrollbar = createGlobalStyle`
  body::-webkit-scrollbar {
    width: 1em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`

const Content = styled.div`
  width: 80vw;
  height: calc(100% - 50px);
  background: white;

  > div {
    height: 100%;
    display: flex;
  }

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 100vw;
    height: 100%;
  }
`



export default Whatsapp