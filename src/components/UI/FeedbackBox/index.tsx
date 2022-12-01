import { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { Pill } from '../Pill'

import SadIcon from '../Icons/Sad'
import UnsureIcon from '../Icons/Unsure'
import SmileIcon from '../Icons/Smile'
import HappyIcon from '../Icons/Happy'
import { TextInput } from '../TextInput'

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
  
  return (
    <Wrapper>
      <Item>
        <p>1. How easy is Shira to use?</p>
        <PillWrapper>
          <Pill 
            onClick={() => { onEasyness('very-complicated')}}
            label='Very complicated'
            icon={<SadIcon />}
            selected={easyness === 'very-complicated'}
          />
          <Pill 
            onClick={() => { onEasyness('complicated')}}
            label='Complicated'
            icon={<UnsureIcon />}
            selected={easyness === 'complicated'}
          />
          <Pill 
            onClick={() => { onEasyness('easy')}}
            label='Easy'
            icon={<SmileIcon />}
            selected={easyness === 'easy'}
          />
          <Pill 
            onClick={() => { onEasyness('very-easy')}}
            label='Very easy'
            icon={<HappyIcon />}
            selected={easyness === 'very-easy'}
          />
        </PillWrapper>
      </Item>
      <Item>
        <p>2. How likely are you to recommend Shira to friends or colleagues?</p>
        <PillWrapper>
          <Pill 
            onClick={() => { onRecommend('not-likely')}}
            label='Not likely'
            icon={<SadIcon />}
            selected={recommend === 'not-likely'}
          />
          <Pill 
            onClick={() => { onRecommend('somewhat-likely')}}
            label='Somewhat likely'
            icon={<UnsureIcon />}
            selected={recommend === 'somewhat-likely'}
          />
          <Pill 
            onClick={() => { onRecommend('likely')}}
            label='Likely'
            icon={<SmileIcon />}
            selected={recommend === 'likely'}
          />
          <Pill 
            onClick={() => { onRecommend('very-likely')}}
            label='Very likely'
            icon={<HappyIcon />}
            selected={recommend === 'very-likely'}
          />
        </PillWrapper>
      </Item>
      <Item>
        <p>3. How can we improve Shira?</p>
        <TextInput 
          onChange={(e) => { onImprove(e.target.value)}}
          placeholder="Placeholder"
          value={improve}
        />
      </Item>
      <Item>
        <BottomText>
          <i>Your feedback will be sent when you click “see results”</i>
        </BottomText>
      </Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 600px;
  border: 2px solid rgba(157, 177, 73, 0.64);
  border-radius: 40px;
  padding: 16px 32px;
  flex-grow: 2;
  flex-shrink: 0;
`

const PillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Item = styled.div`
  padding: 10px 0;
`

const BottomText = styled.p`
  text-align: center;
`