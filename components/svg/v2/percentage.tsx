import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Percentage: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M15.75 2.25L2.25 15.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M4.125 6.75C5.57475 6.75 6.75 5.57475 6.75 4.125C6.75 2.67525 5.57475 1.5 4.125 1.5C2.67525 1.5 1.5 2.67525 1.5 4.125C1.5 5.57475 2.67525 6.75 4.125 6.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M13.875 16.5C15.3247 16.5 16.5 15.3247 16.5 13.875C16.5 12.4253 15.3247 11.25 13.875 11.25C12.4253 11.25 11.25 12.4253 11.25 13.875C11.25 15.3247 12.4253 16.5 13.875 16.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </svg>
);

export default Percentage;
