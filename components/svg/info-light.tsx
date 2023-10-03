import { FC } from 'react';

import { SVGProps } from './svg.types';

const InfoLight: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 18.75H20V27.5H21.25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M19.6875 15C20.723 15 21.5625 14.1605 21.5625 13.125C21.5625 12.0895 20.723 11.25 19.6875 11.25C18.652 11.25 17.8125 12.0895 17.8125 13.125C17.8125 14.1605 18.652 15 19.6875 15Z"
      fill="currentColor"
    />
  </svg>
);

export default InfoLight;
