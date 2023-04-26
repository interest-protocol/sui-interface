import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 5 10"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M0 10.0001L5 5.00006L0 6.10352e-05V10.0001Z"
      fill={props.fill || 'currentColor'}
    />
  </svg>
);

export default ArrowRight;
