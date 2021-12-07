import { css, Theme, SerializedStyles } from '@emotion/react';

export const chatMainDefaultStyle = css`
  width: 400px;
  height: 620px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const mainNavStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 1rem 1.5rem;

  > * {
    height: 100%;
  }
`;

export const mainInfoStyle = css`
  padding: 0 1.5rem;
`;

export const mainNameStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCodingBold};
  font-size: 36px;
  margin-bottom: 10px;
`;

export const mainDescriptionStyle = css`
  white-space: pre-line;
  font-weight: bold;
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 1.5em;
  max-height: 4.5em;
`;

export const mainBottomSectionStyle = css`
  padding: 1.5rem;
`;

export const mainBottomButtonWrapperStyle = css`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border-top-left-radius: 0;
`;

export const mainBottomButtonStyle = css`
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid;
`;
