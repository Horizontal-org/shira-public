import { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {}

export const Footer: FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <div>
        Text message
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px;

  > div {
    cursor: pointer;
    width: 70%;
    text-align: left;
    background: #eee;
    border-radius: 30px;
    font-size: 12px;
    color: #aaa;
    padding: 8px 12px;
  }
`