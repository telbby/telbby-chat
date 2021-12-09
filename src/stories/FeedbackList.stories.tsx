/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FeedbackList from '@/components/feedback/FeedbackList';

// fixture
import {
  feedbackFirst,
  feedbackSecond,
  feedbackThird,
  badFeedback,
} from './fixture/feedback';

export default {
  title: 'Feedback List',
  component: FeedbackList,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '400px',
          backgroundColor: '#4A7AFF',
          padding: '1rem 0',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FeedbackList>;

const Template: ComponentStory<typeof FeedbackList> = (args) => (
  <FeedbackList {...args} />
);

const baseArgs = {
  feedbacks: [feedbackFirst, feedbackSecond, feedbackThird, badFeedback],
  totalFeedbackCount: 4,
};

const oneListArgs = {
  feedbacks: [feedbackFirst],
  totalFeedbackCount: 1,
};

const twoListArgs = {
  feedbacks: [feedbackFirst, feedbackSecond],
  totalFeedbackCount: 2,
};

export const BaseScrollableFeedbackList = Template.bind({});
BaseScrollableFeedbackList.args = baseArgs;

export const OneItemFeedbackList = Template.bind({});
OneItemFeedbackList.args = oneListArgs;

export const TwoItemsFeedbackList = Template.bind({});
TwoItemsFeedbackList.args = twoListArgs;
