import { FC } from 'react';

import { SVGProps } from '../../../../components/svg/svg.types';

const SUICoinShadowSVG: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 53 108"
    fill="none"
    {...props}
  >
    <path
      d="M58.9807 119.291C91.4432 119.291 117.759 92.7778 117.759 60.0725C117.759 27.3671 91.4432 0.854172 58.9807 0.854172C26.5181 0.854172 0.202026 27.3671 0.202026 60.0725C0.202026 92.7778 26.5181 119.291 58.9807 119.291Z"
      fill="#1B1B1F"
    />
    <path
      d="M58.9807 119.291C91.4432 119.291 117.759 92.7778 117.759 60.0725C117.759 27.3671 91.4432 0.854172 58.9807 0.854172C26.5181 0.854172 0.202026 27.3671 0.202026 60.0725C0.202026 92.7778 26.5181 119.291 58.9807 119.291Z"
      fill="#B6C4FF"
      fillOpacity="0.04"
    />
  </svg>
);

export default SUICoinShadowSVG;
