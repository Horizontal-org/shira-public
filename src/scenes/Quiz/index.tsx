import { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import shallow from 'zustand/shallow'
import { Button } from '../../components/UI/Button'
import { Footer } from '../../components/UI/Footer'
import { Question } from '../../components/UI/Question'
import { SceneWithFooter } from '../../components/UI/SceneWithFooter'
import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { Title } from '../../components/UI/Title'
import { getQuiz } from '../../fetch/quiz'
import { useStore } from '../../store'

interface Props {}

export const Quiz:FunctionComponent<Props> = () => {
  const changeScene = useStore((state) => state.changeScene )
  const [questions, handleQuestions] = useState([])
  const [started, handleStarted] = useState(false)
  const [questionIndex, handleQuestionIndex] = useState(0)

  useEffect(() => {
    const startQuiz = async() => {
      const questions = await getQuiz()
      handleQuestions(questions)    
    }

    startQuiz()
  }, [])

  return (
    <SceneWrapper>
      
      {started ? (
        <Question 
          key={questionIndex}
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          questionCount={questions.length}
          changeScene={changeScene}
          onNext={() => { 
            if (questionIndex < (questions.length -1)) {
              handleQuestionIndex(questionIndex + 1)
            } else {
              changeScene('feedback')
            }
          }}
        />
      ) : (
        <SceneWithFooter>
          <Center>
            <div>
              <Title>How it works</Title>
              <p>This quiz contains 10 questions.</p>
              <p>For each question, please determine whether the message shown seems like a phishing attempt or seems legitimate.</p>
              <p>If you are not sure, you can select the “I don’t know” option.</p>
            </div>
          </Center>
          <Footer 
            title='Quiz intro'
            action={(
              <Button 
                text="OK"
                onClick={() => { handleStarted(true) }}
              />
            )}
          />
        </SceneWithFooter>
      )}
    </SceneWrapper>
  )
}

const Center = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    max-width: 60vw;
    text-align: center;
  }
`