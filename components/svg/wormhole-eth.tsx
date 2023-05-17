import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeETH: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 34 34"
    fill="none"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#211D42" />
    <path
      d="M16.2122 7.25L16.0984 7.63696V18.8658L16.2122 18.9794L21.4245 15.8984L16.2122 7.25Z"
      fill="white"
    />
    <path
      d="M16.2123 7.25L11 15.8984L16.2123 18.9794V13.5293V7.25Z"
      fill="white"
    />
    <path
      d="M16.2123 20.6752L16.1482 20.7535V24.7534L16.2123 24.9408L21.4278 17.5958L16.2123 20.6752Z"
      fill="white"
    />
    <path
      d="M16.2123 24.9408V20.6752L11 17.5958L16.2123 24.9408Z"
      fill="white"
    />
    <path
      d="M16.2122 18.9793L21.4244 15.8984L16.2122 13.5293V18.9793Z"
      fill="white"
    />
    <path d="M11 15.8984L16.2122 18.9794V13.5293L11 15.8984Z" fill="white" />
    <rect x="19" y="19" width="15" height="15" rx="7.5" fill="#627eea" />
    <path
      d="M26.6591 19.9375L26.5737 20.2277V28.6493L26.6591 28.7346L30.5683 26.4238L26.6591 19.9375Z"
      fill="#FFFFFF"
    />
    <path
      d="M26.6592 19.9375L22.75 26.4238L26.6592 28.7346V24.647V19.9375Z"
      fill="#FFFFFF"
    />
    <path
      d="M26.6592 30.0063L26.6111 30.065V33.065L26.6592 33.2055L30.5708 27.6968L26.6592 30.0063Z"
      fill="#FFFFFF"
    />
    <path
      d="M26.6592 33.2055V30.0063L22.75 27.6968L26.6592 33.2055Z"
      fill="#FFFFFF"
    />
    <path
      d="M26.6592 28.7345L30.5683 26.4238L26.6592 24.647V28.7345Z"
      fill="#FFFFFF"
    />
    <path
      d="M22.75 26.4238L26.6591 28.7345V24.647L22.75 26.4238Z"
      fill="#FFFFFF"
    />
  </svg>
);

export default WormholeETH;
