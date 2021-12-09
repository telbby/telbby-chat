import React, { FC } from 'react';

import { mainInfoStyle, mainNameStyle, mainDescriptionStyle } from './style';

type ProjectIntroProps = {
  name: string;
  description: string;
};

const ProjectIntro: FC<ProjectIntroProps> = ({ name, description }) => {
  // @TODO: 버튼 클릭시 채팅 컴포넌트로 넘어가도록 해야합니다.

  return (
    <div css={mainInfoStyle}>
      <p css={mainNameStyle}>{name}</p>
      <p css={mainDescriptionStyle}>{description}</p>
    </div>
  );
};

export default ProjectIntro;
