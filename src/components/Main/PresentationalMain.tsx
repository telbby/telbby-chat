import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import {
  chatMainDefaultStyle,
  mainInfoStyle,
  mainNameStyle,
  mainDescriptionStyle,
  mainBottomSectionStyle,
  mainBottomButtonWrapperStyle,
  mainBottomButtonStyle,
} from './style';
import Nav from './Nav';
import FeedbackList from '@/components/feedback/FeedbackList';

import type { Project } from '@/@types/project';

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
    primary,
    description,
    feedbackList: feedbacks,
    totalFeedBackCount,
  } = project;
  const theme = useTheme();

  return (
    <div
      css={[
        chatMainDefaultStyle,
        {
          backgroundColor: primary ? theme.colorPrimary : theme.colorBg,
        },
      ]}
    >
      <Nav
        name={name}
        primary={primary}
        image={image}
        handleExit={handleExit}
      />
      <div css={mainInfoStyle}>
        <p
          css={[
            { color: primary ? theme.colorBg : theme.colorPrimary },
            mainNameStyle(theme),
          ]}
        >
          {name}
        </p>
        <p
          css={[
            mainDescriptionStyle,
            { color: primary ? '#e5e5e5' : theme.colorGray1 },
          ]}
        >
          {description}
        </p>
      </div>
      <FeedbackList
        primary={primary}
        feedbacks={feedbacks}
        totalFeedBackCount={totalFeedBackCount}
      />
      <div css={mainBottomSectionStyle}>
        <div
          css={[
            mainBottomButtonWrapperStyle,
            {
              backgroundColor: primary
                ? theme.colorSubLight
                : theme.colorPrimary,
            },
          ]}
        >
          <p
            css={{
              color: primary ? theme.colorBrown : 'white',
              fontWeight: 'bold',
            }}
          >
            나도 프로젝트 피드백 남기고 <br /> 베스트 리뷰어 되기
          </p>
          <button
            css={[
              mainBottomButtonStyle,
              {
                color: primary ? theme.colorPrimary : theme.colorSubLight,
                borderBottomColor: primary
                  ? theme.colorPrimary
                  : theme.colorSubLight,
              },
            ]}
            type="button"
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationalMain;
