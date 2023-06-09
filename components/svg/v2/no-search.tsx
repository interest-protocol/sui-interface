import { FC } from 'react';

import { SVGProps } from '../svg.types';

const NoSearch: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3168 17.4156L17.24 10.1997L18.6832 11.5844L11.76 18.8003L10.3168 17.4156Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5844 10.3168L18.8003 17.24L17.4156 18.6832L10.1997 11.76L11.5844 10.3168Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5 5C9.25329 5 5 9.25329 5 14.5C5 19.7467 9.25329 24 14.5 24C19.7467 24 24 19.7467 24 14.5C24 9.25329 19.7467 5 14.5 5ZM3 14.5C3 8.14873 8.14873 3 14.5 3C20.8513 3 26 8.14873 26 14.5C26 20.8513 20.8513 26 14.5 26C8.14873 26 3 20.8513 3 14.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.925 20.5108L29.4142 28L28 29.4142L20.5108 21.925L21.925 20.5108Z"
      fill="currentColor"
    />
  </svg>
);

export default NoSearch;
