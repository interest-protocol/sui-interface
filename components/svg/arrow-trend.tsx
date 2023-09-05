import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowTrend: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    viewBox="0 0 10 10"
    stroke="currentColor"
    style={{ maxWidth, maxHeight }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.79288 8.70711L0.292879 1.20711L0.999986 0.5L8.5 8.00001V2.20711H9.5V9.20711L9 9.70711H2V8.70711H7.79288Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowTrend;
