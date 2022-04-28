import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Background: FunctionComponent<Props> = ({ children }) => {
  return (
    <Wrapper>
      <HeadBrand />
      <ChildrenWrapper>
        { children }
      </ChildrenWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(180deg, #eae6df, #d1d7db);
  height: 100%;
`

const ChildrenWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  position: relative;
  z-index: 2;
`

const HeadBrand = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  background: #00a884;
  width: 100%;
  z-index: 1;
  height: 120px;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: none;
  }
`
export default Background
// 0 6px 18px rgba(var(--shadow-rgb 11, 20, 26),.05) 