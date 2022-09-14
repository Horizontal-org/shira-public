import { FunctionComponent } from 'react'
import { FiHome } from 'react-icons/fi'
import { HiOutlineRefresh } from 'react-icons/hi'
import styled from 'styled-components'
import { Button } from '../../components/UI/Button'
import CompletedIcon from '../../components/UI/Icons/Completed'
import { SceneWrapper } from '../../components/UI/SceneWrapper'
import { SectionWrapper } from '../../components/UI/SectionWrapper'
import { Subtitle } from '../../components/UI/Subtitle'
import { Title } from '../../components/UI/Title'
import { useStore } from '../../store'

interface Props {}


export const CompletedScene: FunctionComponent<Props> = () => {
  const changeScene = useStore((state) => state.changeScene)

  return (
    <SceneWrapper>
      <StyledSectionWrapper>
        <StyledSection>
          <Title>Quiz completed</Title>
          <HeavySubtitle>You answered 7 out of 10 questions correctly.</HeavySubtitle>
          <Subtitle>Take a new quiz or check out some recommendations below to continue strengthening your skills and become better at avoiding phishing.</Subtitle>

          <ButtonsWrapper>
            <Button 
              type='outline'
              leftIcon={<FiHome />}
              onClick={() => { changeScene('welcome')}}
              text='Back to home'
            />
            <Button 
              type='outline'
              leftIcon={<HiOutlineRefresh />}
              onClick={() => { changeScene('quiz-setup-name')}}
              text='New quiz'
            />
          </ButtonsWrapper>

        </StyledSection>

        <div>
          <CompletedIcon />
        </div>
      </StyledSectionWrapper>
    </SceneWrapper>
  )
}

const HeavySubtitle = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
`

const ButtonsWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  > button {
    margin-right: 12px;
  }
`

const StyledSection = styled.div`
  padding-right: 50px;
  flex-shrink: 2;
`

const StyledSectionWrapper = styled(SectionWrapper)`
  display: flex;
`