import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowTrend: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ maxWidth, maxHeight }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0001 5.25H7.50009V6.75H16.1895L4.93945 18L6.00011 19.0607L17.2501 7.81068V16.5H18.7501V6L18.0001 5.25Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowTrend;
