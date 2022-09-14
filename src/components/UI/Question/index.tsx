import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components'
import { AppLayout } from '../../Layouts/AppLayout';
import { AnswerFeedback } from '../AnswerFeedback';
import { AnswerOptions } from '../AnswerOptions';
import { Footer } from '../Footer';
import { SceneWithFooter } from '../SceneWithFooter';

interface Props {
  question: {
    content: ReactNode;
    app: string;
    answer: string;
  };
  questionCount: number;
  questionIndex: number;
  onNext: () => void
  changeScene: (scene: string) => void
}

export const Question: FunctionComponent<Props> = ({
  question,
  questionCount,
  questionIndex,
  changeScene,
  onNext,
}) => {
  
  const [answer, handleAnswer] = useState<string | null>(null)
  
  return (
    <SceneWithFooter>

      <AppLayout app={question.app}/>

      <Footer
        title={`${questionIndex + 1}/${questionCount}`}        
        action={answer ? (
          <AnswerFeedback 
            onNext={onNext}
            userAnswer={answer}
            realAnswer={question.answer}
          />
        ) : <AnswerOptions onAnswer={(a) => { handleAnswer(a) }} />}
      />
    </SceneWithFooter>
  )
}