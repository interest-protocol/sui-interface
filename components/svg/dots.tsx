import { FC } from 'react';

import { SVGProps } from './svg.types';

const Dots: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <rect
      x="11.185"
      y="5.185"
      width="1.63"
      height="1.63"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.13"
    />
    <rect
      x="11.185"
      y="11.185"
      width="1.63"
      height="1.63"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.13"
    />
    <rect
      x="11.185"
      y="17.185"
      width="1.63"
      height="1.63"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.13"
    />
  </svg>
);

export default Dots;
