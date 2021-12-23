import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import PresentationalMain from '@/components/Main/PresentationalMain';

import { mockProejctFirst, mockProejctSecond } from './fixture/project';
import { subTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

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

export const subMain = Template.bind({});
subMain.args = {
  project: mockProejctSecond,
  handleExit: () => {},
};
subMain.decorators = [
  (Story) => (
    <ThemeProvider theme={subTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
