import { FunctionComponent, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import { Button } from "../../components/UI/Button";
import { FeedbackBox } from "../../components/UI/FeedbackBox";
import { Footer } from "../../components/UI/Footer";
import { SceneWithFooter } from "../../components/UI/SceneWithFooter";
import { SceneWrapper } from "../../components/UI/SceneWrapper";
import { SectionWrapper } from "../../components/UI/SectionWrapper";
import { useStore } from "../../store";

interface Props {}

export const Feedback: FunctionComponent<Props> = () => {
  const changeScene = useStore((state) => state.changeScene)

  const [easyness, onEasyness] = useState('')
  const [recommend, onRecommend] = useState('')
  const [improve, onImprove] = useState('')

  return (
    <SceneWrapper>
      <SceneWithFooter>

        <StyledSectionWrapper>
          <FeedbackHeading>
            <FeedbackTitle>
              Help us improve
            </FeedbackTitle>
            <FeedbackSubtitle>
              One last thing before the quiz results: let us know what you think about Shira to help improve it for future users.
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
              <p>You’re almost done! Keep going to see your quiz results and recommended next steps.</p>
              <Button 
                text="See results"
                rightIcon={<FiChevronRight size={18}/>}          
                onClick={() => { changeScene('completed') }}      
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
  padding: 100px 80px;  
`

const FeedbackHeading = styled.div`
  flex-shrink: 1;
  padding-right: 40px;
`