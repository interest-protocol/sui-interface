import { FC } from 'react';

import { SVGProps } from '../svg.types';

export const DownArrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 19"
    fill="none"
    {...props}
  >
    <path
      d="M9 1.75L9 17.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M15.75 11.5L9 18.25L2.25 11.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default DownArrow;
