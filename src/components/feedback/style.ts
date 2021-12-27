import { css, SerializedStyles, Theme } from '@emotion/react';

export const feedbackListWrapperStyle = (
  lessThanTwoItems: boolean,
): SerializedStyles => css`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  margin: 0;
  padding: 0 0.8rem;
  justify-content: ${lessThanTwoItems ? 'center' : 'stretch'};
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    flex-shrink: 0;
    scroll-snap-align: center;
  }
`;

export const feedbackTotalCountStyle = (theme: Theme): SerializedStyles => css`
  font-size: 10px;
  text-decoration: underline;
  text-align: right;
  padding: 1em;
  color: ${theme.colorFeedbackCount};
`;

export const feedbackListItemWrapperStyle = css`
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

export const feedbackTitleStyle = (theme: Theme): SerializedStyles => css`
  font-size: 12px;
  color: ${theme.colorPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;

export const feedbackContentsStyle = css`
  flex-grow: 1;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 1.3em;
`;

export const feedbackUserNameStyle = (theme: Theme): SerializedStyles => css`
  text-align: right;
  direction: rtl;
  font-family: ${theme.fontCoding};
  font-size: 10px;
  color: ${theme.colorSubGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;
