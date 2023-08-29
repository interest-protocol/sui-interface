import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Swap: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 15 12"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.12416 6.47036L13.5945 11.2569L14.4176 10.3162L9.48484 6L14.4176 1.68379L13.5945 0.743073L8.12416 5.52964L8.12416 6.47036ZM6.4473 5.52965L0.976939 0.743084L0.153809 1.68381L5.08661 6.00001L0.153809 10.3162L0.976939 11.2569L6.4473 6.47037V5.52965Z"
      fill="currentColor"
    />
  </svg>
);

export default Swap;
