import { FC } from 'react';

import { SVGProps } from './svg.types';

const Minus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.375 9.375H15.625V10.625H4.375V9.375Z"
      fill="currentColor"
    />
  </svg>
);

export default Minus;
