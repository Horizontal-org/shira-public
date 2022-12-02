import { FunctionComponent  } from "react"
import styled from 'styled-components'
import ProfilePicture from "../../Whatsapp/ProfilePicture"

const ChatContent: FunctionComponent = () => {
  return (
    <Wrapper>
      <MessageWrapper>
        <ProfilePicture imageSize='28px'/>
        <TextWrapper> 
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante massa, pulvinar et interdum quis, iaculis quis velit. Vivamus vel neque ante. Suspendisse vehicula, justo at volutpat interdum, est orci mollis leo, et faucibus nisl lorem eu tortor. Nulla laoreet id neque vitae sagittis. Donec molestie, ligula ut ultricies pellentesque, mi sapien porta nulla, sed lacinia purus libero elementum sapien. Cras ut mollis risus, eget varius nibh. Donec vitae augue pretium, posuere justo faucibus, pretium quam. Proin vel venenatis ex. Fusce gravida nibh id laoreet tempus. Quisque porttitor nibh et erat accumsan vulputate. Fusce elementum, neque quis accumsan ornare, metus mi auctor odio, vitae posuere leo nisi ut quam.
        </Text>
        <Text>
          Message
        </Text>
        </TextWrapper>
      </MessageWrapper>
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  flex-grow: 1;

  padding: 8px;
  posittion
`

const MessageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: .9375rem;
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
`

export default ChatContent