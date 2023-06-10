import { FC } from 'react';

import { SVGProps } from './svg.types';

const Pause: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 124.5 124.5" {...props}>
    <g>
      <path
        fill="currentColor"
        d="M116.35,124.5c3.3,0,6-2.699,6-6V6c0-3.3-2.7-6-6-6h-36c-3.3,0-6,2.7-6,6v112.5c0,3.301,2.7,6,6,6H116.35z"
      />
      <path
        fill="currentColor"
        d="M44.15,124.5c3.3,0,6-2.699,6-6V6c0-3.3-2.7-6-6-6h-36c-3.3,0-6,2.7-6,6v112.5c0,3.301,2.7,6,6,6H44.15z"
      />
    </g>
  </svg>
);

export default Pause;
