import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export const ArrowDown: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 14 16"
    fill="none"
    {...props}
  >
    <path
      d="M7 1.125L7 14.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M12.625 9.25L7 14.875L1.375 9.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);
