import { FC } from 'react';

import { SVGProps } from './svg.types';

const InfoLight: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 7.5H8V11H8.5"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M7.875 6C8.28921 6 8.625 5.66421 8.625 5.25C8.625 4.83579 8.28921 4.5 7.875 4.5C7.46079 4.5 7.125 4.83579 7.125 5.25C7.125 5.66421 7.46079 6 7.875 6Z"
      fill="currentColor"
    />
  </svg>
);

export default InfoLight;
