import React, { FC } from 'react';

import type { Feedback } from '@/@types/project';

import {
  feedbackItemWrapper,
  feedbackTitle,
  feedbackContents,
  feedbackUserName,
} from './style';

type FeedbackItemProps = Omit<Feedback, 'id'>;

const FeedbackItem: FC<FeedbackItemProps> = ({ title, contents, userName }) => {
  return (
    <div css={feedbackItemWrapper}>
      <p css={feedbackTitle}>#{title}</p>
      <p css={feedbackContents}>&quot;{contents}&quot;</p>
      <p css={feedbackUserName}>{userName}</p>
    </div>
  );
};

export default FeedbackItem;
