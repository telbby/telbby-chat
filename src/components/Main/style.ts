import { css, Theme, SerializedStyles } from '@emotion/react';

export const chatMainWrapperStyle = (theme: Theme): SerializedStyles => css`
  width: 350px;
  height: 620px;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${theme.colorDefault};
  padding: 1rem 0;

  > *:not(:nth-child(3)) {
    padding: 0 1.5rem;
  }
`;

export const mainNavStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const mainInfoStyle = css`
  /* padding: 0 1.5rem; */
`;

export const mainNameStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCodingBold};
  color: ${theme.colorReverse};
  font-size: 36px;
  margin-bottom: 10px;
`;

export const mainDescriptionStyle = (theme: Theme): SerializedStyles => css`
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
  color: ${theme.colorGray};
`;

export const mainBottomSectionStyle = css``;

export const mainBottomButtonWrapperStyle = (
  theme: Theme,
): SerializedStyles => css`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  border-radius: 20px;
  border-top-left-radius: 0;
  background-color: ${theme.colorBottomWrapper};
  color: ${theme.colorBottomText};
`;

export const mainBottomButtonStyle = (theme: Theme): SerializedStyles => css`
  font-size: 24px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${theme.colorBottomButton};
  color: ${theme.colorBottomButton};
`;
