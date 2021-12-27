import React, { FC } from 'react';

import { chatMainWrapperStyle } from './style';
import Nav from './Nav';
import ProjectIntro from './ProjectIntro';
import BottomButton from './BottomButton';
import FeedbackList from '@/components/feedback/FeedbackList';

import type { Project } from '@/types/project';

type PresentationalMainProps = {
  project: Project;
  handleExit: () => void;
};

const PresentationalMain: FC<PresentationalMainProps> = ({
  project,
  handleExit,
}) => {
  const {
    name,
    image,
    description,
    feedbackList: feedbacks,
    totalFeedbackCount,
  } = project;

  return (
    <div css={chatMainWrapperStyle}>
      <Nav name={name} image={image} handleExit={handleExit} />
      <ProjectIntro name={name} description={description} />
      <FeedbackList
        feedbacks={feedbacks}
        totalFeedbackCount={totalFeedbackCount}
      />
      <BottomButton />
    </div>
  );
};

export default PresentationalMain;
