import { FunctionComponent  } from "react"
import styled from 'styled-components'
import ProfilePicture from "../../Whatsapp/ProfilePicture"

interface Props {
  content: Element[]
}

const ChatContent: FunctionComponent<Props> = ({
  content,
}) => {
  return (
    <Wrapper>
      <MessageWrapper>
        <ProfilePicture imageSize='28px'/>
        <TextWrapper> 
          {content.map( c => (
            <Text dangerouslySetInnerHTML={{__html: c.outerHTML}} />
          ))}
        </TextWrapper>
      </MessageWrapper>
      <MessageDate>
        14/12/20 10:58
      </MessageDate>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  flex-grow: 1;

  padding: 8px;

  overflow-y: scroll;
`

const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: .9375rem;
`

const MessageDate = styled.div`
  text-align: center;

  color: #65676B;
  font-size: .8125rem;
  font-weight: light;
  padding: 16px 0;
`

const TextWrapper = styled.div`
  max-width: 600px;

  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  margin-left: 8px;
  padding: 8px;
  background: rgba(60,64,67,.1);
  border-radius: 16px;

  margin-top: 8px;
  flex-shrink: 1;

  p {
    margin: 0px
  }
`

export default ChatContent