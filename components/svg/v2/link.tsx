import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Link: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 7L7 6H14V8H8V24H24V18H26V25L25 26H7L6 25V7ZM22.5858 8H18V6H25L26 7V14H24V9.41424L17.7071 15.7071L16.2929 14.2929L22.5858 8Z"
      fill="currentColor"
    />
  </svg>
);

export default Link;
