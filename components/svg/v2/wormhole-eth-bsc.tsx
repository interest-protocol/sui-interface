import { FC } from 'react';

import { SVGProps } from '../svg.types';

const WormholeETHBSC: FC<SVGProps & { filled?: boolean }> = ({
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
        fill="#F8D12F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.588 36.3028L43.5014 33.3907L46.4159 36.3052L48.1102 34.6098L43.5014 30L38.8926 34.6086L40.588 36.3028ZM36 37.5002L37.6948 35.8055L39.3896 37.5002L37.6948 39.195L36 37.5002ZM43.5013 41.6104L40.5879 38.6971L38.8902 40.3901L38.8925 40.3925L43.5013 44.9999L48.1101 40.3901L48.1113 40.3889L46.4159 38.6959L43.5013 41.6104ZM47.6104 37.5007L49.3052 35.8059L51 37.5007L49.3052 39.1954L47.6104 37.5007ZM43.5014 35.7791L45.2205 37.4994H45.2217L45.2205 37.5006L43.5014 39.2208L41.7823 37.5029L41.7799 37.4994L41.7823 37.497L42.0832 37.1961L42.2301 37.0504L43.5014 35.7791Z"
        fill="#131316"
      />
      <g clipPath="url(#clip0_ETH_BSC)">
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
      <defs>
        <clipPath id="clip0_ETH_BSC">
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
        d="M21.361 7.00134C18.7848 7.00134 10.4721 7.00134 10.4721 7.00134V23.0262H6V26.9512H10.4723V42.9762H23.1601C23.1601 42.9762 41 44.3962 41 25.2888C41 6.49313 23.9375 7.00134 21.361 7.00134ZM22.8682 36.3262C21.5195 36.3262 17.618 36.3262 17.618 36.3262V26.9514H25.4931V23.0264H17.618V13.6514C17.618 13.6514 20.7534 13.6514 22.6249 13.6514C24.4966 13.6514 33.9148 14.367 33.9292 25.4188C33.9438 36.4706 24.2168 36.3262 22.8682 36.3262Z"
        fill="currentColor"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#F8D12F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.588 36.3028L43.5014 33.3907L46.4159 36.3052L48.1102 34.6098L43.5014 30L38.8926 34.6086L40.588 36.3028ZM36 37.5002L37.6948 35.8055L39.3896 37.5002L37.6948 39.195L36 37.5002ZM43.5013 41.6104L40.5879 38.6971L38.8902 40.3901L38.8925 40.3925L43.5013 44.9999L48.1101 40.3901L48.1113 40.3889L46.4159 38.6959L43.5013 41.6104ZM47.6104 37.5007L49.3052 35.8059L51 37.5007L49.3052 39.1954L47.6104 37.5007ZM43.5014 35.7791L45.2205 37.4994H45.2217L45.2205 37.5006L43.5014 39.2208L41.7823 37.5029L41.7799 37.4994L41.7823 37.497L42.0832 37.1961L42.2301 37.0504L43.5014 35.7791Z"
        fill="#131316"
      />
    </svg>
  );

export default WormholeETHBSC;
