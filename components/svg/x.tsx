import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M8 2H1L9.26 13.014L1.45 22H4.1L10.488 14.651L16 22H23L14.392 10.522L21.8 2H19.15L13.164 8.886L8 2ZM17 20L5 4H7L19 20H17Z"
      fill="currentColor"
    />
  </svg>
);

export default X;
