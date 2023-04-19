import { FC } from 'react';
import { v4 } from 'uuid';

import { SVGProps } from './svg.types';

const Sphere: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const id = v4();
  return (
    <svg
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
      viewBox="0 0 90 89"
      width="90"
      height="89"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.7229 13.0099C83.9557 18.8559 93.8159 38.6935 87.7305 57.2828C81.6451 75.8724 45.3266 96.0354 34.4843 85.944C20.5103 72.9334 15.578 54.6894 21.6635 36.0999C27.7488 17.5106 47.4946 7.16543 65.7229 13.0099Z"
        fill="#1B1B1F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.7229 13.0099C83.9557 18.8559 93.8159 38.6935 87.7305 57.2828C81.6451 75.8724 45.3266 96.0354 34.4843 85.944C20.5103 72.9334 15.578 54.6894 21.6635 36.0999C27.7488 17.5106 47.4946 7.16543 65.7229 13.0099Z"
        fill="#B6C4FF"
        fillOpacity="0.04"
      />
      <path
        d="M42.6292 82.6555C65.3442 82.6555 83.7584 64.3763 83.7584 41.8278C83.7584 19.2792 65.3442 1 42.6292 1C19.9142 1 1.5 19.2792 1.5 41.8278C1.5 64.3763 19.9142 82.6555 42.6292 82.6555Z"
        fill={`url(#${id})`}
      />
      <path
        d="M42.6292 82.6555C65.3442 82.6555 83.7584 64.3763 83.7584 41.8278C83.7584 19.2792 65.3442 1 42.6292 1C19.9142 1 1.5 19.2792 1.5 41.8278C1.5 64.3763 19.9142 82.6555 42.6292 82.6555Z"
        stroke="#1B1B1F"
        strokeWidth="2"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M42.6292 82.6555C65.3442 82.6555 83.7584 64.3763 83.7584 41.8278C83.7584 19.2792 65.3442 1 42.6292 1C19.9142 1 1.5 19.2792 1.5 41.8278C1.5 64.3763 19.9142 82.6555 42.6292 82.6555Z"
        stroke="#B6C4FF"
        strokeOpacity="0.04"
        strokeWidth="2"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.3295 11.3015C15.3295 11.3015 71.3696 12.0408 68.5508 73.5191"
        stroke="#1B1B1F"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15.3295 11.3015C15.3295 11.3015 71.3696 12.0408 68.5508 73.5191"
        stroke="#B6C4FF"
        strokeOpacity="0.04"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <defs>
        <linearGradient
          id={id}
          x1="20.8116"
          y1="9.54189"
          x2="88.7714"
          y2="97.1909"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6EEFF" />
          <stop offset="1" stopColor="#99BBFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Sphere;
