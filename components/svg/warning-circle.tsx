import { FC } from 'react';

import { SVGProps } from './svg.types';

const WarningCircle: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 3.4375C6.82335 3.4375 3.4375 6.82335 3.4375 11C3.4375 15.1767 6.82335 18.5625 11 18.5625C15.1767 18.5625 18.5625 15.1767 18.5625 11C18.5625 6.82335 15.1767 3.4375 11 3.4375ZM2.0625 11C2.0625 6.06395 6.06395 2.0625 11 2.0625C15.936 2.0625 19.9375 6.06395 19.9375 11C19.9375 15.936 15.936 19.9375 11 19.9375C6.06395 19.9375 2.0625 15.936 2.0625 11ZM11.6875 6.1875V12.375H10.3125V6.1875H11.6875ZM12 17V15H10V17H12Z"
      fill="currentColor"
    />
  </svg>
);

export default WarningCircle;
