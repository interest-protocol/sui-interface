import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Copy: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5L11 4H27L28 5V21L27 22H22V26V27L21 28H20H6H5L4 27V26V12V11L5 10H6H10V5ZM12 10H20H21L22 11V12V20H26V6H12V10ZM6 26V12H20V26H6Z"
      fill="currentColor"
    />
  </svg>
);

export default Copy;
