import { css, SerializedStyles, Theme } from '@emotion/react';

export const chatItemWrapperStyle = (
  theme: Theme,
  fromAdmin?: boolean,
): SerializedStyles => css`
  position: relative;
  display: flex;
  justify-content: ${fromAdmin ? 'flex-start' : 'flex-end'};
  align-items: flex-start;
  padding-left: ${fromAdmin ? '40px' : '0'};

  > img {
    position: absolute;
    top: 8px;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    border: 1px solid ${theme.colorReverse};
  }
`;

export const chatAdminNameStyle = (theme: Theme): SerializedStyles => css`
  font-size: 12px;
  font-family: ${theme.fontCoding};
  color: ${theme.colorReverse};
`;

export const chatContentStyle = (
  theme: Theme,
  fromAdmin?: boolean,
): SerializedStyles => css`
  width: 230px;
  font-size: 12px;
  padding: 1em;
  border-radius: 10px;
  margin-top: 4px;
  white-space: pre-line;
  background-color: ${fromAdmin ? theme.colorReverse : theme.colorSubLight};
  color: ${fromAdmin ? theme.colorChatText : theme.colorBrown};
  box-shadow: 0px 0px 7px
    ${fromAdmin ? theme.colorReverse : theme.colorSubLight};
`;
