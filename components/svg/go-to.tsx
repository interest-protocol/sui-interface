import { FC } from 'react';

import { SVGProps } from './svg.types';

const Goto: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4.5C5.60217 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60217 4.5 6V18C4.5 18.3978 4.65804 18.7794 4.93934 19.0607C5.22065 19.342 5.60218 19.5 6 19.5H18C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18V15H18V18H6V6H9V4.5H6ZM12 4.5H18.75L19.5 5.25V12H18V7.0607L12 13.0607L10.9394 12L16.9394 6H12V4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default Goto;
