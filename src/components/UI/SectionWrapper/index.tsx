import styled from 'styled-components'

export const SectionWrapper = styled.div`
  padding: 32px 24px;
  background: #fff;
  @media (min-width:  ${props => props.theme.breakpoints.xs}) {
    width: 80vw;
    padding: 48px;
    border-radius: 24px;
  }

  @media (min-width:  ${props => props.theme.breakpoints.md}) {
    width: 50vw;
  }
  @media (min-width:  ${props => props.theme.breakpoints.lg}) {
    width: 40vw;
  }

  @media(max-width: ${props => props.theme.breakpoints.xs}) {
    max-height: calc(100vh - 116px); // height of all of the screen minus the footer and 30px of margin
    overflow-y: scroll;
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