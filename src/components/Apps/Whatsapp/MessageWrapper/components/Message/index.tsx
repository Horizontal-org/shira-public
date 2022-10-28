import { FunctionComponent } from 'react'
import styled from 'styled-components'


interface Props {
  data: Element
}

const Message:FunctionComponent<Props> = ({ data }) => {

  return (
    <Wrapper>
      <div>
        <Content dangerouslySetInnerHTML={{__html: data.outerHTML}}></Content>
        <span>00:00</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;

  > div {
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
    float: left;
    background: #fff;
    border-radius: 7.5px;
    padding: 6px 7px 8px 9px;
    box-shadow: 0 1px 0.5px rgba(11,20,26, .13);
    margin: 2px 0; 

    > span {
      font-size: 9px;
      align-self: flex-end;
      color: #667781;
      padding-left: 22px;
      font-weight: 200;
      margin-bottom: -2px;
    }
  }
`

const Content = styled.div`
  display: inline;
  text-align: left;
  
  font-size: 12px;
  color: #111b21;
  h1, h2, h3, h4, h5 {
    font-size: 12px;
    margin: 0.8px;
  }

  p {
    margin: 0.8px;
  }
`

export default Message