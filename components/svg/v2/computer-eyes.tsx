import { FC } from 'react';

import { SVGProps } from '../svg.types';

const ComputerEyes: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 54 110"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_1_266)">
      <path
        d="M8.05813 5.20455L0.550781 0.871216V78.8721L8.05813 83.2055V5.20455Z"
        fill="#FECACA"
      />
      <path
        d="M53.1031 31.2045L45.5957 26.8712V104.872L53.1031 109.205V31.2045Z"
        fill="#FECACA"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_266">
        <rect width="54" height="110" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ComputerEyes;
