/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import theme from '@/styles/theme';
import ExitBtn from '@/components/common/ExitBtn';

export default {
  title: 'common/Exit Button',
  component: ExitBtn,
} as ComponentMeta<typeof ExitBtn>;

const Template: ComponentStory<typeof ExitBtn> = (args) => (
  <ExitBtn {...args} />
);

export const PrimaryExitButton = Template.bind({});
PrimaryExitButton.args = {
  width: '50px',
  height: '50px',
  color: theme.colorPrimary,
};
export const LightExitButton = Template.bind({});
LightExitButton.args = {
  width: '50px',
  height: '50px',
  color: 'white',
};
LightExitButton.decorators = [
  (Story) => {
    return (
      <div style={{ backgroundColor: theme.colorPrimary }}>
        <Story />
      </div>
    );
  },
];
