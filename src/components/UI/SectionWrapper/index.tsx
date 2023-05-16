import styled from 'styled-components'

export const SectionWrapper = styled.div`
  padding: 32px 24px;
  background: #fff;
  @media (min-width:  ${props => props.theme.breakpoints.xs}) {
    max-width: 80vw;
    padding: 48px;
    border-radius: 24px;
  }

  @media (min-width:  ${props => props.theme.breakpoints.md}) {
    max-width: 50vw;
  }
  @media (min-width:  ${props => props.theme.breakpoints.lg}) {
    max-width: 40vw;
  }
`

export const Wrapper = styled.div`
@media (min-width:  ${props => props.theme.breakpoints.xs}) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
`