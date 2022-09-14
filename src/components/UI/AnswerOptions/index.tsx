import { FunctionComponent } from "react";
import styled from 'styled-components'

import LegitimateIcon from '../Icons/ThumbUp'
import UnsureIcon from '../Icons/Unsure'
import PhisingIcon from '../Icons/Alert'

interface Props {
  onAnswer: (answer: string) => void 
}

export const AnswerOptions: FunctionComponent<Props> = ({onAnswer}) => {
  return (
    <Wrapper>
      <PhisingButton onClick={() => { onAnswer('phising') }}>
        <PhisingIcon />
        Looks like phishing
      </PhisingButton>

      <UnsureButton onClick={() => { onAnswer('unsure') }}>
        <UnsureIcon />
        I don’t know
      </UnsureButton>

      <LegitimateButton onClick={() => { onAnswer('legitimate') }}>
        <LegitimateIcon />
        Looks legitimate
      </LegitimateButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-left: 12px;
  }
`

const StyledButton = styled.button`
  all: unset;
  border-radius: 4px;
  padding: 11px 16px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  align-items: center;

  color: #404040;

  > svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }
`

const PhisingButton = styled(StyledButton)`
  background: #F99C93;
`

const UnsureButton = styled(StyledButton)`
  background: #FFAE72;
`

const LegitimateButton = styled(StyledButton)`
  background: #9FB747;
`