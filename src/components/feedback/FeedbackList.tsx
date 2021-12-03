import React, { FC } from 'react';

import FeedbackItem from './FeedbackItem';
import { feedbackListWrapper, feedbackTotalCount } from './style';

import type { Feedback } from '@/@types/project';

type FeedbackListProps = {
  feedbacks: Feedback[];
};

const FeedbackList: FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <>
      <div
        css={feedbackListWrapper}
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
      </div>
      <p css={feedbackTotalCount}>누적 피드백 총 {feedbacks.length}개</p>
    </>
  );
};

export default FeedbackList;
