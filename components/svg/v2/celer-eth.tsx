import { FC } from 'react';

import { SVGProps } from '../svg.types';

const CelerETH: FC<SVGProps & { filled?: boolean }> = ({
  filled,
  maxWidth,
  maxHeight,
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
        fill="white"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#627EEA"
      />
      <g clipPath="url(#clip0_202_2)">
        <path
          d="M24.2538 14.5L24.1172 14.9644V28.4389L24.2538 28.5753L30.5085 24.8781L24.2538 14.5Z"
          fill="#1B1B1F"
        />
        <path
          d="M24.2547 14.5L18 24.8781L24.2547 28.5753V22.0352V14.5Z"
          fill="#131316"
        />
        <path
          d="M24.2547 30.6094L24.1777 30.7032V35.5031L24.2547 35.728L30.5132 26.9141L24.2547 30.6094Z"
          fill="#131316"
        />
        <path
          d="M24.2547 35.728V30.6094L18 26.9141L24.2547 35.728Z"
          fill="#131316"
        />
        <path
          d="M24.2539 28.5752L30.5085 24.8781L24.2539 22.0352V28.5752Z"
          fill="#131316"
        />
        <path
          d="M18 24.8781L24.2546 28.5753V22.0352L18 24.8781Z"
          fill="#131316"
        />
      </g>
      <path
        d="M43.4747 29L43.377 29.3323V38.9743L43.4747 39.0718L47.9504 36.4263L43.4747 29Z"
        fill="white"
      />
      <path
        d="M43.4757 29L39 36.4263L43.4757 39.0719V34.392V29Z"
        fill="white"
      />
      <path
        d="M43.475 40.5271L43.4199 40.5942V44.0289L43.475 44.1898L47.9534 37.8828L43.475 40.5271Z"
        fill="white"
      />
      <path
        d="M43.4757 44.1898V40.5271L39 37.8828L43.4757 44.1898Z"
        fill="white"
      />
      <path
        d="M43.4766 39.0724L47.9522 36.4269L43.4766 34.3926V39.0724Z"
        fill="white"
      />
      <path d="M39 36.4269L43.4757 39.0725V34.3926L39 36.4269Z" fill="white" />
      <defs>
        <clipPath id="clip0_202_2">
          <rect
            width="13"
            height="22"
            fill="white"
            transform="translate(18 14)"
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
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#627EEA"
      />
      <g clipPath="url(#clip0_202_99)">
        <path
          d="M24.0644 6.86365L23.8227 7.66579V30.9399L24.0644 31.1755L35.1304 24.7895L24.0644 6.86365Z"
          fill="currentColor"
        />
        <path
          d="M24.066 6.86365L13 24.7895L24.066 31.1755V19.879V6.86365Z"
          fill="currentColor"
        />
        <path
          d="M24.066 34.6889L23.9298 34.851V43.1417L24.066 43.5302L35.1387 28.3062L24.066 34.6889Z"
          fill="currentColor"
        />
        <path
          d="M24.066 43.5302V34.6889L13 28.3062L24.066 43.5302Z"
          fill="currentColor"
        />
        <path
          d="M24.0646 31.1753L35.1304 24.7894L24.0646 19.879V31.1753Z"
          fill="currentColor"
        />
        <path
          d="M13 24.7894L24.0658 31.1755V19.879L13 24.7894Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M43.4747 29L43.377 29.3323V38.9743L43.4747 39.0718L47.9504 36.4263L43.4747 29Z"
        fill="white"
      />
      <path
        d="M43.4757 29L39 36.4263L43.4757 39.0719V34.392V29Z"
        fill="white"
      />
      <path
        d="M43.475 40.5271L43.4199 40.5942V44.0289L43.475 44.1898L47.9534 37.8828L43.475 40.5271Z"
        fill="white"
      />
      <path
        d="M43.4757 44.1898V40.5271L39 37.8828L43.4757 44.1898Z"
        fill="white"
      />
      <path
        d="M43.4766 39.0724L47.9522 36.4269L43.4766 34.3926V39.0724Z"
        fill="white"
      />
      <path d="M39 36.4269L43.4757 39.0725V34.3926L39 36.4269Z" fill="white" />
      <defs>
        <clipPath id="clip0_202_99">
          <rect
            width="23"
            height="38"
            fill="white"
            transform="translate(13 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );

export default CelerETH;
