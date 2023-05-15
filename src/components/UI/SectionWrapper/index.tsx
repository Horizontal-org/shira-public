import styled from 'styled-components'

export const SectionWrapper = styled.div`
  padding: 32px 24px;
  @media (min-width:  ${props => props.theme.breakpoints.sm}) {
    max-width: 70vw;
    padding: 100px 0 0 80px;
  }
`
