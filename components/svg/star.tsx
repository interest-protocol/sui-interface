import { FC } from 'react';

import { SVGProps } from './svg.types';

const Star: FC<SVGProps & { noFill?: boolean }> = ({
  maxHeight,
  maxWidth,
  noFill,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 18 17"
    fill="none"
    stroke="currentColor"
    strokeWidth="1px"
    {...props}
  >
    <path
      d="M8.99983 14.27L13.1498 16.78C13.9098 17.24 14.8398 16.56 14.6398 15.7L13.5398 10.98L17.2098 7.80001C17.8798 7.22001 17.5198 6.12001 16.6398 6.05001L11.8098 5.64001L9.91983 1.18001C9.57983 0.37001 8.41983 0.37001 8.07983 1.18001L6.18983 5.63001L1.35983 6.04001C0.479829 6.11001 0.119828 7.21001 0.789828 7.79001L4.45983 10.97L3.35983 15.69C3.15983 16.55 4.08983 17.23 4.84983 16.77L8.99983 14.27Z"
      fill={noFill ? 'none' : 'currentColor'}
    />
  </svg>
);

export default Star;
