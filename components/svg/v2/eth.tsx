import { FC } from 'react';

import { SVGProps } from '../svg.types';

const ETH: FC<SVGProps & { filled?: boolean }> = ({
  maxWidth,
  maxHeight,
  filled,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_ETH)">
        <rect width="40" height="40" rx="4" fill="white" />
        <path
          d="M20.2547 9.5L20.118 9.96436V23.4389L20.2547 23.5753L26.5094 19.8781L20.2547 9.5Z"
          fill="#1B1B1F"
        />
        <path
          d="M20.2547 9.5L14 19.8781L20.2547 23.5753V17.0352V9.5Z"
          fill="#1B1B1F"
        />
        <path
          d="M20.2548 25.6102L20.1779 25.7041V30.504L20.2548 30.7288L26.5133 21.9149L20.2548 25.6102Z"
          fill="#1B1B1F"
        />
        <path
          d="M20.2547 30.7289V25.6102L14 21.9149L20.2547 30.7289Z"
          fill="#1B1B1F"
        />
        <path
          d="M20.2546 23.5752L26.5093 19.8781L20.2546 17.0352V23.5752Z"
          fill="#1B1B1F"
        />
        <path
          d="M14 19.8781L20.2546 23.5753V17.0352L14 19.8781Z"
          fill="#1B1B1F"
        />
      </g>
      <defs>
        <clipPath id="clip0_ETH">
          <rect width="40" height="40" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 13 22"
      fill="none"
      {...props}
    >
      <path
        d="M6.25478 0.5L6.11816 0.964357V14.4389L6.25478 14.5753L12.5095 10.8781L6.25478 0.5Z"
        fill="currentColor"
      />
      <path
        d="M6.25479 0.5L5.34058e-05 10.8781L6.25479 14.5753V8.03519V0.5Z"
        fill="currentColor"
      />
      <path
        d="M6.25486 16.6102L6.17787 16.7041V21.504L6.25486 21.7288L12.5134 12.9149L6.25486 16.6102Z"
        fill="currentColor"
      />
      <path
        d="M6.25479 21.7289V16.6102L5.34058e-05 12.9149L6.25479 21.7289Z"
        fill="currentColor"
      />
    </svg>
  );

export default ETH;
