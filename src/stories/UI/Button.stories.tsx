import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../components/UI/Button';
import { GlobalStyle } from '../../utils/storybook';
import { FiChevronRight } from 'react-icons/fi'

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ]
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({})

export const Disabled = Template.bind({})

export const Secondary = Template.bind({})

export const Outline = Template.bind({})

Primary.args = {
  text: 'Primary',
  disabled: false,
  onClick: () => {
    console.log('click')
  },
  rightIcon: <FiChevronRight size={18} />
}

Disabled.args = {
  text: 'Disabled',
  onClick: () => {
    console.log('click')
  },
  disabled: true,
  rightIcon: <FiChevronRight size={18} />
}


Secondary.args = {
  text: 'Secondary',
  type: 'secondary',
  onClick: () => {
    console.log('click')
  },
}

Outline.args = {
  text: 'Outline',
  type: 'outline',
  onClick: () => {
    console.log('click')
  },
}