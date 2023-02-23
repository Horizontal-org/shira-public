import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { App } from '../../../domain/app'
import { Explanation } from '../../../domain/explanation'
import { MailApps } from '../../UI/AppTypes/MailApps'
import { MessagingApps } from '../../UI/AppTypes/MessagingApps'

interface Props {
  app: App
  content: string
  explanations?: Explanation[]
  explanationNumber: number
  answer: string | null
  showExplanations: boolean
}

export const AppLayout: FunctionComponent<Props> = ({
  app,
  content,
  explanations,
  explanationNumber,
  answer,
  showExplanations
}) => {
  return (
    <Wrapper className="apps-container">

      <MailApps 
        content={content}
        name={app.name}
        explanations={explanations}
        explanationNumber={explanationNumber}
        showExplanations={showExplanations}
      />      

      <MessagingApps
        content={content}
        name={app.name}
        explanations={explanations}
        explanationNumber={explanationNumber}
        showExplanations={showExplanations}
      />

      { answer && <Overlay />}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 86px);
  max-height: calc(100vh - 86px);
  overflow-y: scroll;
`

const Overlay = styled.div`
  background: #111111;
  opacity: 0.4;
  position: absolute;
  top: 0;
  bottom: 86px;
  left: 0;
  right: 0;
  z-index: 3;
`