import styled from "styled-components";

export const SceneWrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    background: ${props => props.theme.colors.light.paleGreen};
  }
`