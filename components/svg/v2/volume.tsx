import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Volume: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 12"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.62037 0.363434L8.15741 0.826397V3.14121H5.37963L4.91667 3.60417V5.91899H2.13889L1.67593 6.38195V10.0857H0.75V11.0116H2.13889H5.37963H8.62037H11.8611H13.25V10.0857H12.3241V0.826397L11.8611 0.363434H8.62037ZM8.15741 4.06714V10.0857H5.84259V6.38195V4.06714H8.15741ZM4.91667 6.84491H2.60185V10.0857H4.91667V6.84491Z"
      fill="currentColor"
    />
  </svg>
);

export default Volume;
