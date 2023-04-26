import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowLeft: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 5 10"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M5 0L4.37114e-07 5L5 10L5 0Z"
      fill={props.fill || 'currentColor'}
    />
  </svg>
);

export default ArrowLeft;
