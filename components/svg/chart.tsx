import { FC } from 'react';

import { SVGProps } from './svg.types';

const Chart: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 16"
    fill="none"
    {...props}
  >
    <path
      d="M19 15.5H1V0.5"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M17.2906 2.20947L10.0001 9.50001L7.00007 6.50001L1.19067 12.3094"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 5.75V2H13.75"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Chart;
