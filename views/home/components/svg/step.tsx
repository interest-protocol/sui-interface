import { FC } from 'react';

import { SVGProps } from '../../../../components/svg/svg.types';

const StepIconSVG: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 153 103"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1001_46161"
      // style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="151"
      height="101"
    >
      <path
        d="M151.069 55.0407L59.0886 1.74457L1.56171 35.0759L1.48462 35.0323V48.036L93.5241 101.366V101.386L151.069 68.0443V55.0407ZM93.53 88.378L93.5379 88.3741L93.53 88.3701V88.378Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1001_46161)">
      <path
        d="M59.0896 1.7445L1.55942 35.0791L93.5535 88.3828L151.084 55.0483L59.0896 1.7445Z"
        fill="#CCDDFF"
      />
      <path
        d="M59.0896 1.7445L1.55942 35.0791L93.5535 88.3828L151.084 55.0483L59.0896 1.7445Z"
        stroke="#1B1B1F"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.0896 1.7445L1.55942 35.0791L93.5535 88.3828L151.084 55.0483L59.0896 1.7445Z"
        stroke="#B6C4FF"
        strokeOpacity="0.04"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M93.5306 88.3736L1.48434 35.0321L1.48434 48.0074L93.5306 101.349V88.3736Z"
        fill="#6699FF"
      />
      <path
        d="M93.5306 88.3736L1.48434 35.0321L1.48434 48.0074L93.5306 101.349V88.3736Z"
        stroke="#1B1B1F"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M93.5306 88.3736L1.48434 35.0321L1.48434 48.0074L93.5306 101.349V88.3736Z"
        stroke="#B6C4FF"
        strokeOpacity="0.04"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M151.244 54.9373L93.5249 88.4067V101.386L151.244 67.9163V54.9373Z"
        fill="#99BBFF"
      />
      <path
        d="M151.244 54.9373L93.5249 88.4067V101.386L151.244 67.9163V54.9373Z"
        stroke="#1B1B1F"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M151.244 54.9373L93.5249 88.4067V101.386L151.244 67.9163V54.9373Z"
        stroke="#B6C4FF"
        strokeOpacity="0.04"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M151.069 55.0407L59.0886 1.74457L1.56171 35.0759L1.48462 35.0323V48.036L93.5241 101.366V101.386L151.069 68.0443V55.0407Z"
      stroke="#1B1B1F"
      strokeWidth="2"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M151.069 55.0407L59.0886 1.74457L1.56171 35.0759L1.48462 35.0323V48.036L93.5241 101.366V101.386L151.069 68.0443V55.0407Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeWidth="2"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StepIconSVG;
