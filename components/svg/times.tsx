import { FC } from 'react';

import { SVGProps } from './svg.types';

const Times: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M18.75 5.25L5.25 18.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 18.75L5.25 5.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default Times;
