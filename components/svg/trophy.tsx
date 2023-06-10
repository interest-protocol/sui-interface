import { FC } from 'react';

import { SVGProps } from './svg.types';

const Trophy: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <path
      d="M12.25 12.25V24.3031C12.25 32.9875 19.2062 40.1844 27.8906 40.25C29.9681 40.2644 32.028 39.8677 33.9515 39.0826C35.875 38.2976 37.6242 37.1397 39.0983 35.6758C40.5725 34.2118 41.7424 32.4707 42.5407 30.5526C43.3391 28.6346 43.7501 26.5776 43.75 24.5V12.25C43.75 11.7859 43.5656 11.3408 43.2374 11.0126C42.9092 10.6844 42.4641 10.5 42 10.5H14C13.5359 10.5 13.0908 10.6844 12.7626 11.0126C12.4344 11.3408 12.25 11.7859 12.25 12.25Z"
      stroke={props.stroke || '#D9F99D'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M21 49H35"
      stroke={props.stroke || '#D9F99D'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M28 40.25V49"
      stroke={props.stroke || '#D9F99D'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M43.3562 28H45.5C47.3565 28 49.137 27.2625 50.4497 25.9497C51.7625 24.637 52.5 22.8565 52.5 21V17.5C52.5 17.0359 52.3156 16.5908 51.9874 16.2626C51.6592 15.9344 51.2141 15.75 50.75 15.75H43.75"
      stroke={props.stroke || '#D9F99D'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M12.6875 28H10.4781C8.6216 28 6.84113 27.2625 5.52837 25.9497C4.21562 24.637 3.47812 22.8565 3.47812 21V17.5C3.47812 17.0359 3.66249 16.5908 3.99068 16.2626C4.31887 15.9344 4.76399 15.75 5.22812 15.75H12.2281"
      stroke={props.stroke || '#D9F99D'}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Trophy;
