import { FC } from 'react';

import { SVGProps } from './svg.types';

const Security: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <path
      d="M8.75 25.0906V12.25C8.75 11.7859 8.93437 11.3408 9.26256 11.0126C9.59075 10.6844 10.0359 10.5 10.5 10.5H45.5C45.9641 10.5 46.4092 10.6844 46.7374 11.0126C47.0656 11.3408 47.25 11.7859 47.25 12.25V25.0906C47.25 43.4656 31.6531 49.5469 28.5469 50.575C28.194 50.7057 27.806 50.7057 27.4531 50.575C24.3469 49.5469 8.75 43.4656 8.75 25.0906Z"
      stroke={props.stroke || '#E9D5FF'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M37.625 22.75L24.7844 35L18.375 28.875"
      stroke={props.stroke || '#E9D5FF'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Security;
