import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeETH: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 19 30"
    fill="none"
    {...props}
  >
    <path
      d="M8.3396 1L0 14.8375L8.3396 19.7671V11.0469V1Z"
      fill="currentColor"
    />
    <path
      d="M8.33966 22.4798L8.23706 22.6049V29.0048L8.33966 29.3046L16.6844 17.5527L8.33966 22.4798Z"
      fill="currentColor"
    />
    <path
      d="M8.3396 29.3047V22.4798L0 17.5527L8.3396 29.3047Z"
      fill="currentColor"
    />
    <path
      d="M8.3396 19.7669L16.6791 14.8375L8.3396 11.0469V19.7669Z"
      fill="currentColor"
    />
    <path d="M0 14.8375L8.3395 19.767V11.0469L0 14.8375Z" fill="currentColor" />
    <path
      d="M19 4.5C19 2.01472 16.9853 0 14.5 0C12.0147 0 10 2.01472 10 4.5C10 6.98528 12.0147 9 14.5 9C16.9853 9 19 6.98528 19 4.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7665 6.68605L11.2873 5.89096C11.4117 6.17798 11.5735 6.44505 11.7665 6.68605ZM13.7317 9.94676C11.0578 9.57302 9 7.27682 9 4.5C9 3.84504 9.11448 3.21683 9.32453 2.63427L8.33957 1L8.15747 1.61914V19.5852L8.33957 19.767L16.6793 14.8375L13.7317 9.94676Z"
      fill="currentColor"
    />
  </svg>
);

export default WormholeETH;
