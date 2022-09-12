import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Gmail from '../../Apps/Gmail'
import Whatsapp from '../../Apps/Whatsapp'

interface Props {
  app: string
}

export const AppLayout: FunctionComponent<Props> = ({app}) => {
  return (
    <Wrapper>
      { app === 'Gmail' && (
        <Gmail />
      )}

      { app === 'Whatsapp' && (
        <Whatsapp />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-height: calc(100vh - 86px);
  overflow-y: scroll;
`