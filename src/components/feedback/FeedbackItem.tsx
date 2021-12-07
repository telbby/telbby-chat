import React, { FC } from 'react';

import type { Feedback } from '@/@types/project';

import {
  feedbackItemWrapperStyle,
  feedbackTitleStyle,
  feedbackContentsStyle,
  feedbackUserNameStyle,
} from './style';

type FeedbackItemProps = Omit<Feedback, 'id'>;

const FeedbackItem: FC<FeedbackItemProps> = ({ title, contents, userName }) => {
  return (
    <li css={feedbackItemWrapperStyle}>
      <p css={feedbackTitleStyle}>#{title}</p>
      <p css={feedbackContentsStyle}>&quot;{contents}&quot;</p>
      <p css={feedbackUserNameStyle}>{userName}</p>
    </li>
  );
};

export default FeedbackItem;
