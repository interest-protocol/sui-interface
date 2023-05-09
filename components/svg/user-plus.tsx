import { FC } from 'react';

import { SVGProps } from './svg.types';

const UserPlus: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <path
      d="M43.75 29.75H54.25"
      stroke={props.stroke || '#99BBFF'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M49 24.5V35"
      stroke={props.stroke || '#99BBFF'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M23.625 35C30.8737 35 36.75 29.1237 36.75 21.875C36.75 14.6263 30.8737 8.75 23.625 8.75C16.3763 8.75 10.5 14.6263 10.5 21.875C10.5 29.1237 16.3763 35 23.625 35Z"
      stroke={props.stroke || '#99BBFF'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M4.85626 43.75C7.15588 41.0092 10.0279 38.8053 13.2704 37.2932C16.5129 35.7811 20.0473 34.9976 23.625 34.9976C27.2028 34.9976 30.7371 35.7811 33.9796 37.2932C37.2221 38.8053 40.0941 41.0092 42.3938 43.75"
      stroke={props.stroke || '#99BBFF'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default UserPlus;
