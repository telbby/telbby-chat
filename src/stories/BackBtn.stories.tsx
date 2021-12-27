import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import theme from '@/styles/theme';
import BackBtn from '@/components/common/BackBtn';

export default {
  title: 'common/Back Button',
  component: BackBtn,
} as ComponentMeta<typeof BackBtn>;

const Template: ComponentStory<typeof BackBtn> = (args) => (
  <BackBtn {...args} />
);

export const PrimaryBackButton = Template.bind({});
PrimaryBackButton.args = {
  width: '50px',
  height: '50px',
  color: theme.colorPrimary,
};
export const LightBackButton = Template.bind({});
LightBackButton.args = {
  width: '50px',
  height: '50px',
  color: 'white',
};
LightBackButton.decorators = [
  (Story) => {
    return (
      <div style={{ backgroundColor: theme.colorPrimary }}>
        <Story />
      </div>
    );
  },
];
