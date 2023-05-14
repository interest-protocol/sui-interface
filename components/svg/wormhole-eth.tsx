import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeETH: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_306_486)">
      <path
        d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z"
        fill="#211D42"
      />
      <path
        d="M16.3396 2L16.1575 2.61914V20.5852L16.3396 20.767L24.6793 15.8375L16.3396 2Z"
        fill="white"
      />
      <path d="M16.3396 2L8 15.8375L16.3396 20.7671V12.0469V2Z" fill="white" />
      <path
        d="M16.3397 23.4798L16.2371 23.6049V30.0048L16.3397 30.3046L24.6844 18.5527L16.3397 23.4798Z"
        fill="white"
      />
      <path
        d="M16.3396 30.3047V23.4798L8 18.5527L16.3396 30.3047Z"
        fill="white"
      />
      <path
        d="M16.3396 20.7669L24.6791 15.8375L16.3396 12.0469V20.7669Z"
        fill="white"
      />
      <path d="M8 15.8375L16.3395 20.767V12.0469L8 15.8375Z" fill="white" />
      <path
        d="M29 6C29 4.34315 27.6569 3 26 3C24.3431 3 23 4.34315 23 6C23 7.65685 24.3431 9 26 9C27.6569 9 29 7.65685 29 6Z"
        fill="white"
      />
      <path
        d="M29 6C29 4.34315 27.6569 3 26 3C24.3431 3 23 4.34315 23 6C23 7.65685 24.3431 9 26 9C27.6569 9 29 7.65685 29 6Z"
        stroke="#211D42"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_306_486">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default WormholeETH;
