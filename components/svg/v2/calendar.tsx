import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Calendar: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 20"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 2V0.5H12.75V2H5.25V0.5H3.75V2H0.75L0 2.75V6.5V8V19.25L0.75 20H17.25L18 19.25V8V6.5V2.75L17.25 2H14.25ZM16.5 6.5V3.5H14.25V5H12.75V3.5H5.25V5H3.75V3.5H1.5V6.5H16.5ZM1.5 8V18.5H16.5V8H1.5Z"
      fill="currentCOlor"
    />
  </svg>
);

export default Calendar;
