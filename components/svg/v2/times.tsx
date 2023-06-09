import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Times: FC<SVGProps & { filled?: boolean }> = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.9543 8.95431 0 20 0ZM27.8107 13.25L27.2803 13.7803L21.0607 20L27.2803 26.2197L27.8107 26.75L26.75 27.8107L26.2197 27.2803L20 21.0607L13.7803 27.2803L13.25 27.8107L12.1893 26.75L12.7197 26.2197L18.9393 20L12.7197 13.7803L12.1893 13.25L13.25 12.1893L13.7803 12.7197L20 18.9393L26.2197 12.7197L26.75 12.1893L27.8107 13.25Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M14.75 1.25L1.25 14.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M14.75 14.75L1.25 1.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );

export default Times;
