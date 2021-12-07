import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import ExitBtn from '@/components/common/ExitBtn';

import { mainNavStyle } from './style';

type NavProps = {
  handleExit: () => void;
  image: string;
  name: string;
  primary: boolean;
};

const Nav: FC<NavProps> = ({ handleExit, image, name, primary }) => {
  const theme = useTheme();

  return (
    <nav css={mainNavStyle}>
      <img src={image} alt={`${name} logo`} />
      <ExitBtn
        width="14px"
        height="14px"
        color={primary ? 'white' : theme.colorPrimary}
        onClick={handleExit}
      />
    </nav>
  );
};

export default Nav;
