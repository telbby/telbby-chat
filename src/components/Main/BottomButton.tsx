import React, { FC } from 'react';

import {
  mainBottomSectionStyle,
  mainBottomButtonWrapperStyle,
  mainBottomButtonStyle,
} from './style';

const BottomButton: FC = () => {
  // @TODO: 버튼 클릭시 채팅 컴포넌트로 넘어가도록 해야합니다.

  return (
    <div css={mainBottomSectionStyle}>
      <div css={mainBottomButtonWrapperStyle}>
        <p>
          나도 프로젝트 피드백 남기고 <br /> 베스트 리뷰어 되기
        </p>
        <button css={mainBottomButtonStyle} type="button">
          GO
        </button>
      </div>
    </div>
  );
};

export default BottomButton;
