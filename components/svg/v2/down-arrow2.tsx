import { FC } from 'react';

import { SVGProps } from '../svg.types';

export const DownArrowSecondary: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13.4328L16.2486 9L17.25 10.0448L12.5007 15L11.4993 15L6.75 10.0448L7.7514 9L12 13.4328Z"
      fill="currentColor"
    />
  </svg>
);

export default DownArrowSecondary;
