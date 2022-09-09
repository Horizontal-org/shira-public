import { FunctionComponent, useState } from 'react'
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

interface Props {}

export const QuizSetupAppsScene: FunctionComponent<Props> = () => {
  const changeScene = useStore((state) => state.changeScene)
  const apps = useStore((state) => state.apps)

  const [selected, handleSelected] = useState<Array<string>>([])

  return (
    <SceneWrapper>
      <SceneWithFooter>
        <Section
          title='Which apps do you use?'
          subtitle='This will help us customize the quiz questions to make them look as realistic as possible. This information will not be saved or shared with anyone else.'
        >
          <>
            <p>
              <i>Select at least 1</i>    
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
            title="Quiz setup"
            onClose={() => {
              changeScene('welcome')
            }}
            action={(
              <FooterButtons>
                <Button
                  onClick={() => { 
                    changeScene('quiz-setup-name')
                  }} 
                  text='Back'
                  type="outline"
                  rightIcon={<FiChevronLeft size={18}/>}
                />             

                <Button
                  onClick={() => { 
                    changeScene('quiz-setup-work')
                  }} 
                  disabled={selected.length === 0}
                  text='Next'
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