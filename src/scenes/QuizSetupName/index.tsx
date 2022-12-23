import { FunctionComponent, useState, useEffect } from "react";
import { lowerCase } from 'lodash'
import styled from 'styled-components'
import shallow from 'zustand/shallow'

import { Button } from "../../components/UI/Button";
import { Footer } from "../../components/UI/Footer";
import { SceneWrapper } from "../../components/UI/SceneWrapper";
import { FiChevronRight } from 'react-icons/fi'
import { Title } from "../../components/UI/Title";
import { Subtitle } from "../../components/UI/Subtitle";
import { BigTextInput } from "../../components/UI/BigTextInput";
import { FiRefreshCcw } from 'react-icons/fi'
import { getRandomName } from "../../utils/randomName";
import { useStore } from "../../store";
import { Section } from "../../components/UI/Section";
import { SceneWithFooter } from "../../components/UI/SceneWithFooter";
import { useTranslation } from "react-i18next";

interface Props {}

export const QuizSetupNameScene: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const {
    changeScene,
    persistedName,
    persistedEmail,
    updateName,
    apps,
    fetchApp,
    fieldsOfWork,
    fetchFieldsOfWork
  } = useStore(
    (state) => ({ 
      changeScene: state.changeScene,
      persistedName: state.setup.name, 
      persistedEmail: state.setup.email, 
      updateName: state.updateName,
      apps: state.apps, 
      fetchApp: state.fetchApp,
      fieldsOfWork: state.fieldsOfWork, 
      fetchFieldsOfWork: state.fetchFieldsOfWork
    }),
    shallow
  )

  const [name, handleName] = useState(persistedName || '')
  const [email, handleEmail] = useState(persistedEmail || '')

  useEffect(() => {
    if (apps.length === 0) {
      fetchApp()
    }

    if (fieldsOfWork.length === 0) {
      fetchFieldsOfWork()
    }
  }, [])

  return (
    <SceneWrapper>
      <SceneWithFooter>

        <Section
          title={t('setup.name.title')}
          subtitle={t('setup.name.subtitle')}
        >
          <p>
            <Subtitle>{t('setup.name.recommendation')}</Subtitle>
          </p>

          <FormContent>
            <FormInputs>
              <BigTextInput 
                placeholder={t('setup.name.name')}
                onChange={(e) => { handleName(e.target.value) }}
                value={name}
              />
              <BigTextInput 
                placeholder={t('setup.name.email')}
                onChange={(e) => { handleEmail(e.target.value) }}
                value={email}
              />
            </FormInputs>
            <FormButton>
              <Button
                type='secondary'
                onClick={() => {
                  const randomName = getRandomName()
                  handleName(randomName)
                  handleEmail(`${lowerCase(randomName)}@awesomemail.com`)
                }}
                text={t('setup.name.random_button')}
                leftIcon={<FiRefreshCcw size={18}/>}
              />
            </FormButton>
          </FormContent>
        </Section>

        <Footer 
          title={t('setup.name.footer_title')}
          action={(
            <Button 
              disabled={name.length === 0 || email.length === 0}
              onClick={() => { 
                updateName(name, email)
                changeScene('quiz-setup-apps')
              }} 
              text={t('setup.name.next_button')}
              type="outline"
              rightIcon={<FiChevronRight size={18}/>}
            />             
          )}
        />
      </SceneWithFooter>  
    </SceneWrapper>
  )
}

const FormContent = styled.div`
  display: flex;
  align-items: center;
`

const FormButton = styled.div`
  max-width: 300px;
  padding-left: 20px;
`

const FormInputs = styled.div`
  flex-grow: 1;
  
  > input {
    margin-bottom: 20px;
  }
`