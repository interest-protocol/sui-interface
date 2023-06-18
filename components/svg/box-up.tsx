import { FC } from 'react';

import { SVGProps } from './svg.types';

const BoxUp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.62506 2.59769L9.55889 4.28979L10.382 3.34907L7.41166 0.75H6.58852L3.61816 3.34906L4.44129 4.28979L6.37506 2.59774V8.72036H7.62506V2.59769Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.75 12.4705V8.09546H2V11.8455H12V8.09546H13.25V12.4705L12.625 13.0955H1.375L0.75 12.4705Z"
      fill="currentColor"
    />
  </svg>
);

export default BoxUp;
