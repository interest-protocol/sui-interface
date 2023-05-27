import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Checkmark: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 11"
    fill="none"
    {...props}
  >
    <path
      d="M4.75 8.1275L1.6225 5L0.557495 6.05751L4.75 10.25L13.75 1.25L12.6925 0.192505L4.75 8.1275Z"
      fill="currentColor"
    />
  </svg>
);

export default Checkmark;
