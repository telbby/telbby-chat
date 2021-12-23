import React, { FC } from 'react';

import type { Feedback } from '@/types/project';

import {
  feedbackListItemWrapperStyle,
  feedbackTitleStyle,
  feedbackContentsStyle,
  feedbackUserNameStyle,
} from './style';

type FeedbackListItemProps = Omit<Feedback, 'id'>;

const FeedbackListItem: FC<FeedbackListItemProps> = ({
  title,
  contents,
  userName,
}) => {
  return (
    <li css={feedbackListItemWrapperStyle}>
      <p css={feedbackTitleStyle}>#{title}</p>
      <p css={feedbackContentsStyle}>&quot;{contents}&quot;</p>
      <p css={feedbackUserNameStyle}>{userName}</p>
    </li>
  );
};

export default FeedbackListItem;
