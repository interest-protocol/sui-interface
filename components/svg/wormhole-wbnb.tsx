import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeWBNB: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_WormholeWBNB)">
      <path
        d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z"
        fill="#211D42"
      />
      <g clipPath="url(#clip1_WormholeWBNB)">
        <path
          d="M11.3395 14.085L16.0003 9.42436L20.6635 14.0874L23.3755 11.3754L16.0003 4L8.62762 11.373L11.3395 14.085ZM4.00049 15.9996L6.71257 13.2875L9.42448 15.9995L6.71242 18.7115L4.00049 15.9996ZM11.3395 17.915L16.0003 22.5756L20.6634 17.9127L23.3768 20.6232L23.3755 20.6247L16.0003 28L8.62738 20.6272L8.62354 20.6234L11.3395 17.915ZM22.5766 16.0011L25.2887 13.289L28.0006 16.0009L25.2885 18.713L22.5766 16.0011Z"
          fill="white"
        />
        <path
          d="M18.7506 15.999H18.7518L15.9999 13.2471L13.9661 15.2808H13.966L13.7323 15.5146L13.2504 15.9966L13.2466 16.0004L13.2504 16.0043L15.9999 18.7539L18.7518 16.0019L18.7531 16.0004L18.7506 15.999Z"
          fill="white"
        />
      </g>
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
      <clipPath id="clip0_WormholeWBNB">
        <rect width="32" height="32" fill="white" />
      </clipPath>
      <clipPath id="clip1_WormholeWBNB">
        <rect width="24" height="24" fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);

export default WormholeWBNB;
