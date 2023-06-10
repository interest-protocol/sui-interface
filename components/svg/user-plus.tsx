import { FC } from 'react';

import { SVGProps } from './svg.types';

const UserPlus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 36 36"
    fill="none"
    {...props}
  >
    <path
      d="M28.125 19.125H34.875"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M31.5 15.75V22.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M15.1875 22.5C19.8474 22.5 23.625 18.7224 23.625 14.0625C23.625 9.4026 19.8474 5.625 15.1875 5.625C10.5276 5.625 6.75 9.4026 6.75 14.0625C6.75 18.7224 10.5276 22.5 15.1875 22.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M3.12189 28.125C4.60022 26.3631 6.4465 24.9463 8.53097 23.9742C10.6154 23.0021 12.8875 22.4984 15.1875 22.4984C17.4875 22.4984 19.7596 23.0021 21.844 23.9742C23.9285 24.9463 25.7748 26.3631 27.2531 28.125"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default UserPlus;
