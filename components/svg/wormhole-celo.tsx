import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeCELO: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 34 34"
    fill="none"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#211D42" />
    <g clipPath="url(#clip0_WormholeCELO)">
      <mask
        id="mask0_WormholeCELO"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="9"
        y="9"
        width="14"
        height="14"
      >
        <path d="M22.875 9.125H9.125V22.875H22.875V9.125Z" fill="white" />
      </mask>
      <g mask="url(#mask0_WormholeCELO)">
        <path
          d="M22.875 9.125H9.125V22.875H22.8746V18.0754H20.5929C19.8063 19.8263 18.0357 21.0459 16.0095 21.0459C13.2162 21.0459 10.9541 18.7644 10.9541 15.9903C10.9541 13.2162 13.2162 10.9545 16.0095 10.9545C18.0748 10.9545 19.8454 12.2136 20.6323 14.0036H22.875V9.125Z"
          fill="white"
        />
      </g>
    </g>
    <g clipPath="url(#clip1_WormholeCELO)">
      <rect x="19" y="19" width="15" height="15" rx="7.5" fill="white" />
      <g clipPath="url(#clip2_WormholeCELO)">
        <mask
          id="mask1_WormholeCELO"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="21"
          y="21"
          width="11"
          height="11"
        >
          <path
            d="M31.6562 21.3438H21.3438V31.6562H31.6562V21.3438Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_WormholeCELO)">
          <path
            d="M31.6562 21.3438H21.3438V31.6562H31.656V28.0566H29.9447C29.3547 29.3697 28.0268 30.2844 26.5072 30.2844C24.4121 30.2844 22.7156 28.5733 22.7156 26.4927C22.7156 24.4122 24.4121 22.7159 26.5072 22.7159C28.0561 22.7159 29.3841 23.6602 29.9742 25.0027H31.6562V21.3438Z"
            fill="#1B1B1F"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_WormholeCELO">
        <rect
          width="13.75"
          height="13.75"
          fill="white"
          transform="translate(9.125 9.125)"
        />
      </clipPath>
      <clipPath id="clip1_WormholeCELO">
        <rect x="19" y="19" width="15" height="15" rx="7.5" fill="white" />
      </clipPath>
      <clipPath id="clip2_WormholeCELO">
        <rect
          width="10.3125"
          height="10.3125"
          fill="white"
          transform="translate(21.3438 21.3438)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default WormholeCELO;
