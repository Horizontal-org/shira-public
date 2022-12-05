import React from 'react';
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FBMessenger from '../../components/Apps/FBMessenger';

export default {
  title: 'Apps/FBMessenger',
  component: FBMessenger,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ]
} as ComponentMeta<typeof FBMessenger>;

const Template: ComponentStory<typeof FBMessenger> = (args) => <FBMessenger {...args} />;

export const FBMessengerDefault = Template.bind({})
FBMessengerDefault.args = {
  phone: '+5491131312222',
  content: new DOMParser().parseFromString(
    '<div id="dynamic-content"><div data-position="0" id="component-text-1"><h2>Text</h2><p>Body</p></div><div data-position="0" id="component-text-2"><h2>Text1231</h2><p>Body</p></div></div>',
    'text/html'
  )
}

const Wrapper = styled.div`
  height: 800px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 96vh;
  }
`