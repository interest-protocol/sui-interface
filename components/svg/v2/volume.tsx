import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Volume: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 18"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5926 0L11.8519 0.740741V4.44444H7.40741L6.66667 5.18518V8.88889H2.22222L1.48148 9.62963V15.5556H0V17.037H2.22222H7.40741H12.5926H17.7778H20V15.5556H18.5185V0.740741L17.7778 0H12.5926ZM17.037 15.5556V1.48148H13.3333V5.18518V15.5556H17.037ZM11.8519 15.5556V5.92593H8.14815V9.62963V15.5556H11.8519ZM2.96296 10.3704H6.66667V15.5556H2.96296V10.3704Z"
      fill="currentColor"
    />
  </svg>
);

export default Volume;
