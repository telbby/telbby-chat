import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/GlobalStyle';

import { primaryTheme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={primaryTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
