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
  // TODO FIX QUESTION APP
  // TODO FIX ANSWER

  return (
    <SceneWithFooter>

      <AppLayout 
        app={question.apps[Math.floor(Math.random() * question.apps.length)]}
        content={question.content}
      />

      <Footer
        title={`${questionIndex + 1}/${questionCount}`}        
        action={answer ? (
          <AnswerFeedback 
            onNext={onNext}
            userAnswer={answer}
            realAnswer={'legitimate'}
          />
        ) : <AnswerOptions onAnswer={(a) => { handleAnswer(a) }} />}
      />
    </SceneWithFooter>
  )
}