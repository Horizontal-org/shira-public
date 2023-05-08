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
  border-radius: 100px;
  padding: 11px 16px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    border-radius: 16px;
    >svg {
      margin-right: 0;
    }
  }
`

const PhisingButton = styled(StyledButton)`
  background: ${props => props.theme.colors.error7};
  &:hover {
    background: ${props => props.theme.colors.error6};
  }
  color: #fff;
`

const UnsureButton = styled(StyledButton)`
  background: ${props => props.theme.colors.warning2};
  color: ${props => props.theme.colors.dark.black};
  &:hover {
    background: ${props => props.theme.colors.warning1};
  }
`

const LegitimateButton = styled(StyledButton)`
  background: ${props => props.theme.colors.green7};
  &:hover {
    background: ${props => props.theme.colors.green6};
  }
  color: #fff;
`

const Text = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    display: none; 
  }
`