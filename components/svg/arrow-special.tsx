import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowSpecial: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 12 8"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5.43934L10.5 0.93934L11.5607 2L6.53033 7.03033L5.46967 7.03033L0.439341 2L1.5 0.939339L6 5.43934Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowSpecial;
