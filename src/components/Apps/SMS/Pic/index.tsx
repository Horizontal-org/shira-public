import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Account from './assets/Account'

interface Props {

}

export const Pic: FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <Account />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  align-self: flex-end;
  margin-bottom: -6px;
  margin-right: 6px;

  > svg {
    width: 36px;
    height: 36px;
    fill: ${props => props.theme.primary.base};
  }
`