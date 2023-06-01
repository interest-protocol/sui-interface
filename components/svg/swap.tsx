import { FC } from 'react';

import { SVGProps } from './svg.types';

const Swap: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 14"
    fill="none"
    {...props}
  >
    <path
      d="M13.875 9.25H16.5L13.5 12.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M1.5 9.25H15.375"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M5.25 4.75H1.5L4.5 1.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M16.5 4.75H2.625"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default Swap;
