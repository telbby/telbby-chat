import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import FeedbackListItem from './FeedbackListItem';
import { feedbackListWrapperStyle, feedbackTotalCountStyle } from './style';

import type { Feedback } from '@/types/project';

type FeedbackListProps = {
  feedbacks: Feedback[];
  totalFeedbackCount: number;
  primary: boolean;
};

const FeedbackList: FC<FeedbackListProps> = ({
  feedbacks,
  primary,
  totalFeedbackCount,
}) => {
  const theme = useTheme();
  return (
    <div>
      <ul
        css={feedbackListWrapperStyle}
        style={feedbacks.length <= 2 ? { justifyContent: 'center' } : {}}
      >
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
      <p
        css={[
          feedbackTotalCountStyle,
          { color: primary ? theme.colorSubLight : theme.colorSuccess },
        ]}
      >
        누적 피드백 총 {totalFeedbackCount}개
      </p>
    </div>
  );
};

export default FeedbackList;
