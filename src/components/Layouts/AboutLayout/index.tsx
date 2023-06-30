import { FunctionComponent, useRef } from "react";
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
  const bringShiraRef = useRef(null)

  return (
    <SceneWrapper bg='white'>
      <Navbar color="#DBE3A3"/>
      <AboutWrapper>
        <Heading>{t('about.title')}</Heading>
        <p>{t('about.subtitle')}</p>
        <HeaderButtonWrapper>
          <Button
            text={t('about.bring_shira_button')}
            type="outline"
            onClick={() => {bringShiraRef.current.scrollIntoView() }}
          />
        </HeaderButtonWrapper>
      </AboutWrapper>

      <SectionWrapper>
        <Heading>{t('about.background.title')}</Heading>
        <OptionsWrapper>
          <OptionTitle>{t('about.background.subtitle')}</OptionTitle>
          <p>
            <OptionDescription>{t('about.background.section1')}</OptionDescription>
          </p>
          <p>
            <OptionDescription>{t('about.background.section2')}</OptionDescription>
          </p>
          <p>
            <OptionDescription>{t('about.background.section3')}</OptionDescription>
          </p>
          <p>
            <OptionDescription>{t('about.background.section4')}</OptionDescription>
          </p>
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

      </SectionWrapper>


      <SectionWrapper>
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

      </SectionWrapper>

      <CreatedByWrapper>
        <Heading>{t('about.created_by.title')}</Heading>
        <FlexWrapper>
          <div>
            <p>{t('about.created_by.description.section1')}</p>
            <p>
              {t('about.created_by.description.section2')} <a href="https://wearehorizontal.org/donate.html" target="_blank">{t('about.created_by.description.donation_link')}</a>
            </p>
            <p>
              <p>{t('about.created_by.description.section3')}</p>
            </p>
          </div>
          <HorizontalLogo />
        </FlexWrapper>
        <Button
          text={t('about.created_by.website_cta')}
          type="primary"
          onClick={() => {window.open('https://wearehorizontal.org')}}
        />
      </CreatedByWrapper>

      <SectionWrapper>
        <Heading>{t('about.advisors.title')}</Heading>
        <p>{t('about.advisors.subtitle')}</p>
        <AdvisorsWrapper>
          <p>
            <Advisor>
              <p><strong>{t('about.advisors.person1.name')}</strong></p>
              <div>{t('about.advisors.person1.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person2.name')}</strong></p>
              <div>{t('about.advisors.person2.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person3.name')}</strong></p>
              <div>{t('about.advisors.person3.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person4.name')}</strong></p>
              <div>{t('about.advisors.person4.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person5.name')}</strong></p>
              <div>{t('about.advisors.person5.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person6.name')}</strong></p>
              <div>{t('about.advisors.person6.job')}</div>
            </Advisor>
          </p>

          <p>
            <Advisor>
              <p><strong>{t('about.advisors.person7.name')}</strong></p>
              <div>{t('about.advisors.person7.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person8.name')}</strong></p>
              <div>{t('about.advisors.person8.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person9.name')}</strong></p>
              <div>{t('about.advisors.person9.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person10.name')}</strong></p>
              <div>{t('about.advisors.person10.job')}</div>
            </Advisor>
            <Advisor>
              <p><strong>{t('about.advisors.person11.name')}</strong></p>
              <div>{t('about.advisors.person11.job')}</div>
            </Advisor>
          </p>
        </AdvisorsWrapper>
       
      </SectionWrapper>

      <LastSection>
        <Heading ref={bringShiraRef}>{t('about.bring.title')}</Heading>
        <LastSectionWrapper>
          <p>
            <OptionDescription>{t('about.bring.section1')}</OptionDescription>
          </p>
          <p>
            <OptionDescription>{t('about.bring.section2')}</OptionDescription>
          </p>      
        </LastSectionWrapper>
      </LastSection>

      <ContactWrapper>
        <Heading>{t('about.footer_title')}</Heading>
        <p>{t('about.footer_description')}</p>
      </ContactWrapper>


    </SceneWrapper>
  )
}

const HeaderButtonWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`

const AboutWrapper = styled.div`
  text-align: center;
  padding: 24px;
  padding-bottom: 60px;
  background: ${props => props.theme.colors.green2}};
  p {
    margin: 0 auto;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }

  > h2 {
    margin-bottom: 12px;
  }
`

const SectionWrapper = styled.div`
  text-align: center;
  margin: 20px 200px;
  padding: 24px;

  border-bottom: 1px solid #ACADAE;

  > h2 {
    margin-bottom: 10px;
  }

  @media(max-width: 1200px) {
    margin: 20px 50px;
  }

  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 20px 0;
  }
`

const LastSection = styled(SectionWrapper)`
  border: none;
`

const CreatedByWrapper = styled.div`
  margin: 20px 200px;
  padding-bottom: 50px;
  padding-right: 24px;
  padding-left: 24px;
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

const AdvisorsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media(max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const Advisor = styled.div`
  padding: 14px 0;

  > div {
    max-width: 300px;
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

const LastSectionWrapper = styled.div`
  padding: 14px 0;
  text-align: left;
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
  padding: 80px 24px;

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