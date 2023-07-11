import { FC } from 'react';

import { SVGProps } from './svg.types';

const BoxDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.37513 6.84665V0.75H7.62513V6.84665L9.70703 4.97294L10.5432 5.90206L7.41824 8.71456H6.58203L3.45703 5.90206L4.29324 4.97294L6.37513 6.84665Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.75 12.625V8.25H2V12H12V8.25H13.25V12.625L12.625 13.25H1.375L0.75 12.625Z"
      fill="currentColor"
    />
  </svg>
);

export default BoxDown;
