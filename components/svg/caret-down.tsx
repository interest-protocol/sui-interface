import { FC } from 'react';

import { SVGProps } from './svg.types';

const CaretDown: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M26 12L16 22L6 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default CaretDown;
