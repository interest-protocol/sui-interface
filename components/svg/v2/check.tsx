import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Check: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
      fill="#003EA8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.1855 6.77478L7.62152 13.0368L3.8147 9.39888L4.85103 8.31443L7.6224 10.9628L13.15 5.68945L14.1855 6.77478Z"
      fill="#DBE1FF"
    />
  </svg>
);

export default Check;
