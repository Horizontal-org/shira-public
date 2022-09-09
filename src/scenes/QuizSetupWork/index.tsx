import { FunctionComponent, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'
import { AppItem } from '../../components/UI/AppItem'
import { Button } from '../../components/UI/Button'
import { Footer } from '../../components/UI/Footer'
import { SceneWithFooter } from '../../components/UI/SceneWithFooter'
import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { Section } from '../../components/UI/Section'
import { WorkFieldItem } from '../../components/UI/WorkFieldItem'
import { useStore } from '../../store'

interface Props {}

export const QuizSetupWorkScene: FunctionComponent<Props> = () => {
  const changeScene = useStore((state) => state.changeScene)
  const fieldsOfWork = useStore((state) => state.fieldsOfWork)

  const [selected, handleSelected] = useState<Array<string>>([])

  return (
    <SceneWrapper>
      <SceneWithFooter>
        <Section
          title='Which fields do you work in?'
          subtitle='Which fields do you work in?'
        >
          <>
            <p>
              <i>Select up to 3 items</i>    
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
            title="Quiz setup"
            onClose={() => {
              changeScene('welcome')
            }}
            action={(
              <FooterButtons>
                <Button
                  onClick={() => { 
                    changeScene('quiz-setup-apps')
                  }} 
                  text='Back'
                  type="outline"
                  rightIcon={<FiChevronLeft size={18}/>}
                />             

                <Button
                  onClick={() => { 
                    changeScene('quiz')
                  }} 
                  disabled={selected.length === 0}
                  text='Start quiz'
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