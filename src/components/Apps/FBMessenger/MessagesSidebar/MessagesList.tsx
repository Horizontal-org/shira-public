import { FunctionComponent  } from "react"
import styled from 'styled-components'
import ProfilePicture from "../../Whatsapp/ProfilePicture"

const MessagesList: FunctionComponent = () => {
  return (
    <Wrapper>
      <Card active>
        <ProfilePicture />

        <MessageInfo>
          <div>Name</div>
          <SecondaryText>
            <span> Some Message . 1 day ago</span>
          </SecondaryText>
        </MessageInfo>

      </Card>

      <Card>
        <ProfilePicture />

        <MessageInfo>
          <div>Name</div>
          <SecondaryText>
            <span> Some Message . 1 day ago</span>
          </SecondaryText>
        </MessageInfo>

      </Card>

      <Card>
        <ProfilePicture />

        <MessageInfo>
          <div>Name</div>
          <SecondaryText>
            <span> Some Message . 1 day ago</span>
          </SecondaryText>
        </MessageInfo>

      </Card>

      <Card>
        <ProfilePicture />

        <MessageInfo>
          <div>Name</div>
          <SecondaryText>
            <span> Some Message . 1 day ago</span>
          </SecondaryText>
        </MessageInfo>

      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 16px;

`

interface CardProps{
  active?: boolean
}

const Card = styled('div')<CardProps>`
  display: flex;
  align-items: center;
  height: 52px;
  padding: 8px;

  border-radius: 8px;

  background: ${props => props.active ? 
    'rgba(60,64,67,.03)' : 'transparent'
  };

  &:hover {
    background: rgba(60,64,67,.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;   
  }
`

const SecondaryText = styled.div`
  color: #65676B;
  font-size: .8125rem;
  font-weight: light;
  padding-top: 4px;
`

const MessageInfo = styled.div`
  padding-left: 8px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;   
  }
`

export default MessagesList