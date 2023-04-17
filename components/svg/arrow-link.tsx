import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowLink: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <path
      d="M2 13L13.25 1.75"
      stroke="#F2F0F4"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M4.25 1H14V10.75"
      stroke="#F2F0F4"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default ArrowLink;
