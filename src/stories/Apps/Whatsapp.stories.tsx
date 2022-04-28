import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Whatsapp from '../../components/Apps/Whatsapp';

export default {
  title: 'Apps/Whatsapp',
  component: Whatsapp,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '800px' }}>
        <Story />
      </div>
    ),
  ]
} as ComponentMeta<typeof Whatsapp>;

const Template: ComponentStory<typeof Whatsapp> = (args) => <Whatsapp {...args} />;

export const WhatsappDefault = Template.bind({})
WhatsappDefault.args = {}