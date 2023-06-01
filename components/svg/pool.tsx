import { FC } from 'react';

import { SVGProps } from './svg.types';

const Pool: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 21 21"
    fill="none"
    {...props}
  >
    <path
      d="M10.6109 1.2498L10.6109 6.797L7.14396 10.9574L1.59674 10.9574"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M11.0141 19.2785L11.0141 13.7313L14.481 9.57096L20.0283 9.57096"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Pool;
