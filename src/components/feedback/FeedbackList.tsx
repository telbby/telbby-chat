import React, { FC } from 'react';

import FeedbackItem from './FeedbackItem';
import { feedbackListWrapperStyle, feedbackTotalCountStyle } from './style';

import type { Feedback } from '@/@types/project';

type FeedbackListProps = {
  feedbacks: Feedback[];
  totalFeedBackCount: number;
};

const FeedbackList: FC<FeedbackListProps> = ({
  feedbacks,
  totalFeedBackCount,
}) => {
  return (
    <div>
      <ul
        css={feedbackListWrapperStyle}
        style={feedbacks.length <= 2 ? { justifyContent: 'center' } : {}}
      >
        {feedbacks.map(({ id, title, contents, userName }) => {
          return (
            <FeedbackItem
              key={`feedback-${id}`}
              title={title}
              contents={contents}
              userName={userName}
            />
          );
        })}
      </ul>
      <p css={feedbackTotalCountStyle}>누적 피드백 총 {totalFeedBackCount}개</p>
    </div>
  );
};

export default FeedbackList;
