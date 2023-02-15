import { FC } from 'react';

import { SVGProps } from './svg.types';

const Arrow: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 8 8"
    {...props}
  >
    <path
      d="M7.41113 0.352L4.00313 7.168L0.595125 0.352H7.41113Z"
      fill="currentColor"
    />
  </svg>
);

export default Arrow;
