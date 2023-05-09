import { FunctionComponent, useEffect, useState } from 'react'
import { Question as QuestionType } from '../../../domain/question';
import { AppLayout } from '../../Layouts/AppLayout';
import { AnswerFeedback } from '../AnswerFeedback';
import { AnswerOptions } from '../AnswerOptions';
import { Footer } from '../Footer';
import { SceneWithFooter } from '../SceneWithFooter';
import { Explanation } from '../../../domain/explanation';

interface Props {
  question: QuestionType;
  questionCount: number;
  questionIndex: number;
  onNext: () => void;
  goBack: () => void;
  changeScene: (scene: string) => void
}

export const Question: FunctionComponent<Props> = ({
  question,
  questionCount,
  questionIndex,
  goBack,
  onNext,
}) => {
  
  const [answer, handleAnswer] = useState<string | null>(null)
  const [ explanationNumber, setExplanationNumber ] = useState<number>(0)
  const [explanationsOrder, handleExplanationsOrder] = useState<Array<number>>([])
  const [showExplanations, handleShowExplanations] = useState<boolean>(false)
  
  useEffect(() => {
    const order = parseExplanations(question.explanations)
      .sort((a, b) => parseInt(a.position) - parseInt(b.position))
      .map(e => parseInt(e.index))

    handleExplanationsOrder(order)
  }, [])

  const parseExplanations = (explanation: Explanation[]):Explanation[] => 
    explanation.filter( expl =>  document.querySelector(`[data-explanation="${expl.index}"]`))

  return (
    <SceneWithFooter>

      {/* TODO Replace app param with algorithm on backend */}
      <AppLayout 
        app={question.app}
        content={question.content}
        explanations={parseExplanations(question.explanations)}
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
            explanationsLength={parseExplanations(question.explanations).length}
            setExplanationNumber={(n) => { setExplanationNumber(n)}}
            onNext={onNext}
            userAnswer={answer}
            realAnswer={question.isPhising ? 'phising' : 'legitimate'}
          />
        ) : <AnswerOptions goBack={goBack} onAnswer={(a) => { handleAnswer(a) }} />}
      />
    </SceneWithFooter>
  )
}