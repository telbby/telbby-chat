import React, { ButtonHTMLAttributes, FC } from 'react';

import { buttonDefaultStyle, buttonSVGDefaultStyle } from '@/styles/common';
import { exitLineDefaultStyle } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: string;
  height: string;
  color: string;
}

const Exit: FC<ButtonProps> = ({ width, height, color }) => {
  return (
    <button css={[buttonDefaultStyle, { width, height }]} type="button">
      <svg viewBox="0 0 100 100" css={buttonSVGDefaultStyle}>
        <line
          css={[exitLineDefaultStyle, { stroke: color }]}
          x1="10"
          y1="10"
          x2="90"
          y2="90"
        />
        <line
          css={[exitLineDefaultStyle, { stroke: color }]}
          x1="90"
          y1="10"
          x2="10"
          y2="90"
        />
      </svg>
    </button>
  );
};

export default Exit;
