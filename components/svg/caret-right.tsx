import { FC } from 'react';

import { SVGProps } from './svg.types';

const CaretRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 5 10"
    fill="none"
    {...props}
  >
    <path d="M0 10.0001L5 5.00006L0 6.10352e-05V10.0001Z" fill="currentColor" />
  </svg>
);

export default CaretRight;
