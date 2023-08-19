import { FC } from 'react';

import { SVGProps } from '../svg.types';

const VolumeLast: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 19"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5926 0.981483L11.8519 1.72222V5.42593H7.40741L6.66667 6.16667V9.87037H2.22222L1.48148 10.6111V16.537H0V18.0185H2.22222H7.40741H12.5926H17.7778H20V16.537H18.5185V1.72222L17.7778 0.981483H12.5926ZM11.8519 6.90741V16.537H8.14815V10.6111V6.90741H11.8519ZM6.66667 11.3519H2.96296V16.537H6.66667V11.3519Z"
      fill="currentColor"
    />
  </svg>
);

export default VolumeLast;
