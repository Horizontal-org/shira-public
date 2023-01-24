import { FunctionComponent  } from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Background from './Background'
import MessageWrapper from "./MessageWrapper"
import Sidebar from './Sidebar'
import { Explanation } from "../../../domain/explanation"
import ExplanationTooltip from "../../UI/ExplanationTooltip"
// whatsapp font 
import '../../../fonts/Segoe/style.css'

interface Props {
  content?: HTMLElement;
  phone: {
    textContent: string
    explanationPosition: string
  };
  explanations?: Explanation[]
  explanationNumber: number;
  showExplanations: boolean
}

const Whatsapp: FunctionComponent<Props> = ({
  content,
  phone,
  explanations,
  explanationNumber,
  showExplanations
}) => {
  return (
    <DesktopWrapper>
      {explanations.map(explanation => (
        <ExplanationTooltip 
          explanation={explanation}
          explanationNumber={explanationNumber}
          showExplanations={showExplanations}
        />
      ))}
      <StyledScrollbar />
      <Background>
        <Content>
          <div>
            <Sidebar /> 
            <MessageWrapper 
              content={content}
              phone={phone}
            />
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

  mark {
    background: transparent;
    position: relative;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100vw;
    height: 100%;
  }
`



export default Whatsapp