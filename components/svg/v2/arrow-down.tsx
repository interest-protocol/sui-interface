import { FC } from 'react';

import { SVGProps } from '../svg.types';

const ArrowDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 12 6"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.43278L10.2486 8.66129e-07L11.25 1.04482L6.5007 6L5.4993 6L0.75 1.04482L1.7514 1.23281e-07L6 4.43278Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowDown;
