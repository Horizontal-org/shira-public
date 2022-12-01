import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Pic } from '../Pic'

interface Props {
  data: Element
}

export const Message:FunctionComponent<Props> = ({ data }) => {
  return (
    <Wrapper >
      <Pic />
      <Content dangerouslySetInnerHTML={{__html: data.outerHTML}}></Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  padding: 12px 8px;
`


const Content = styled.div`
  width: 70%;
  text-align: left;
  background: #f1f1f1;
  border-radius: 12px;
  font-size: 12px;
  color: #333;
  padding: 8px 12px;

  h1, h2, h3, h4, h5 {
    font-size: 12px;
    margin: 2px;
  }

  p {
    margin: 2px;
  }
`