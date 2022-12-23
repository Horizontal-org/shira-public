import { FunctionComponent, useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import { AppItem } from '../../components/UI/AppItem'
import { Button } from '../../components/UI/Button'
import { Footer } from '../../components/UI/Footer'
import { SceneWithFooter } from '../../components/UI/SceneWithFooter'
import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { Section } from '../../components/UI/Section'
import { App } from '../../domain/app'
import { useStore } from '../../store'
import shallow from 'zustand/shallow'
import { useTranslation } from 'react-i18next'

interface Props {}

export const QuizSetupAppsScene: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const { changeScene, apps, updateApps, persistedApps } = useStore(
    (state) => ({
      changeScene: state.changeScene,
      apps: state.apps,
      updateApps: state.updateApps,
      persistedApps: state.setup.apps
    }),
    shallow
  )

  const [selected, handleSelected] = useState<Array<string>>(persistedApps)

  return (
    <SceneWrapper>
      <SceneWithFooter>
        <Section
          title={t('setup.apps.title')}
          subtitle={t('setup.apps.subtitle')}
        >
          <>
          <p>
              <i>{t('setup.apps.select')}</i>    
            </p>
          </>

          <Apps>
            { apps.map((a, i) => (
              <AppItem 
                key={a.id}
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
          </Apps>
        </Section>

        <Footer
            title={t('setup.apps.footer_title')}
            action={(
              <FooterButtons>
                <Button
                  onClick={() => { 
                    changeScene('quiz-setup-name')
                  }} 
                  text={t('setup.apps.back_button')}
                  type="outline"
                  rightIcon={<FiChevronLeft size={18}/>}
                />             

                <Button
                  onClick={() => { 
                    updateApps(selected)
                    changeScene('quiz-setup-work')
                  }} 
                  disabled={selected.length === 0}
                  text={t('setup.apps.next_button')}
                  type="outline"
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

const Apps = styled.div`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;

  > div {
    margin-right: 12px;
  }
`