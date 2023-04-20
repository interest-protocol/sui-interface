import { FC } from 'react';

import { SVGProps } from './svg.types';

const Link: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M7.5 12H16.5"
      stroke="#F2F0F4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 16.5H6C4.80653 16.5 3.66193 16.0259 2.81802 15.182C1.97411 14.3381 1.5 13.1935 1.5 12C1.5 10.8065 1.97411 9.66193 2.81802 8.81802C3.66193 7.97411 4.80653 7.5 6 7.5H9.75"
      stroke="#F2F0F4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M14.25 16.5H18C19.1935 16.5 20.3381 16.0259 21.182 15.182C22.0259 14.3381 22.5 13.1935 22.5 12C22.5 10.8065 22.0259 9.66193 21.182 8.81802C20.3381 7.97411 19.1935 7.5 18 7.5H14.25"
      stroke="#F2F0F4"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default Link;
