import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Swap: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2498 11.816V4.5H12.7498V11.816L15.248 9.56753L16.2515 10.6825L12.5015 14.0575H11.498L7.74805 10.6825L8.75149 9.56753L11.2498 11.816Z"
      fill="#84CC16"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 18.75V13.5H6V18H18V13.5H19.5V18.75L18.75 19.5H5.25L4.5 18.75Z"
      fill="#84CC16"
    />
  </svg>
);

export default Swap;
