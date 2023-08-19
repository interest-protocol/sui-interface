import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Bridge: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => {
  return (
    <svg style={{ maxWidth, maxHeight }} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16.5C5.17157 16.5 4.5 17.1716 4.5 18C4.5 18.8284 5.17157 19.5 6 19.5C6.82843 19.5 7.5 18.8284 7.5 18C7.5 17.1716 6.82843 16.5 6 16.5ZM3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4.5C17.1716 4.5 16.5 5.17157 16.5 6C16.5 6.82843 17.1716 7.5 18 7.5C18.8284 7.5 19.5 6.82843 19.5 6C19.5 5.17157 18.8284 4.5 18 4.5ZM15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9366 7.06342C17.2295 7.35631 17.2295 7.83119 16.9366 8.12408L8.12408 16.9366C7.83119 17.2295 7.35631 17.2295 7.06342 16.9366C6.77053 16.6437 6.77053 16.1688 7.06342 15.8759L15.8759 7.06342C16.1688 6.77053 16.6437 6.77053 16.9366 7.06342Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Bridge;
