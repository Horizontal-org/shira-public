import { FunctionComponent, ReactNode } from "react";
import styled from 'styled-components'
import { VscClose } from 'react-icons/vsc'

interface Props {
  title?: string;
  action?: ReactNode;
  onClose: () => void
}

export const Footer: FunctionComponent<Props> = ({
  title,
  action,
  onClose
}) => {
  return (
    <Wrapper>
      <LeftContent>
        <CloseButton onClick={onClose}>
          <VscClose size={24} color='#111' />
        </CloseButton>
        <Title>
          { title }
        </Title>
      </LeftContent>

      <div>
        { action }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  box-sizing: border-box;
  border: 3px solid #767676;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  padding: 8px 20px;
`

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`

const CloseButton = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  background: ${props => props.theme.secondary.base};
`

const Title = styled.div`
  padding-left: 20px;
  color: black;
  font-size: 16px;
`

Footer.defaultProps = {
  title: 'Title',
  action: <></>
}