import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FeedbackListItem from '@/components/feedback/FeedbackListItem';

// fixture
import {
  feedbackFirst,
  feedbackSecond,
  feedbackThird,
  badFeedback,
} from './fixture/feedback';

export default {
  title: 'Feedback Item',
  component: FeedbackListItem,
} as ComponentMeta<typeof FeedbackListItem>;

const Template: ComponentStory<typeof FeedbackListItem> = (args) => (
  <FeedbackListItem {...args} />
);

export const FirstFeedbackItem = Template.bind({});
FirstFeedbackItem.args = feedbackFirst;

export const SecondFeedbackItem = Template.bind({});
SecondFeedbackItem.args = feedbackSecond;

export const ThirdFeedbackItem = Template.bind({});
ThirdFeedbackItem.args = feedbackThird;

export const badFeedbackItem = Template.bind({});
badFeedbackItem.args = badFeedback;
