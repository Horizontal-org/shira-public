import { FunctionComponent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import shallow from 'zustand/shallow'
import { Button } from '../../components/UI/Button'
import { Footer } from '../../components/UI/Footer'
import { SceneWithFooter } from '../../components/UI/SceneWithFooter'
import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { Section } from '../../components/UI/Section'
import { WorkFieldItem } from '../../components/UI/WorkFieldItem'
import { useStore } from '../../store'

interface Props {}

export const QuizSetupWorkScene: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const { changeScene, fieldsOfWork, updateFieldsOfWork, persistedFieldsOfWork } = useStore(
    (state) => ({
      changeScene: state.changeScene,
      fieldsOfWork: state.fieldsOfWork,
      updateFieldsOfWork: state.updateFieldsOfWork,
      persistedFieldsOfWork: state.setup.fields_of_work
    }),
    shallow
  )

  const [selected, handleSelected] = useState<Array<string>>(persistedFieldsOfWork)

  return (
    <SceneWrapper>
      <SceneWithFooter>
        <Section
          title={t('setup.fields_of_work.title')}
          subtitle={t('setup.fields_of_work.subtitle')}
        >
          <>
            <p>
              <i>{t('setup.fields_of_work.select')}</i>    
            </p>
          </>

          <Fields>
            { fieldsOfWork.map((a, i) => (
              <WorkFieldItem 
                key={a.id}
                slug={a.slug}
                selected={selected.includes(a.id + '')}
                name={a.name}
                onClick={() => {
                  let newSelected = selected.slice()
                  if (selected.includes(a.id + '')) {
                    newSelected = selected.filter(s => s !== (a.id + ''))
                  } else {
                    newSelected.push(a.id + '')
                  }
                  handleSelected(newSelected)
                }}
              />
            ))}
          </Fields>
        </Section>

        <Footer
            title={t('setup.fields_of_work.footer_title')}
            action={(
              <FooterButtons>
                <Button
                  onClick={() => { 
                    changeScene('quiz-setup-apps')
                  }} 
                  text={t('setup.fields_of_work.back_button')}
                  type="outline"
                  rightIcon={<FiChevronLeft size={18}/>}
                />             

                <Button
                  onClick={() => { 
                    updateFieldsOfWork(selected)
                    changeScene('quiz')
                  }} 
                  disabled={selected.length === 0}
                  text={t('setup.fields_of_work.next_button')}
                  type="primary"
                  rightIcon={<FiChevronRight size={18}/>}
                />             
              </FooterButtons>
            )}
          />
      </SceneWithFooter>
    </SceneWrapper>
  )
}

const FooterButtons = styled.div`
  display: flex;
  > button {
    margin-left: 10px;
  }
`

const Fields = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap;

  > div {
    margin-right: 12px;
  }
`