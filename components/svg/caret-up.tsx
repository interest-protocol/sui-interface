import { FC } from 'react';

import { SVGProps } from './svg.types';

const CaretUp: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      d="M6 20L16 10L26 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CaretUp;
