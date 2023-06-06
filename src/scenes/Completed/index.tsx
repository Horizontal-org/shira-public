import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../../components/UI/Navbar'
import { FiHome } from 'react-icons/fi'
import { HiOutlineRefresh } from 'react-icons/hi'
import styled from 'styled-components'
import { Button } from '../../components/UI/Button'
import CompletedIcon from '../../components/UI/Icons/Completed'
import CompletedMobile from '../../components/UI/Icons/CompletedMobile'
import { Subtitle } from '../../components/UI/Subtitle'
import { Heading } from '../../components/UI/Title'
import { useStore } from '../../store'
import useGetWidth from '../../hooks/useGetWidth'

interface Props {}


export const CompletedScene: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  const { width } = useGetWidth()
  const changeScene = useStore((state) => state.changeScene)

  return (
    <Wrapper>
      <Navbar />
      <StyledSectionWrapper>
        <StyledSection>
          <Heading>{ t('completed.title') }</Heading>
          <HeavySubtitle>{ t('completed.heavy_subtitle') }</HeavySubtitle>
          {width < 800 && (
            <MobileIconWrapper>
              <CompletedMobile />
            </MobileIconWrapper>  
          )}
          <InfoSubtitle>{ t('completed.subtitle') }</InfoSubtitle>

        </StyledSection>

        {width > 800 && (
          <div>
            <CompletedIcon 
              width={318}
              height={312}
            />
          </div>
        )}
      </StyledSectionWrapper>
      <ButtonsWrapper>
        <Button 
          type='outline'
              leftIcon={<FiHome />}
              onClick={() => { changeScene('welcome')}}
              text={ t('completed.back_button') }
            />
            <Button 
              type='outline'
              leftIcon={<HiOutlineRefresh />}
              onClick={() => { changeScene('quiz-setup-name')}}
              text={ t('completed.next_button') }
            />
          </ButtonsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const HeavySubtitle = styled.p`
  font-weight: 300;
  color: ${props => props.theme.colors.dark.black};
  font-size: 21px;
  line-height: 29px;

  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    font-weight: 400;
    font-size: 24px;
  }
`
const InfoSubtitle = styled(HeavySubtitle)`
  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 21.79px;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  > button {
    margin-right: 12px;
    padding: 16px 20px;
    width: 156px;
    text-align: center;
    justify-content: center;
  }

  justify-content: center;
  padding: 16px;
`

const StyledSection = styled.div`
  max-width: 688px;
`

const StyledSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media(min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 auto;
    width: 80vw;
    padding-top: 128px;

    h2 {
      margin-bottom: 0;
    }
  }

  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    display: block;
    padding: 16px;
    padding-bottom: 0;
  }
`

const MobileIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`