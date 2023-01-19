import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {}

export const Footer: FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <SearchBar>Say something...</SearchBar>
      <BottomWrapper>
        Icon
      </BottomWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #2C2C2E;
  padding: 16px;
`

const SearchBar = styled.div`
  color: #D6D6D6;
  padding-bottom: 8px;
`
const BottomWrapper = styled.div`
  display: flex;
  align-content: center;
`