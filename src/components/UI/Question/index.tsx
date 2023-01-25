import { FunctionComponent, useEffect, useState } from 'react'
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
  const [explanationsOrder, handleExplanationsOrder] = useState<Array<number>>([])
  const [showExplanations, handleShowExplanations] = useState<boolean>(false)
  
  useEffect(() => {
    const order = question.explanations
      .sort((a, b) => parseInt(a.position) - parseInt(b.position))
      .map(e => parseInt(e.index))

    handleExplanationsOrder(order)
  }, [])

  return (
    <SceneWithFooter>

      {/* TODO Replace app param with algorithm on backend */}
      <AppLayout 
        app={question.apps[0]}
        content={question.content}
        explanations={question.explanations}
        explanationNumber={explanationsOrder[explanationNumber]}
        answer={answer}
        showExplanations={showExplanations}
      />

      <Footer
        title={`${questionIndex + 1}/${questionCount}`}        
        action={answer ? (
          <AnswerFeedback 
            showExplanations={showExplanations}
            handleShowExplanations={handleShowExplanations}
            explanationNumber={explanationNumber}
            explanationsLength={question.explanations.length}
            setExplanationNumber={(n) => { setExplanationNumber(n)}}
            onNext={onNext}
            userAnswer={answer}
            realAnswer={question.isPhising ? 'phising' : 'legitimate'}
          />
        ) : <AnswerOptions onAnswer={(a) => { handleAnswer(a) }} />}
      />
    </SceneWithFooter>
  )
}