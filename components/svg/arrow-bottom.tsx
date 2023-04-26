import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowBottom: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 10 5"
    style={{ maxWidth, maxHeight }}
    fill="none"
    {...props}
  >
    <path
      d="M0 6.0598e-05L5 5.00006L10 6.10352e-05L0 6.0598e-05Z"
      fill={props.fill || 'currentColor'}
    />
  </svg>
);

export default ArrowBottom;
