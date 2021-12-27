import React, { ButtonHTMLAttributes, FC } from 'react';

import { backPathDefaultStyle } from './style';
import { buttonDefaultStyle, buttonSVGDefaultStyle } from '@/styles/common';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
  height: string;
  color: string;
}

const Exit: FC<ButtonProps> = ({ width, height, color }) => {
  return (
    <button css={[buttonDefaultStyle, { width, height }]} type="button">
      <svg viewBox="0 0 100 100" css={buttonSVGDefaultStyle}>
        <path
          d="M75 10 L 25 50 L 75 90"
          css={[{ stroke: color }, backPathDefaultStyle]}
        />
      </svg>
    </button>
  );
};

export default Exit;
