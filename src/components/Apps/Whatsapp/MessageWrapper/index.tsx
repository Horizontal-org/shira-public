import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import Recipient from './components/Recipient'
import Message from './components/Message'
import Background from './assets/background.png'
import { Attachment } from './components/Attachment'

interface Props {
  phone?: string;
  content: HTMLElement
}

const MessageWrapper: FunctionComponent<Props> = ({
  phone,
  content
}) => {

  const [elements, handleElements] = useState(Array.from(content.querySelectorAll('[id*="component-"]')))


  return (
    <Wrapper>
      <Recipient phone={phone}/>
      <ContentWrapper>
        <div>
        { elements.sort((a, b) => parseInt(a.getAttribute('data-position')) - parseInt(b.getAttribute('data-position'))).map((e) => (
          <>
            { e.getAttribute('id').includes('component-text') && (
              <Message data={e}/>
            )}

            { e.getAttribute('id').includes('component-attachment') && (
              <Attachment name={e.textContent}/>
            )}
          </>
        ))}
        </div>
      </ContentWrapper>
    </Wrapper>
  )

}

const Wrapper = styled.div`
  flex: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentWrapper = styled.div`
  padding: 20px 12px;
  flex-grow: 1;
  background: url(${Background}) 100% 100% no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
`

export default MessageWrapper