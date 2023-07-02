import { FC } from 'react';

import { SVGProps } from './svg.types';

const TrendUp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 19 13"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.1251 0.75H12.5001V2H16.6162L10.6251 7.99111L7.94204 5.30805H7.05815L0.991211 11.375L1.87509 12.2589L7.50009 6.63388L10.1832 9.31694H11.067L17.5001 2.88386V7H18.7501V1.375L18.1251 0.75Z"
      fill="currentColor"
    />
  </svg>
);

export default TrendUp;
