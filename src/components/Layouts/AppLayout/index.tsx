import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { App } from '../../../domain/app'
import Gmail from '../../Apps/Gmail'
import Whatsapp from '../../Apps/Whatsapp'
import { MailApps } from '../../UI/AppTypes/MailApps'
import { MessagingApps } from '../../UI/AppTypes/MessagingApps'

interface Props {
  app: App
  content: string;
}

export const AppLayout: FunctionComponent<Props> = ({
  app,
  content
}) => {
  return (
    <Wrapper>

      <MailApps 
        content={content}
        name={app.name}
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