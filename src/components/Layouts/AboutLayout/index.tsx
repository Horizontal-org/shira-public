import { FunctionComponent } from "react";
import styled from 'styled-components'
import { Navbar } from "../../UI/Navbar";
import { SceneWrapper } from "../../UI/SceneWrapper";
import { useTranslation } from "react-i18next";
import { Heading } from "../../UI/Title";
import { Button } from "../../UI/Button";
import HorizontalLogo from "../../UI/Icons/Horizontal";

interface Props {}

export const AboutLayout: FunctionComponent<Props> = () => {
  const { t } = useTranslation()
  return (
    <SceneWrapper bg='white'>
      <Navbar color="#DBE3A3"/>
      <AboutWrapper>
        <Heading>{t('about.title')}</Heading>
        <p>{t('about.subtitle')}</p>
      </AboutWrapper>

      <WhyShiraWrapper>
        <Heading>{t('about.why_shira.title')}</Heading>

        <OptionsWrapper>
          <div>
            <OptionTitle>{t('about.why_shira.option_1.title')}</OptionTitle>
            <OptionDescription>{t('about.why_shira.option_1.description')}</OptionDescription>
          </div>

          <div>
            <OptionTitle>{t('about.why_shira.option_2.title')}</OptionTitle>
            <OptionDescription>{t('about.why_shira.option_2.description')}</OptionDescription>
          </div>

          <div>
            <OptionTitle>{t('about.why_shira.option_3.title')}</OptionTitle>
            <OptionDescription>{t('about.why_shira.option_3.description')}</OptionDescription>
          </div>
        </OptionsWrapper>

        <ButtonsWrapper>
          <Button
            text={t('about.why_shira.privacy_policy_cta')}
            type="primary"
            onClick={() => {}}
          />

          <Button
            text={t('about.why_shira.security_audit_cta')}
            type="primary"
            onClick={() => {}}
          />
        </ButtonsWrapper>

      </WhyShiraWrapper>

      <CreatedByWrapper>
        <Heading>{t('about.created_by.title')}</Heading>
        <FlexWrapper>
          <p>{t('about.created_by.description')}</p>
          <HorizontalLogo />
        </FlexWrapper>
        <Button
          text={t('about.created_by.website_cta')}
          type="primary"
          onClick={() => {}}
        />
      </CreatedByWrapper>

      <ContactWrapper>
        <Heading>{t('about.footer_title')}</Heading>
        <p>{t('about.footer_description')}</p>
      </ContactWrapper>

    </SceneWrapper>
  )
}

const AboutWrapper = styled.div`
  text-align: center;
  padding: 24px;
  background: ${props => props.theme.colors.green2}};
  p {
    margin: 0 auto;
    max-width: 650px;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }
`

const WhyShiraWrapper = styled.div`
  text-align: center;
  margin: 20px 200px;
  padding: 24px;

  border-bottom: 1px solid #ACADAE;

  h2 {
    margin-bottom: 10px;
  }

  @media(max-width: 1200px) {
    margin: 20px 50px;
  }

  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 20px 0;
  }
`

const CreatedByWrapper = styled.div`
  margin: 20px 200px;
  padding-bottom: 50px;
  padding-right: 24px;
  padding-left: 24px;
  h2 {
    margin-bottom: 10px;
  }
  @media(max-width: 1200px) {
    margin: 20px 50px;
  }

  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 20px 0;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 300;
    font-size: 21px;
    line-height: 29px;
    max-width: 700px;
  }

  @media(max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const OptionsWrapper = styled.div`
  text-align: left;
`

const ButtonsWrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 10px;

  >button {
    margin-right: 16px;
  }
`

const OptionTitle = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  padding-bottom: 8px;
  padding-top: 40px;
`

const OptionDescription = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  line-height: 29px;
  padding-bottom: 16px;
`

const ContactWrapper = styled.div`
  text-align: center;
  padding: 24px;
  background: ${props => props.theme.colors.blue8};
  color: #fff;
  h2 {
    color: #fff;
    margin-bottom: 16px;
  }
  p {
    margin: 0 auto;
    max-width: 650px;
    font-weight: 600;
  }
`