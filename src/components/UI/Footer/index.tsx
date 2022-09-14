import { FunctionComponent, ReactNode } from "react";
import styled from 'styled-components'
import { VscClose } from 'react-icons/vsc'
import { useStore } from "../../../store";

interface Props {
  title?: string;
  action?: ReactNode;
}

export const Footer: FunctionComponent<Props> = ({
  title,
  action,
}) => {
  const changeScene = useStore((state) => state.changeScene)

  return (
    <Wrapper>
      <LeftContent>
        <CloseButton onClick={() => { changeScene('welcome') }}>
          <VscClose size={24} color='#111' />
        </CloseButton>
        <Title>
          { title }
        </Title>
      </LeftContent>

      { action }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #fff;
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
  title: '',
  action: <></>
}