import { FC } from 'react';

import { SVGProps } from './svg.types';

const Swap: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 18 14" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0061 7.56464L16.5705 13.3085L17.5583 12.1797L11.6389 7.00021L17.5583 1.82076L16.5705 0.691895L10.0061 6.43577V7.56464ZM7.99384 6.43579L1.42941 0.691908L0.44165 1.82077L6.36102 7.00022L0.44165 12.1797L1.42941 13.3085L7.99384 7.56465V6.43579Z"
      fill="currentColor"
    />
  </svg>
);

export default Swap;
