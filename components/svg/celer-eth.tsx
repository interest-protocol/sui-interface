import { FC } from 'react';

import { SVGProps } from './svg.types';

const CelerETH: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#FBF8FD" />
    <path
      d="M16.3394 2L16.1572 2.61914V20.5852L16.3394 20.767L24.679 15.8375L16.3394 2Z"
      fill="#211D42"
    />
    <path d="M16.3397 2L8 15.8375L16.3397 20.7671V12.0469V2Z" fill="#211D42" />
    <path
      d="M16.34 23.4808L16.2373 23.6059V30.0058L16.34 30.3056L24.6846 18.5537L16.34 23.4808Z"
      fill="#211D42"
    />
    <path
      d="M16.3397 30.3057V23.4808L8 18.5537L16.3397 30.3057Z"
      fill="#211D42"
    />
    <path
      d="M16.3394 20.7669L24.6789 15.8375L16.3394 12.0469V20.7669Z"
      fill="#211D42"
    />
    <path d="M8 15.8375L16.3395 20.767V12.0469L8 15.8375Z" fill="#211D42" />
    <rect x="23" y="3" width="6" height="6" rx="3" fill="#211D42" />
    <rect
      x="23"
      y="3"
      width="6"
      height="6"
      rx="3"
      stroke="#FBF8FD"
      strokeWidth="2"
    />
  </svg>
);

export default CelerETH;
