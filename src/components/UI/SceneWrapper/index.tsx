// import { styled } from '@horizontal-org/shira-ui';
import { styled } from '@horizontal-org/shira-ui'

export const SceneWrapper = styled.div<{ bg?: string }>`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  ${props => {
    console.log("props", props)
    console.log('Theme in SceneWrapper:', props.theme);
    return `
      @media (min-width: ${props.theme?.breakpoints?.xs}) {
        background: ${props.bg === 'white' ? '#fff' : props.theme?.colors?.light?.paleGreen};
      }
    `
  }}
`