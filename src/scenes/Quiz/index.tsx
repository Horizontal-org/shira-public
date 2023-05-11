import { FunctionComponent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import shallow from 'zustand/shallow'
import { Button } from '../../components/UI/Button'
import { Footer } from '../../components/UI/Footer'
import { Question } from '../../components/UI/Question'
import { SceneWithFooter } from '../../components/UI/SceneWithFooter'
import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { Title } from '../../components/UI/Title'
import { useStore } from '../../store'
import { FiChevronRight } from 'react-icons/fi'
import useGetWidth from '../../hooks/useGetWidth'
interface Props {}

export const Quiz:FunctionComponent<Props> = () => {
  const { width } = useGetWidth()
  const { t } = useTranslation()
  const {
    changeScene,
    apps,
    fieldsOfWork,
    fetchQuiz,
    quiz
  } = useStore((state) => ({
    changeScene: state.changeScene,
    apps: state.setup.apps,
    fieldsOfWork: state.setup.fields_of_work,
    fetchQuiz: state.fetchQuiz,
    quiz: state.quiz
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
        />
      ) : (
        <SceneWithFooter>
          <Center>
            <div>
              <Title>{t('quiz.how_it_works.title')}</Title>
              <p>{t('quiz.how_it_works.explanation_1')}</p>
              <p>{t('quiz.how_it_works.explanation_2')}</p>
              <p>{t('quiz.how_it_works.explanation_3')}</p>
            </div>
          </Center>
          <Footer 
            title={t('quiz.how_it_works.footer_title')}
            action={(
                <Button 
                  text={t('quiz.how_it_works.next')}
                  size={width > 490 ? 'sm' : 'lg'}
                  onClick={() => { 
                    if (quiz.length === 0) { 
                      changeScene('feedback')                  
                    } else {
                      handleStarted(true) 
                    }

                  }}
                  rightIcon={<FiChevronRight size={18}/>}
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