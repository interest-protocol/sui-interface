import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeCELO: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_WormholeCELO)">
      <path
        d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z"
        fill="#211D42"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 6H6V26H25.9996V19.0186H22.6805C21.5364 21.5655 18.9611 23.3393 16.014 23.3393C11.951 23.3393 8.6607 20.0206 8.6607 15.986C8.6607 11.9514 11.951 8.6611 16.014 8.6611C19.0183 8.6611 21.5935 10.4924 22.7381 13.096H26V6Z"
        fill="white"
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
    </g>
    <defs>
      <clipPath id="clip0_WormholeCELO">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default WormholeCELO;
