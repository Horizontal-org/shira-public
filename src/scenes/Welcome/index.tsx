import { FunctionComponent } from "react";
import styled from 'styled-components'
import { Button } from "../../components/UI/Button";
import { Navbar } from "../../components/UI/Navbar";
import { SceneWrapper } from "../../components/UI/SceneWrapper";
import { Select } from "../../components/UI/Select";
import { FiChevronRight } from 'react-icons/fi'
import { useStore } from "../../store";

export const WelcomeScene: FunctionComponent = () => {  
  const changeScene = useStore((state) => state.changeScene)

  return (
    <SceneWrapper>
      <Navbar />
      <CenterWrapper>
        <Title>Welcome to Shira</Title>
        <Subtitle>Build skills to detect and defeat phishing attempts</Subtitle>
        <Buttons>
          <Select 
            autoselect
            options={[
              {
                label: 'English',
                value: 'english'
              },
              {
                label: 'Español',
                value: 'spanish'
              }
            ]}
          />
          <Button 
            onClick={() => { changeScene('quiz-setup-name')}} 
            text='Start quiz'
            rightIcon={<FiChevronRight size={18}/>}
          />          
        </Buttons>
      </CenterWrapper>
      <span></span>
    </SceneWrapper>
  )
}



const CenterWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
`

const Buttons = styled.div`
  padding-top: 20px;
  display: flex;

  > button {
    margin-left: 20px;
  }
`

const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > svg {
    padding-left: 16px;
  }
`

const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
`

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  padding: ${props => props.theme.spacing.md};
`