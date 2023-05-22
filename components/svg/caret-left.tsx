import { FC } from 'react';

import { SVGProps } from './svg.types';

const CaretLeft: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 5 10"
    fill="none"
    {...props}
  >
    <path d="M5 0L0 5L5 10V0Z" fill="currentColor" />
  </svg>
);

export default CaretLeft;
