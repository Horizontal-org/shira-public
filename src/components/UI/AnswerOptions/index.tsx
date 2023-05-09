import { FunctionComponent, useState } from "react";
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import LegitimateIcon from '../Icons/ThumbUp'
import UnsureIcon from '../Icons/Unsure'
import PhisingIcon from '../Icons/Alert'
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

interface Props {
  onAnswer: (answer: string) => void 
}

export const AnswerOptions: FunctionComponent<Props> = ({onAnswer}) => {
  const { t } = useTranslation()
  const [selected, handleSelected] = useState<string | null>(null)

  return (
    <Wrapper>
      
      <OptionsWrapper>
        <PhisingButton
          selected={selected === 'phishing'} 
          opacity={selected !== null && selected !== 'phishing'}
          onClick={() => { handleSelected('phishing') }}>
          <PhisingIcon />
          <Text>{ t('quiz.answers.options.phising') }</Text>        
        </PhisingButton>

        <UnsureButton 
          selected={selected === 'unsure'}
          opacity={selected !== null && selected !== 'unsure'}
          onClick={() => { handleSelected('unsure') }}>
          <UnsureIcon />
          <Text>{ t('quiz.answers.options.unsure') }</Text>        
        </UnsureButton>

        <LegitimateButton
          opacity={selected !== null && selected !== 'legitimate'}
          selected={selected === 'legitimate'} 
          onClick={() => { handleSelected('legitimate') }}>
          <LegitimateIcon />
          <Text>{ t('quiz.answers.options.legitimate') }</Text>        
        </LegitimateButton>
      </OptionsWrapper>

      <OptionsWrapper>
        <ActionButtonsWrapper>
          <Button
            onClick={() => { console.log('go back')}} 
            text={t('setup.apps.back_button')}
            type="outline"
            leftIcon={<FiChevronLeft size={18}/>}
          />
        </ActionButtonsWrapper>
        <ActionButtonsWrapper>
          <Button 
            text={t("quiz.answers.results.next_button")}
            type='primary'
            disabled={!selected}
            onClick={() => {onAnswer(selected)}}
            leftIcon={<FiChevronRight size={18}/>}
          />
        </ActionButtonsWrapper>
      </OptionsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 16px;

  > button {
    margin-left: 12px;
  }
`

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ActionButtonsWrapper = styled.div`
  padding-left: 16px;
`
// add prop to styled button
interface StyledButtonProps {
  selected?: boolean
  opacity?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  border-radius: 100px;
  padding: 11px 16px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  ${props => props.opacity && `opacity: 0.64;`}

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
  background: ${props => props.selected ? props.theme.colors.error8 : props.theme.colors.error7};
  &:hover {
    background: ${props => props.theme.colors.error6};
  }
  color: #fff;
`

const UnsureButton = styled(StyledButton)`
  background: ${props => props.selected ? props.theme.colors.warning3 : props.theme.colors.warning2};
  color: ${props => props.theme.colors.dark.black};
  &:hover {
    background: ${props => props.theme.colors.warning1};
  }
`

const LegitimateButton = styled(StyledButton)`
  background: ${props => props.selected ? props.theme.colors.green8 : props.theme.colors.green7};
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