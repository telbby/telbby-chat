/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FeedbackItem from '@/components/feedback/FeedbackItem';

// fixture
import {
  feedbackFirst,
  feedbackSecond,
  feedbackThird,
  badFeedback,
} from './fixture/feedback';

export default {
  title: 'Feedback Item',
  component: FeedbackItem,
} as ComponentMeta<typeof FeedbackItem>;

const Template: ComponentStory<typeof FeedbackItem> = (args) => (
  <FeedbackItem {...args} />
);

export const FirstFeedbackItem = Template.bind({});
FirstFeedbackItem.args = feedbackFirst;

export const SecondFeedbackItem = Template.bind({});
SecondFeedbackItem.args = feedbackSecond;

export const ThirdFeedbackItem = Template.bind({});
ThirdFeedbackItem.args = feedbackThird;

export const badFeedbackItem = Template.bind({});
badFeedbackItem.args = badFeedback;
