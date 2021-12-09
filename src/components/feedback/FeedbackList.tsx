import React, { FC } from 'react';

import FeedbackListItem from './FeedbackListItem';
import { feedbackListWrapperStyle, feedbackTotalCountStyle } from './style';

import type { Feedback } from '@/types/project';

type FeedbackListProps = {
  feedbacks: Feedback[];
  totalFeedbackCount: number;
};

const FeedbackList: FC<FeedbackListProps> = ({
  feedbacks,
  totalFeedbackCount,
}) => {
  return (
    <div>
      <ul css={feedbackListWrapperStyle(feedbacks.length <= 2)}>
        {feedbacks.map(({ id, title, contents, userName }) => {
          return (
            <FeedbackListItem
              key={`feedback-${id}`}
              title={title}
              contents={contents}
              userName={userName}
            />
          );
        })}
      </ul>
      <p css={feedbackTotalCountStyle}>누적 피드백 총 {totalFeedbackCount}개</p>
    </div>
  );
};

export default FeedbackList;
