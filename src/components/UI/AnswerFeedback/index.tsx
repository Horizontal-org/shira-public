import { FunctionComponent } from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from 'styled-components'
import { Button } from "../Button";

import UnsureIcon from '../Icons/Unsure'
import WrongIcon from '../Icons/Wrong'
import CorrectIcon from '../Icons/Correct'

interface Props {
  onNext:  () => void;
  realAnswer: string;
  userAnswer: string | null;
}

export const AnswerFeedback: FunctionComponent<Props> = ({
  onNext,
  realAnswer,
  userAnswer
}) => {

  const compareAnswers = () => {
    if (userAnswer === 'unsure') {
      return (<>
        <UnsureIcon />
        <span>"I don't know"</span>
      </>)
    }
    if (realAnswer === userAnswer) {
      return (<>
        <CorrectIcon />
        <span>Good Job!</span>
      </>)
    } else {
      return (<>
        <WrongIcon />
        <span>Incorrect</span>
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
      <Button 
        text='Next'
        type='outline'
        onClick={onNext}
        rightIcon={<FiChevronRight size={18}/>}
      />
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