import { FunctionComponent } from "react";
import styled from 'styled-components'

import LegitimateIcon from '../Icons/ThumbUp'
import UnsureIcon from '../Icons/Unsure'
import PhisingIcon from '../Icons/Alert'
import { useTranslation } from "react-i18next";

interface Props {
  onAnswer: (answer: string) => void 
}

export const AnswerOptions: FunctionComponent<Props> = ({onAnswer}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <PhisingButton onClick={() => { onAnswer('phising') }}>
        <PhisingIcon />
        <Text>{ t('quiz.answers.options.phising') }</Text>        
      </PhisingButton>

      <UnsureButton onClick={() => { onAnswer('unsure') }}>
        <UnsureIcon />
        <Text>{ t('quiz.answers.options.unsure') }</Text>        
      </UnsureButton>

      <LegitimateButton onClick={() => { onAnswer('legitimate') }}>
        <LegitimateIcon />
        <Text>{ t('quiz.answers.options.legitimate') }</Text>        
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

const Text = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    display: none; 
  }
`