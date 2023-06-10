import { FC } from 'react';

import { SVGProps } from './svg.types';

const ShieldCheck: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 36 36"
    fill="none"
    {...props}
  >
    <path
      d="M5.625 16.1297V7.875C5.625 7.57663 5.74353 7.29048 5.95451 7.07951C6.16548 6.86853 6.45163 6.75 6.75 6.75H29.25C29.5484 6.75 29.8345 6.86853 30.0455 7.07951C30.2565 7.29048 30.375 7.57663 30.375 7.875V16.1297C30.375 27.9422 20.3484 31.8516 18.3516 32.5125C18.1247 32.5965 17.8753 32.5965 17.6484 32.5125C15.6516 31.8516 5.625 27.9422 5.625 16.1297Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M24.1875 14.625L15.9328 22.5L11.8125 18.5625"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default ShieldCheck;
