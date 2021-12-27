import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { subTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';

import ChatItem from '@/components/ChatItem';

// fixture
import { chatFromAdmin, chatFromUser } from './fixture/chat';

export default {
  title: 'Chat Item',
  component: ChatItem,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#4A7AFF', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ChatItem>;

const Template: ComponentStory<typeof ChatItem> = (args) => (
  <ChatItem {...args} />
);

export const chatAdminPrimary = Template.bind({});
chatAdminPrimary.args = chatFromAdmin;

export const chatAdminSub = Template.bind({});
chatAdminSub.args = chatFromAdmin;
chatAdminSub.decorators = [
  (Story) => (
    <ThemeProvider theme={subTheme}>
      <GlobalStyle />
      <div style={{ backgroundColor: '#f4f7ff', padding: '1rem' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export const chatUser = Template.bind({});
chatUser.args = chatFromUser;
