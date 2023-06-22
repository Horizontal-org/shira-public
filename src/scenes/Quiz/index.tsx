import { FunctionComponent, useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
import { Question } from '../../components/UI/Question'

import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { useStore } from '../../store'
import { QuizInstructions } from './QuizInstructions'
interface Props {}

export const Quiz:FunctionComponent<Props> = () => {
  const {
    changeScene,
    apps,
    fieldsOfWork,
    fetchQuiz,
    quiz,
    setCorrectQuestions
  } = useStore((state) => ({
    changeScene: state.changeScene,
    apps: state.setup.apps,
    fieldsOfWork: state.setup.fields_of_work,
    fetchQuiz: state.fetchQuiz,
    quiz: state.quiz,
    setCorrectQuestions: state.setCorrectQuestions
  }), shallow)

  const [questions, handleQuestions] = useState([])
  const [started, handleStarted] = useState(false)
  const [questionIndex, handleQuestionIndex] = useState(0)

  useEffect(() => {
    const startQuiz = async() => {
      fetchQuiz(apps, fieldsOfWork)
    }

    startQuiz()
  }, [])

  useEffect(() => {
    if (quiz) {
      handleQuestions(quiz)
    }
  }, [quiz])

  return (
    <SceneWrapper>
      
      {started ? (
        <Question 
          key={questionIndex}
          question={questions.length > 0 && questions[questionIndex]}
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
          goBack={() => {
            if (questionIndex > 0) {
              handleQuestionIndex(questionIndex - 1)
            } else {
              changeScene('quiz-setup-work')
            }
          }}
          setCorrectQuestions={() => setCorrectQuestions(questions[questionIndex])}
        />
      ) : (
        <QuizInstructions 
          onNext = {() => {
            if (quiz.length === 0) { 
              changeScene('feedback')                  
            } else {
              handleStarted(true) 
            }
          }}
        />
      )}
    </SceneWrapper>
  )
}