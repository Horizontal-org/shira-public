import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components'
import { Question as QuestionType } from '../../../domain/question';
import { AppLayout } from '../../Layouts/AppLayout';
import { AnswerFeedback } from '../AnswerFeedback';
import { AnswerOptions } from '../AnswerOptions';
import { Footer } from '../Footer';
import { SceneWithFooter } from '../SceneWithFooter';

interface Props {
  question: QuestionType;
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
  const [ explanationNumber, setExplanationNumber ] = useState<number>(0)

  return (
    <SceneWithFooter>

      <AppLayout 
        app={question.apps[0]}
        content={question.content}
        explanations={question.explanations}
        explanationNumber={explanationNumber}
        answer={answer}
      />

      <Footer
        title={`${questionIndex + 1}/${questionCount}`}        
        action={answer ? (
          <AnswerFeedback 
            explanationNumber={explanationNumber}
            explanationsLength={question.explanations.length}
            setExplanationNumber={(n) => { setExplanationNumber(n)}}
            onNext={onNext}
            userAnswer={answer}
            realAnswer={'legitimate'}
          />
        ) : <AnswerOptions onAnswer={(a) => { handleAnswer(a) }} />}
      />
    </SceneWithFooter>
  )
}