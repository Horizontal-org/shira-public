import { FunctionComponent } from "react"
import styled from 'styled-components'

interface Props {
  position: string,
  text: string,
  hide: boolean
}

const ExplanationTooltip: FunctionComponent<Props> = ({ 
  position,
  text,
  hide
}) => {
  return (
    <Wrapper id={`explanation-${position}`} hide={hide} className='arrow'>
      <RelativeWrapper>
        <span> {text} </span>
      </RelativeWrapper>
    </Wrapper>
  )
}

interface WrapperProps {
  hide: boolean
}

const Wrapper = styled('div')<WrapperProps>`
  ${props => props.hide && 'display: none;'}
  position: absolute;
`

const RelativeWrapper = styled.div`
  position: relative;
  border: 1px solid red;

  max-width: 314px;
  font-weight: 500;
  top: 0;
  margin-top: 8px;
  padding: 8px;
  font-size: 12px;
  border: 3px solid #AAAAAA;
  border-radius: 6px;
  background-color: #fff;
  color: #767676;
  z-index: 1000;
  
  span:after {
    position: absolute;
    content: "";
    top: -23px;
    left: 7px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #aaa transparent;
    z-index: 1000;
  }
`

export default ExplanationTooltip