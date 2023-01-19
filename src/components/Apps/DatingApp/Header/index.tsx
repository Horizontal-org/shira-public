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
        <div>{phone.textContent}</div>
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