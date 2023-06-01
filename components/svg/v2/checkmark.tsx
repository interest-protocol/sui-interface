import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Checkmark: FC<SVGProps & { filled?: boolean }> = ({
  filled,
  maxWidth,
  maxHeight,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_Checkmark)">
        <rect width="40" height="40" rx="20" fill="#D9F99D" />
        <path
          d="M28.25 14.75L17.75 25.25L12.5 20"
          stroke="#1B1B1F"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="bevel"
        />
      </g>
      <defs>
        <clipPath id="clip0_Checkmark">
          <rect width="40" height="40" rx="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 14 11"
      fill="none"
      {...props}
    >
      <path
        d="M4.75 8.1275L1.6225 5L0.557495 6.05751L4.75 10.25L13.75 1.25L12.6925 0.192505L4.75 8.1275Z"
        fill="currentColor"
      />
    </svg>
  );

export default Checkmark;
