import { FC } from 'react';

import { SVGProps } from './svg.types';

const Trades: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M11 0.5H15.5V5"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M10.25 5.75L15.1778 0.822205"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M5 15.5H0.5V11"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M5.75009 10.25L0.753174 15.247"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Trades;
