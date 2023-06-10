import { FC } from 'react';

import { SVGProps } from './svg.types';

const Medium: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      d="M6.1875 16.1562C8.84537 16.1562 11 13.8477 11 11C11 8.15228 8.84537 5.84375 6.1875 5.84375C3.52963 5.84375 1.375 8.15228 1.375 11C1.375 13.8477 3.52963 16.1562 6.1875 16.1562Z"
      stroke={props.stroke || 'currentColor'}
      fill={props.fill || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8125 15.8125C16.9516 15.8125 17.875 13.6579 17.875 11C17.875 8.34213 16.9516 6.1875 15.8125 6.1875C14.6734 6.1875 13.75 8.34213 13.75 11C13.75 13.6579 14.6734 15.8125 15.8125 15.8125Z"
      stroke={props.stroke || 'currentColor'}
      fill={props.fill || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.625 6.1875V15.8125"
      stroke={props.stroke || 'currentColor'}
      fill={props.fill || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Medium;
