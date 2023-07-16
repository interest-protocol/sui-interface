import { FC } from 'react';

import { SVGProps } from './svg.types';

const Faucet: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 25"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.125 8.0626V16.9374L12 21.3885L19.875 16.9374V8.0626L12 3.61151L4.125 8.0626ZM3.00596 6.97208L11.631 2.09708H12.369L20.994 6.97208L21.375 7.625V17.375L20.994 18.0279L12.369 22.9029H11.631L3.00596 18.0279L2.625 17.375V7.625L3.00596 6.97208Z"
      fill="currentColor"
    />
  </svg>
);

export default Faucet;
