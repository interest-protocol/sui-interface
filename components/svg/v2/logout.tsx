import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Logout: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.75 9.33578L27.7071 15.2929V16.7071L21.75 22.6642L20.3358 21.25L25.5858 16L20.3358 10.75L21.75 9.33578Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5L5 4H13V6H6V26H13V28H5L4 27V5Z"
      fill="currentColor"
    />
    <path d="M13 16H27" stroke="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15H27V17H12V15Z"
      fill="currentColor"
    />
  </svg>
);

export default Logout;
