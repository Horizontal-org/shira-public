import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GlobalStyle } from '../../utils/storybook';
import { Select } from '../../components/UI/Select';

export default {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '800px' }}>
        <GlobalStyle />
        <Story />
      </div>
    ),
  ]
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({})
Default.args = {
  autoselect: true,
  options: [
    {
      value: 'op1',
      label: 'Option 1'
    },
    {
      value: 'op2',
      label: 'Option 2'
    },
    {
      value: 'op3',
      label: 'Option 3'
    },
  ]
}