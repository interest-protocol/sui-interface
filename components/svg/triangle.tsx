import { FC } from 'react';

import { SVGProps } from './svg.types';

const Triangle: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 117 108"
    width="117"
    height="108"
    {...props}
  >
    <path
      d="M82.5395 54.4262L15.7065 61.5481L49.4362 107.279L116.269 100.157L82.5395 54.4262Z"
      fill="#1B1B1F"
    />
    <path
      d="M82.5395 54.4262L15.7065 61.5481L49.4362 107.279L116.269 100.157L82.5395 54.4262Z"
      fill="#B6C4FF"
      fillOpacity="0.04"
    />
    <path
      d="M49.6446 49.1214L0.219757 77.4478L49.5923 105.744L99.0172 77.4177L49.6446 49.1214Z"
      fill="#99BBFF"
    />
    <path
      d="M49.6446 49.1214L0.219757 77.4478L49.5923 105.744L99.0172 77.4177L49.6446 49.1214Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M49.6446 49.1214L0.219757 77.4478L49.5923 105.744L99.0172 77.4177L49.6446 49.1214Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.7284 49.1471L0.463028 77.4783L51.1512 0.56665L49.7284 49.1471Z"
      fill="#6699FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.7284 49.1471L0.463028 77.4783L51.1512 0.56665L49.7284 49.1471Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.7284 49.1471L0.463028 77.4783L51.1512 0.56665L49.7284 49.1471Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.232 77.5078L49.7284 49.1471L51.2673 1.09583L99.232 77.5078Z"
      fill="#E6EEFF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.232 77.5078L49.7284 49.1471L51.2673 1.09583L99.232 77.5078Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.232 77.5078L49.7284 49.1471L51.2673 1.09583L99.232 77.5078Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default Triangle;
