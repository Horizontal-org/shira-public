import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styled from 'styled-components'
import { Button } from "../Button";

import UnsureIcon from '../Icons/Unsure'
import WrongIcon from '../Icons/Wrong'
import CorrectIcon from '../Icons/Correct'
import { useTranslation } from "react-i18next";
import QuestionMarkIcon from '../Icons/QuestionMark'
import useGetWidth from "../../../hooks/useGetWidth";

interface Props {
  onNext:  () => void;
  onAnswer: (answer: string) => void;
  realAnswer: string;
  userAnswer: string | null;
  explanationsLength: number
  explanationNumber: number
  setExplanationNumber: (explanationNumber: number) => void  
  showExplanations: boolean;
  handleShowExplanations: Dispatch<SetStateAction<boolean>>
}

export const AnswerFeedback: FunctionComponent<Props> = ({
  onNext,
  onAnswer,
  realAnswer,
  userAnswer,
  explanationsLength,
  explanationNumber,
  setExplanationNumber,
  showExplanations,
  handleShowExplanations
}) => {
  const { t } = useTranslation()
  const { width } = useGetWidth()
  const compareAnswers = () => {
    if (userAnswer === 'unsure') {
      return (<>
        <UnsureIcon />
        <span>{t("quiz.answers.results.unsure")}</span>
      </>)
    }
    if (realAnswer === userAnswer) {
      return (<>
        <CorrectIcon />
        <span>{t("quiz.answers.results.correct")}</span>
      </>)
    } else {
      return (<>
        <WrongIcon />
        <span>{t("quiz.answers.results.incorrect")}</span>
      </>)
    }
  }
  console.log(explanationNumber, showExplanations)
  return (
    <Wrapper>
      { (userAnswer && width > 800) && (
        <UserAnswerWrapper hide={showExplanations}>          
          {compareAnswers()}
          { realAnswer === 'phising' ? (
            <p>{`This message looks like phishing`}</p>
          ) : (
            <p>{`This message seems ${realAnswer}`}</p>
          )}
        </UserAnswerWrapper>
      )}

      {
        (userAnswer && width < 800 && !showExplanations) && (
          <UserAnswerWrapper hide={showExplanations}>          
          {compareAnswers()}
          { realAnswer === 'phising' ? (
            <p>{`This message looks like phishing`}</p>
          ) : (
            <p>{`This message seems ${realAnswer}`}</p>
          )}
        </UserAnswerWrapper>)
      }

      <OptionsWrapper>
        {(showExplanations && explanationNumber > 0) && <ActionButtonsWrapper>
          <Button 
            text={t("quiz.answers.results.back_button")}
            type='outline'
            onClick={() => {
              if(explanationsLength > 0 && explanationNumber >= 0) {
                setExplanationNumber(explanationNumber - 1)
              } else {
                onAnswer(null)
              }
            }}
            leftIcon={<FiChevronLeft size={18}/>}
          />
        </ActionButtonsWrapper>}
          { 
            explanationsLength > 0 && !showExplanations && (
              <ActionButtonsWrapper size="lg">
                <Button 
                  text='See Why'
                  size={width < 490 ? 'lg' : 'md'}
                  type='primary'
                  onClick={() => handleShowExplanations(true)}
                  leftIcon={<QuestionMarkIcon size={18} />}
                />
              </ActionButtonsWrapper>
          )}

          {
            explanationsLength > 0 && explanationNumber < (explanationsLength - 1) && showExplanations && (
              <ActionButtonsWrapper size={explanationNumber === 0 ? 'lg' : 'md'}>
                <Button 
                  text={t("quiz.answers.results.next_button")}
                  size={width < 490 ? 'lg' : 'md'}
                  type='primary'
                  onClick={() => setExplanationNumber(explanationNumber + 1)}
                  rightIcon={<FiChevronRight size={18}/>}
                />
              </ActionButtonsWrapper>
            )
          }

          {
            ((explanationNumber === (explanationsLength - 1) && showExplanations) || explanationsLength === 0) && (
              <ActionButtonsWrapper size="lg">
                <Button 
                  text='Next Question'
                  size={width < 490 ? 'lg' : 'md'}
                  type='primary'
                  onClick={onNext}
                  rightIcon={<FiChevronRight size={18}/>}
                />
              </ActionButtonsWrapper>
            )
          }
      </OptionsWrapper>
    </Wrapper>
  )
}

const UserAnswerWrapper = styled.div<{hide?: boolean}>`
  padding-left: 50px;
  display: flex;
  align-items: center;

  > p {
    margin: 0;
    padding-left: 30px;
  }

  > span {
    font-weight: 700;
    font-size: 16px;
  }

  > svg {
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

  @media (max-width:  ${props => props.theme.breakpoints.sm}) {
    padding-left: 16px;
    display: block;
    padding-bottom: 16px;
    >p {
      padding-left: 0;
    }
  }
`

const OptionsWrapper = styled.div`
  display: flex;
`

const ActionButtonsWrapper = styled.div<{ size?: string }>`
  padding-left: 16px;
  @media (max-width:  ${props => props.theme.breakpoints.sm}) {
    ${props => props.size === 'lg' && `width: 100%;`};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  @media (max-width:  ${props => props.theme.breakpoints.sm}) {
    display: block;
  }
`