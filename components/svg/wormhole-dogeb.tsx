import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeDOGEB: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#FDE68A" />
    <path
      d="M14.0944 4.00089C12.4015 4.00089 6.93886 4.00089 6.93886 4.00089V14.6842H4V17.3009H6.93897V27.9842H15.2766C15.2766 27.9842 27 28.9308 27 16.1926C27 3.66212 15.7875 4.00089 14.0944 4.00089ZM15.0848 23.5508C14.1985 23.5508 11.6347 23.5508 11.6347 23.5508V17.301H16.8098V14.6843H11.6347V8.43429C11.6347 8.43429 13.695 8.43429 14.925 8.43429C16.1549 8.43429 22.344 8.91134 22.3534 16.2792C22.3631 23.647 15.9711 23.5508 15.0848 23.5508Z"
      fill="#211D42"
    />
    <rect x="23" y="3" width="6" height="6" rx="3" fill="#211D42" />
    <rect
      x="23"
      y="3"
      width="6"
      height="6"
      rx="3"
      stroke="#FDE68A"
      strokeWidth="2"
    />
  </svg>
);

export default WormholeDOGEB;
