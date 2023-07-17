import { FC } from 'react';

import { SVGProps } from './svg.types';

const Settings: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 18 16"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 0.875V3.125H18V4.625H7.5V6.875H6V4.625V3.125V0.875H7.5ZM0 3.125H4.5V4.625H0V3.125ZM10.5 11.375H0V12.875H10.5V11.375ZM18 11.375H13.5V9.125H12V11.375V12.875V15.125H13.5V12.875H18V11.375Z"
      fill="currentColor"
    />
  </svg>
);

export default Settings;
