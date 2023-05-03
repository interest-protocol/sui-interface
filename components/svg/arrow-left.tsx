import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowLeft: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 24"
    {...props}
    fill="none"
  >
    <path
      d="M20.25 12H4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M10.5 5.25L3.75 12L10.5 18.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default ArrowLeft;
