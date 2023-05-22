import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { Pill } from '../Pill'

import SadIcon from '../Icons/Sad'
import UnsureIcon from '../Icons/Unsure'
import SmileIcon from '../Icons/Smile'
import HappyIcon from '../Icons/Happy'
import { TextInput } from '../TextInput'
import { useTranslation } from 'react-i18next'

interface Props {
  easyness: string;
  recommend: string;
  improve: string;
  onEasyness: (e: string) => void
  onRecommend: (r: string) => void
  onImprove: (i: string) => void 
}

export const FeedbackBox: FunctionComponent<Props> = ({
  easyness,
  onEasyness,
  recommend,
  onRecommend,
  improve,
  onImprove
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Item>
        <p>{ t('feedback.box.question_1.title') }</p>
        <PillWrapper>
          <Pill 
            onClick={() => { onEasyness('very-complicated')}}
            label={ t('feedback.box.question_1.very_complicated') }
            icon={<SadIcon />}
            selected={easyness === 'very-complicated'}
          />
          <Pill 
            onClick={() => { onEasyness('complicated')}}
            label={ t('feedback.box.question_1.complicated') }
            icon={<UnsureIcon />}
            selected={easyness === 'complicated'}
          />
          <Pill 
            onClick={() => { onEasyness('easy')}}
            label={ t('feedback.box.question_1.easy') }
            icon={<SmileIcon />}
            selected={easyness === 'easy'}
          />
          <Pill 
            onClick={() => { onEasyness('very-easy')}}
            label={ t('feedback.box.question_1.very_easy') }
            icon={<HappyIcon />}
            selected={easyness === 'very-easy'}
          />
        </PillWrapper>
      </Item>
      <Item>
        <p>{ t('feedback.box.question_2.title') }</p>
        <PillWrapper>
          <Pill 
            onClick={() => { onRecommend('not-likely')}}
            label={ t('feedback.box.question_2.not_likely') }
            icon={<SadIcon />}
            selected={recommend === 'not-likely'}
          />
          <Pill 
            onClick={() => { onRecommend('somewhat-likely')}}
            label={ t('feedback.box.question_2.somewhat_likely') }
            icon={<UnsureIcon />}
            selected={recommend === 'somewhat-likely'}
          />
          <Pill 
            onClick={() => { onRecommend('likely')}}
            label={ t('feedback.box.question_2.likely') }
            icon={<SmileIcon />}
            selected={recommend === 'likely'}
          />
          <Pill 
            onClick={() => { onRecommend('very-likely')}}
            label={ t('feedback.box.question_2.very_likely') }
            icon={<HappyIcon />}
            selected={recommend === 'very-likely'}
          />
        </PillWrapper>
      </Item>
      <Item>
        <p>{t('feedback.box.question_3.title')}</p>
        <TextInput 
          onChange={(e) => { onImprove(e.target.value)}}
          placeholder={t('feedback.box.question_3.input_placeholder')}
          value={improve}
        />
      </Item>
      <Item>
        <BottomText>
          <i>{t('feedback.box.bottom_text')}</i>
        </BottomText>
      </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 600px;
  padding: 16px 32px;
  flex-grow: 2;
  flex-shrink: 0;
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin-top: 32px;
    padding: 0;
    width: 100%;
    border-top: 1px solid ${props => props.theme.secondary.dark};
  }
`

const PillWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    display: block;
  }
`

const Item = styled.div`
  padding-top: 16px;

  p {
    color: ${ props => props.theme.colors.dark.black};
`

const BottomText = styled.p`
  text-align: center;
`