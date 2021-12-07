/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PresentationalMain from '@/components/Main/PresentationalMain';

import { mockProejctFirst } from './fixture/project';

export default {
  title: 'Main',
  component: PresentationalMain,
  decorators: [
    (Story) => {
      return (
        <div
          style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
        >
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof PresentationalMain>;

const Template: ComponentStory<typeof PresentationalMain> = (args) => (
  <PresentationalMain {...args} />
);

export const primaryMain = Template.bind({});
primaryMain.args = {
  project: mockProejctFirst,
  handleExit: () => {},
};
