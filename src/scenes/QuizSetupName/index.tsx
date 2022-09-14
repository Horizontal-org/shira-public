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

interface Props {}

export const QuizSetupNameScene: FunctionComponent<Props> = () => {
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
          title='Add a name and email address'
          subtitle="We ask for a name and email address to make the phishing quiz feel more realistic. This information will not be saved, sent out of our servers, or shared with anyone else"
        >
          <p>
            <Subtitle>To be extra-safe, you can use a fake name and email address, or generate random ones.</Subtitle>
          </p>

          <FormContent>
            <FormInputs>
              <BigTextInput 
                placeholder="Name"
                onChange={(e) => { handleName(e.target.value) }}
                value={name}
              />
              <BigTextInput 
                placeholder="Email"
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
                text="Make a random name and email address"
                leftIcon={<FiRefreshCcw size={18}/>}
              />
            </FormButton>
          </FormContent>
        </Section>

        <Footer 
          title="Quiz setup"
          action={(
            <Button 
              disabled={name.length === 0 || email.length === 0}
              onClick={() => { 
                updateName(name, email)
                changeScene('quiz-setup-apps')
              }} 
              text='Next'
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