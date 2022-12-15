import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { App } from '../../../domain/app'
import { Explanation } from '../../../domain/explanation'
import { MailApps } from '../../UI/AppTypes/MailApps'
import { MessagingApps } from '../../UI/AppTypes/MessagingApps'

interface Props {
  app: App
  content: string;
  explanations?: Explanation[]
}

export const AppLayout: FunctionComponent<Props> = ({
  app,
  content,
  explanations
}) => {
  return (
    <Wrapper>

      <MailApps 
        content={content}
        name={app.name}
        explanations={explanations}
      />      

      <MessagingApps
        content={content}
        name={app.name}
      />

    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - 86px);
  max-height: calc(100vh - 86px);
  overflow-y: scroll;
`