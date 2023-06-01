import { FC } from 'react';

import { SVGProps } from '../svg.types';

const LeftArrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 16"
    fill="none"
    {...props}
  >
    <path
      d="M17.25 8H1.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M7.5 1.25L0.75 8L7.5 14.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default LeftArrow;
