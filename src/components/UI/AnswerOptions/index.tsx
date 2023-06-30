import { FunctionComponent, useState } from "react";
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import LegitimateIcon from '../Icons/ThumbUp'
import UnsureIcon from '../Icons/Unsure'
import PhisingIcon from '../Icons/Alert'
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import useGetWidth from "../../../hooks/useGetWidth";

interface Props {
  onAnswer: (answer: string) => void;
  goBack: () => void;
  isExpanded: boolean;
  handleIsExpanded?: (isExpanded: boolean) => void;
}

export const AnswerOptions: FunctionComponent<Props> = ({onAnswer, goBack, isExpanded, handleIsExpanded}) => {
  const { t } = useTranslation()
  const { width } = useGetWidth()
  const [selected, handleSelected] = useState<string | null>(null)

  const handleAnswer = (answer) => {
    handleSelected(answer)
    handleIsExpanded(true)
  }

  return (
    <Wrapper isExpanded={isExpanded}>
      
      <OptionsWrapper isExpanded={isExpanded}>
        <PhisingButton
          isExpanded={isExpanded}
          selected={selected === 'phishing'} 
          opacity={selected !== null && selected !== 'phishing'}
          onClick={() => { handleAnswer('phishing') }}>
          <PhisingIcon />
          <Text isExpanded={isExpanded}>{ t('quiz.answers.options.phising') }</Text>        
        </PhisingButton>

        <UnsureButton
          isExpanded={isExpanded}
          selected={selected === 'unsure'}
          opacity={selected !== null && selected !== 'unsure'}
          onClick={() => { handleAnswer('unsure') }}>
          <UnsureIcon />
          <Text isExpanded={isExpanded}>{ t('quiz.answers.options.unsure') }</Text>        
        </UnsureButton>

        <LegitimateButton
          isExpanded={isExpanded}
          opacity={selected !== null && selected !== 'legitimate'}
          selected={selected === 'legitimate'} 
          onClick={() => { handleAnswer('legitimate') }}>
          <LegitimateIcon />
          <Text isExpanded={isExpanded}>{ t('quiz.answers.options.legitimate') }</Text>        
        </LegitimateButton>
      </OptionsWrapper>
      { (width > 1024 || isExpanded) && (
        <OptionsActionsWrapper>
          <ActionButtonsWrapper>
            <Button
              onClick={() => { goBack()}} 
              text={t('setup.apps.back_button')}
              type="outline"
              leftIcon={<FiChevronLeft size={18}/>}
            />
          </ActionButtonsWrapper>
          <ActionButtonsWrapper type="primary">
            <Button 
              text={t("quiz.answers.results.next_button")}
              type='primary'
              disabled={!selected}
              onClick={() => {onAnswer(selected)}}
              rightIcon={<FiChevronRight size={18}/>}
            />
          </ActionButtonsWrapper>
        </OptionsActionsWrapper>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div<{isExpanded?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 16px;

  > button {
    margin-left: 12px;
  }

  @media (max-width:  ${props => props.theme.breakpoints.md}) {
    padding-left: 0;
    display: ${props => props.isExpanded ? 'block' : 'flex'};
  }
`

const OptionsWrapper = styled.div<{isExpanded?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: ${props => props.isExpanded ? 'block' : 'flex'};
    ${props => props.isExpanded && `width: 90%`}
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    display: ${props => props.isExpanded ? 'block' : 'flex'};
    ${props => props.isExpanded && `width: 80%`}
  }
`

const OptionsActionsWrapper = styled.div<{isExpanded?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-right: 8px;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    margin: 0 16px;
    padding: 0 4px;
  }
}
`
const ActionButtonsWrapper = styled.div<{type?: string}>`
  padding: 0 8px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
    width: 50%;

    >button {
      width: 75%;
      padding-top: 12px;
      padding-bottom: 12px;
      justify-content: center;
      ${props => props.type === 'primary' && `float: right;`}
    }
  }
`
// add prop to styled button
interface StyledButtonProps {
  selected?: boolean
  opacity?: boolean
  isExpanded?: boolean
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

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    border-radius: ${props => props.isExpanded ? '100px' : '16px'};
    padding: 16px;
    margin-right: 15px;
    >svg {
      ${props => !props.isExpanded && `margin-right: 0;`}
    }
    margin-bottom: ${props => props.isExpanded ? '16px' : '0'};
    ${props => props.isExpanded && `width: 100%;`};
  }
`

export const PhisingButton = styled(StyledButton)`
  background: ${props => props.selected ? props.theme.colors.error8 : props.theme.colors.error7};
  &:hover {
    background: ${props => props.theme.colors.error6};
  }
  color: #fff;
`

export const UnsureButton = styled(StyledButton)`
  background: ${props => props.selected ? props.theme.colors.warning3 : props.theme.colors.warning2};
  color: ${props => props.theme.colors.dark.black};
  &:hover {
    background: ${props => props.theme.colors.warning1};
  }
`

export const LegitimateButton = styled(StyledButton)`
  background: ${props => props.selected ? props.theme.colors.green8 : props.theme.colors.green7};
  &:hover {
    background: ${props => props.theme.colors.green6};
  }
  color: #fff;
`

export const Text = styled.div<{isExpanded?: boolean}>`
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    ${props => !props.isExpanded && `display: none;`} 
  }
`