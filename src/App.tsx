import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';

import { primaryTheme, subTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import TelbbyChat from './components/TelbbyChat';

const App: FC = () => {
  // @TODO: primary 정보를 가져와 어떤 theme을 전달할지 결정해야 합니다.
  const isPrimary = true;
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={isPrimary ? primaryTheme : subTheme}>
          <GlobalStyle />
          <TelbbyChat />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
