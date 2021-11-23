import { css, SerializedStyles, Theme } from '@emotion/react';

export const serviceClientWrapper = (theme: Theme): SerializedStyles => css`
  width: 425px;
  height: 620px;
  border-radius: 25px;
  background-color: ${theme.colorPrimary};
`;
