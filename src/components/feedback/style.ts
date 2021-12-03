import { css, SerializedStyles, Theme } from '@emotion/react';

export const feedbackListWrapper = css`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 0 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    flex-shrink: 0;
    scroll-snap-align: center;
  }
`;

export const feedbackTotalCount = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorSubLight};
  font-size: 10px;
  text-decoration: underline;
  text-align: right;
`;

export const feedbackItemWrapper = css`
  width: 180px;
  height: 200px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
  padding: 1em;
`;

export const feedbackTitle = (theme: Theme): SerializedStyles => css`
  font-size: 12px;
  color: ${theme.colorPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const feedbackContents = css`
  flex-grow: 1;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1.3em;
`;

export const feedbackUserName = (theme: Theme): SerializedStyles => css`
  text-align: right;
  direction: rtl;
  font-family: ${theme.fontCoding};
  font-size: 10px;
  color: ${theme.colorGray3};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;
