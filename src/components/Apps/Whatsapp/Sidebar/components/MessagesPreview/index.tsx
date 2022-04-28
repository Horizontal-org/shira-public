import { FunctionComponent } from 'react'
import styled from 'styled-components'
import ProfilePicture from '../../../ProfilePicture'

const parseMessages: any = () => {
  let message = (
    <Message>
      <PictureWrapper>
        <ProfilePicture imageSize='49px' />
      </PictureWrapper>
      <UserInfo>
        <UserInfoFirstRow>
          <Username>
            <span>Juan Dans</span>
          </Username>
          <Time>
            12:40 PM
          </Time>
        </UserInfoFirstRow>
        <MessageContent>
          Chromatic automates gathering UI feedback, visual testing, and documentation, so developers can iterate faster with less manual work.
        </MessageContent>
      </UserInfo>
    </Message>
  )

  let messages = Array.from(Array(10).keys()).map((m, i) => {
    return message
  })

  return messages
}

interface Props {}

const MessagesPreview: FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <Messages>
        { parseMessages() }
      </Messages>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    width: 6px !important;
    height:: 6px !important;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255,.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .2);
  }

`

const Messages = styled.div`
  display: flex;
  flex-direction: column;
`

const Message = styled.div`
  height: 72px;
  display: flex;
  cursor: pointer;  
  transition: none 0s ease 0s;

  &:hover {
    background: #f5f6f6;
  }
`

const PictureWrapper = styled.div`
  padding: 0 15px 0 13px;
  display: flex;
  align-items: center;
`

const Username = styled.div`
  font-family: Segoe UI Regular;
  color: #111b21;
`

const UserInfo = styled.div`
  flex-grow: 1;
  padding: 14px 0;
  border-bottom: 1px solid #e9edef;
  min-width: 0;
`

const UserInfoFirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Time = styled.div`
  font-family: Segoe UI Regular;
  padding-top: 4px;
  padding-right: 10px;
  color: #667781;
  line-height: 14px;
  font-size: 12px;
`

const MessageContent = styled.span`
  color: #667781;
  font-size: 14px;
  font-family: Segoe UI Regular;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  min-width: 0;
  flex-shrink: 1;
  max-width: 250px;
`

export default MessagesPreview