import { FunctionComponent } from 'react'
import styled from 'styled-components'
import BackArrow from './Icons/BackArrow'
import MoreOptions from './Icons/MoreOptions'

interface Props {
  phone: {
    textContent: string;
    explanationPosition: string;
  };
}

export const Header: FunctionComponent<Props> = ({ phone }) => {
  return (
    <Wrapper>
      <div>
        <BackArrow />
      </div>
      <UserInfo>
        <UserName>
          <OnlineMark></OnlineMark>
          <span>{phone.textContent}</span>
        </UserName>
        <div>832 feet away</div>
      </UserInfo>
      <div>
        <MoreOptions />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`

const UserInfo = styled.div`
  color: #fafafa
`

const UserName = styled.div`
  display: flex;
  align-items: center;
`

const OnlineMark = styled.div`
  background-color: green;
  width: 8px;
  height: 8px;
  border-radius:50%;
  margin-right: 8px;
`