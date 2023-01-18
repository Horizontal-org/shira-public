import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from 'styled-components'
import { Button } from "../Button";

import UnsureIcon from '../Icons/Unsure'
import WrongIcon from '../Icons/Wrong'
import CorrectIcon from '../Icons/Correct'
import { useTranslation } from "react-i18next";
import QuestionMarkIcon from '../Icons/QuestionMark'

interface Props {
  onNext:  () => void;
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
  realAnswer,
  userAnswer,
  explanationsLength,
  explanationNumber,
  setExplanationNumber,
  showExplanations,
  handleShowExplanations
}) => {
  const { t } = useTranslation()
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

  return (
    <Wrapper>
      { userAnswer && (
        <UserAnswerWrapper>          
          {compareAnswers()}
          <p>{`This message seems ${realAnswer}`}</p>
        </UserAnswerWrapper>
      )}

      { 
        explanationsLength > 0 && !showExplanations && (
          <Button 
            text='See Why'
            type='outline'
            onClick={() => handleShowExplanations(true)}
            leftIcon={<QuestionMarkIcon size={18}/>}
          />
      )}

      {
        explanationsLength > 0 && explanationNumber < (explanationsLength - 1) && showExplanations && (
          <Button 
            text={t("quiz.answers.results.next_button")}
            type='outline'
            onClick={() => setExplanationNumber(explanationNumber + 1)}
            leftIcon={<FiChevronRight size={18}/>}
          />
        )
      }

      {
        (explanationNumber === (explanationsLength - 1) || explanationsLength === 0) && (
          <Button 
            text='Next Question'
            type='outline'
            onClick={onNext}
            rightIcon={<FiChevronRight size={18}/>}
          />
        )
      }
    </Wrapper>
  )
}

const UserAnswerWrapper = styled.div`
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
`

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`