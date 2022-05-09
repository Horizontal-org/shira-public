import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Gmail from '../../components/Apps/Gmail';

export default {
  title: 'Apps/Gmail',
  component: Gmail,
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
} as ComponentMeta<typeof Gmail>;

const Template: ComponentStory<typeof Gmail> = (args) => <Gmail {...args} />;

export const GmailDefault = Template.bind({})
GmailDefault.args = {}