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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM28.9571 15.4571L29.6642 14.75L28.25 13.3358L27.5429 14.0429L17.75 23.8358L13.2071 19.2929L12.5 18.5858L11.0858 20L11.7929 20.7071L17.0429 25.9571H18.4571L28.9571 15.4571Z"
        fill="currentColor"
      />
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
