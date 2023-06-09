import { FC } from 'react';

import { SVGProps } from '../svg.types';

const WormholeCELO: FC<SVGProps & { filled?: boolean }> = ({
  maxWidth,
  maxHeight,
  filled,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 5.79086 5.79086 4 8 4H40C42.2091 4 44 5.79086 44 8V25.0411C43.6703 25.0139 43.3368 25 43 25C36.3726 25 31 30.3726 31 37C31 39.6124 31.8348 42.0298 33.2521 44H8C5.79086 44 4 42.2091 4 40V8Z"
        fill="#BFDBFE"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#FCFF51"
      />
      <mask
        id="mask0_CELO"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="16"
        y="16"
        width="17"
        height="17"
      >
        <path d="M32.5 16H16V32.5H32.5V16Z" fill="white" />
      </mask>
      <g mask="url(#mask0_CELO)">
        <mask
          id="mask1_CELO"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="16"
          y="16"
          width="17"
          height="17"
        >
          <path d="M32.5 16H16V32.5H32.5V16Z" fill="white" />
        </mask>
        <g mask="url(#mask1_CELO)">
          <path
            d="M32.5 16H16V32.5H32.4995V26.7405H29.7615C28.8176 28.8416 26.6928 30.305 24.2615 30.305C20.9094 30.305 18.1949 27.5672 18.1949 24.2384C18.1949 20.9095 20.9094 18.1954 24.2615 18.1954C26.7398 18.1954 28.8645 19.7063 29.8088 21.8543H32.5V16Z"
            fill="#131316"
          />
        </g>
      </g>
      <g clipPath="url(#clip0_CELO)">
        <mask
          id="mask2_CELO"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="36"
          y="30"
          width="14"
          height="14"
        >
          <path d="M49.875 30.125H36.125V43.875H49.875V30.125Z" fill="white" />
        </mask>
        <g mask="url(#mask2_CELO)">
          <mask
            id="mask3_CELO"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="36"
            y="30"
            width="14"
            height="14"
          >
            <path
              d="M49.875 30.125H36.125V43.875H49.875V30.125Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask3_CELO)">
            <path
              d="M49.875 30.125H36.125V43.875H49.8746V39.0754H47.5929C46.8063 40.8263 45.0357 42.0459 43.0095 42.0459C40.2162 42.0459 37.9541 39.7644 37.9541 36.9903C37.9541 34.2162 40.2162 31.9545 43.0095 31.9545C45.0748 31.9545 46.8454 33.2136 47.6323 35.0036H49.875V30.125Z"
              fill="#131316"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_CELO">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(36 30)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_CELO"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="32"
        height="32"
      >
        <path d="M40 8.5H8.5V40H40V8.5Z" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_CELO)">
        <mask
          id="mask1_CELO"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="32"
          height="32"
        >
          <path d="M40 8.5H8.5V40H40V8.5Z" fill="currentColor" />
        </mask>
        <g mask="url(#mask1_CELO)">
          <path
            d="M40 8.5H8.5V40H39.999V29.0046H34.772C32.97 33.0158 28.9135 35.8095 24.272 35.8095C17.8725 35.8095 12.6903 30.5828 12.6903 24.2279C12.6903 17.8727 17.8725 12.6912 24.272 12.6912C29.0033 12.6912 33.0595 15.5757 34.8623 19.6764H40V8.5Z"
            fill="white"
          />
        </g>
      </g>
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#FCFF51"
      />
      <g clipPath="url(#clip0_CELO)">
        <mask
          id="mask2_CELO"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="36"
          y="30"
          width="14"
          height="14"
        >
          <path d="M49.875 30.125H36.125V43.875H49.875V30.125Z" fill="white" />
        </mask>
        <g mask="url(#mask2_CELO)">
          <mask
            id="mask3_CELO"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="36"
            y="30"
            width="14"
            height="14"
          >
            <path
              d="M49.875 30.125H36.125V43.875H49.875V30.125Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask3_CELO)">
            <path
              d="M49.875 30.125H36.125V43.875H49.8746V39.0754H47.5929C46.8063 40.8263 45.0357 42.0459 43.0095 42.0459C40.2162 42.0459 37.9541 39.7644 37.9541 36.9903C37.9541 34.2162 40.2162 31.9545 43.0095 31.9545C45.0748 31.9545 46.8454 33.2136 47.6323 35.0036H49.875V30.125Z"
              fill="#131316"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_14_477">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(36 30)"
          />
        </clipPath>
      </defs>
    </svg>
  );

export default WormholeCELO;
