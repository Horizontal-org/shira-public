import { FunctionComponent, useEffect } from "react";
import styled from 'styled-components'
import { Button } from "../../components/UI/Button";
import { Navbar } from "../../components/UI/Navbar";
import { SceneWrapper } from "../../components/UI/SceneWrapper";
import { Select } from "../../components/UI/Select";
import { FiChevronRight } from 'react-icons/fi'
import { useStore } from "../../store";
import { useTranslation } from "react-i18next";
import  {DAPClient} from 'divviup-ts/packages/dap'

const mockBatch = () => {
  let count = 0
  setInterval(() => {
    if (count < 120) {
      const client = new DAPClient({
        "type": "count",
        "taskId": "BflLM7xjTancTdtEMdlaKYIlmxOSVeYWm-3AzL0ld9k",
        "leader": "https://dap-04.api.divviup.org/",
        "helper": "https://helper.shira.app/",
        "timePrecisionSeconds": 60
      });
  
      client.sendMeasurement(true)
      count = count + 1
      console.log('sent ', count)
    } else {
      console.log('finished ')
    }
  }, 2000)
}

export const WelcomeScene: FunctionComponent = () => {  
  const changeScene = useStore((state) => state.changeScene)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    mockBatch()
  }, [])
  
  return (
    <SceneWrapper bg='white'>
      <Navbar />
      <CenterWrapper>
        <Title>{t('welcome.title')}</Title>
        <Subtitle>{t('welcome.subtitle')}</Subtitle>
        <Buttons>
          <Select 
            onChange={(v) => {
              i18n.changeLanguage(v)
              localStorage.setItem('lang', v);
            }}
            autoselect
            options={[
              {
                label: 'English',
                value: 'en'
              },
              {
                label: 'Español',
                value: 'es'
              },
              {
                label: 'Francais',
                value: 'fr'
              }
            ]}
          />
          <Button 
            onClick={() => { changeScene('quiz-setup-name')}} 
            text={t('welcome.start')}
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

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    padding: 24px;
  }
`

const Buttons = styled.div`
  padding-top: 20px;
  display: flex;

  > button {
    margin-left: 20px;
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