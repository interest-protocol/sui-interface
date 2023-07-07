import { FC } from 'react';

import { SVGProps } from './svg.types';

const CaretUp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxHeight, maxWidth }} viewBox="0 0 8 6" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.60465 0.75L0.25 4.64251L0.645349 5.75H7.35465L7.75 4.64251L4.39535 0.75H3.60465Z"
      fill="#C7C6CA"
    />
  </svg>
);

export default CaretUp;
