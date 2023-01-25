import { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
import { FeedbackBox } from "../../components/UI/FeedbackBox";
import { Footer } from "../../components/UI/Footer";
import { SceneWithFooter } from "../../components/UI/SceneWithFooter";
import { SceneWrapper } from "../../components/UI/SceneWrapper";
import { SectionWrapper } from "../../components/UI/SectionWrapper";
import { CreateSurvey } from "../../domain/survey";
import { submitFeedback } from "../../fetch/feedback";
import { useToast } from "../../hooks/useToast";
import { useStore } from "../../store";

interface Props {}

export const Feedback: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const changeScene = useStore((state) => state.changeScene)
  const { createToast } = useToast()

  const [easyness, onEasyness] = useState('')
  const [recommend, onRecommend] = useState('')
  const [improve, onImprove] = useState('')

  const handleSubmitFeedback = async() => {                  
    if (easyness.length > 0 || recommend.length > 0 || improve.length > 0) {
      const data: CreateSurvey = {
        easyness: easyness.length > 0 ? easyness : null,
        recommend: recommend.length > 0 ? recommend : null,
        improvements: improve.length > 0 ? improve : null,
      }

      const success = await submitFeedback(data)
      if (success) {
        createToast('Thanks for your feedback!')
      }                    
    }

    changeScene('completed') 
  }

  return (
    <SceneWrapper>
      <SceneWithFooter>

        <StyledSectionWrapper>
          <FeedbackHeading>
            <FeedbackTitle>
              { t('feedback.title') }
            </FeedbackTitle>
            <FeedbackSubtitle>
            { t('feedback.subtitle') }
            </FeedbackSubtitle>
          </FeedbackHeading>

          <FeedbackBox 
            easyness={easyness}
            recommend={recommend}
            improve={improve}
            onEasyness={onEasyness}
            onRecommend={onRecommend}
            onImprove={onImprove}
          />

        </StyledSectionWrapper>


        <Footer 
          title=""
          action={(
            <FooterActionWrapper>
              <p>{ t('feedback.footer_title') }</p>
              <Button 
                text={ t('feedback.next_button') }
                rightIcon={<FiChevronRight size={18}/>}          
                onClick={handleSubmitFeedback}      
              />
            </FooterActionWrapper>
          )}
        />
      </SceneWithFooter>
    </SceneWrapper>
  )
}

const FooterActionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  padding-left: 50px;
`

const FeedbackTitle = styled.span`
  font-weight: 700;
  color: ${props => props.theme.secondary.dark};
  font-size: 60px;
  line-height: 80px;
  margin: 0;
`

const FeedbackSubtitle = styled.div`
  padding-top: 20px;
  font-weight: 300;
  font-size: 21px;
  line-height: 32px;
  color: #404040;
`

const StyledSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7vh 80px;  
`

const FeedbackHeading = styled.div`
  flex-shrink: 1;
  padding-right: 40px;
`