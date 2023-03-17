import { FunctionComponent } from 'react'
import styled from 'styled-components'
import Arrow from './assets/Arrow'
import Call from './assets/Call'
import Search from './assets/Search'
import More from './assets/More'

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
        <SvgWrapper><Arrow /></SvgWrapper>
        <Phone>
          <span data-explanation={phone.explanationPosition}>{phone.textContent}</span>
        </Phone>
      </div>
      <div>
        <SvgWrapper><Call /></SvgWrapper>
        <SvgWrapper><Search /></SvgWrapper>
        <SvgWrapper><More /></SvgWrapper>
      </div>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  padding: 0 8px;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`

const SvgWrapper = styled.div`
  cursor: pointer;
  padding-right: 12px;

  > svg {
    fill: #424242;
    width: 20px;
    height: 20px;
  }
`

const Phone = styled.div`
  font-size: 16px;
  font-weight: 400; 
  color: #424242;
  margin-top: -6px;

  span {
    position: relative;
  }
`