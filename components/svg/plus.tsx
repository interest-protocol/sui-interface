import { FC } from 'react';

import { SVGProps } from './svg.types';

const Plus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 19 18"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0625 0.75V0.1875H8.9375V0.75V8.4375H1.25H0.6875V9.5625H1.25H8.9375V17.25V17.8125H10.0625V17.25V9.5625H17.75H18.3125V8.4375H17.75H10.0625V0.75Z"
      fill="currentColor"
    />
  </svg>
);

export default Plus;
