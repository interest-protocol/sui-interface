import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeWAVAX: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip1_WormholeWAVAX)">
      <path
        d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z"
        fill="#211D42"
      />
      <path
        d="M29 6C29 4.34315 27.6569 3 26 3C24.3431 3 23 4.34315 23 6C23 7.65685 24.3431 9 26 9C27.6569 9 29 7.65685 29 6Z"
        fill="white"
      />
      <path
        d="M29 6C29 4.34315 27.6569 3 26 3C24.3431 3 23 4.34315 23 6C23 7.65685 24.3431 9 26 9C27.6569 9 29 7.65685 29 6Z"
        stroke="#211D42"
        strokeWidth="2"
      />
      <path
        d="M21.4769 16.6586C22.0148 15.7572 22.8828 15.7572 23.4207 16.6586L26.7704 22.3633C27.3083 23.2647 26.8682 24 25.7924 24H19.0441C17.9805 24 17.5404 23.2647 18.0661 22.3633L21.4769 16.6586ZM14.9975 5.67603C15.5354 4.77466 16.3912 4.77466 16.9291 5.67603L17.6749 6.98065L19.4353 9.98127C19.8632 10.8352 19.8632 11.8433 19.4353 12.6973L13.5305 22.6242C12.9926 23.4307 12.1002 23.9407 11.1099 24H6.20759C5.13177 24 4.69167 23.2765 5.22958 22.3633L14.9975 5.67603Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip1_WormholeWAVAX">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default WormholeWAVAX;
