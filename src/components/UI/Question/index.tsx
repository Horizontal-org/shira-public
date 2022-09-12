import { FunctionComponent, ReactNode, useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components'
import { AppLayout } from '../../Layouts/AppLayout';
import { Answers } from '../Answers';
import { Button } from '../Button';
import { Footer } from '../Footer';
import { SceneWithFooter } from '../SceneWithFooter';

interface Props {
  question: {
    content: ReactNode;
    app: string;
    answer: string;
  }
  onNext: () => void
  changeScene: (scene: string) => void
}

export const Question: FunctionComponent<Props> = ({
  question,
  changeScene,
  onNext
}) => {
  
  const [answer, handleAnswer] = useState<string | null>(null)
  
  return (
    <SceneWithFooter>

      <AppLayout app={question.app}/>

      <Footer
        title="Quiz"
        onClose={() => {
          changeScene('welcome')
        }}
        action={answer ? (
          <Button 
            text='Next'
            type='outline'
            onClick={onNext}
            rightIcon={<FiChevronRight size={18}/>}
          />
        ) : <Answers onAnswer={(a) => { handleAnswer(a) }} />}
      />
    </SceneWithFooter>
  )
}