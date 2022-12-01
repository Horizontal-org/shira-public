import { FunctionComponent  } from "react"
import styled from 'styled-components'

import MoreIcon from '../assets/more.png'
import FileIcon from '../assets/file.png'
import StickerIcon from '../assets/sticker.png'
import GifIcon from '../assets/gif.png'
import LikeIcon from '../assets/like.png'
import EmojiIcon from '../assets/emoji.png'

const BottomBar: FunctionComponent = () => {
  return (
      <Wrapper>
        <FlexWrapper>
          <IconWrapper>
            <Icon icon={MoreIcon} size='28'/>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={FileIcon} size='28'/>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={StickerIcon} size='28'/>
          </IconWrapper>
          <IconWrapper>
            <Icon icon={GifIcon} size='28'/>
          </IconWrapper>
        </FlexWrapper>
        <KeywordBar>
          <Text>Aa</Text>

          <IconWrapper>
            <Icon icon={EmojiIcon} size='28'/>
          </IconWrapper>
        </KeywordBar>
        <IconWrapper>
          <Icon icon={LikeIcon} size='20'/>
        </IconWrapper>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 8px;
  display: flex;
  align-items: center;
  width: 98%;
  padding-right: 8px;
`

const FlexWrapper = styled.div`
  display: flex;
`
const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  &:hover {
    background: rgba(60,64,67,.1);
  }


  display: flex;
  align-items: center;
  justify-content: center;
`
interface IconProps {
  icon: string;
  size: string
}

const Icon = styled('div')<IconProps>`
  background-image: url(${props => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`


const KeywordBar = styled.div`
  flex-grow: 1;
  border-radius: 24px;
  background: rgba(60,64,67,.05);

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 8px;
`

const Text = styled.div`
  padding-left: 16px;
`
export default BottomBar