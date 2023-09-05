import { FC } from 'react';

import { SVGProps } from '../svg.types';

const MiddlePaper: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 10"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 2.5H10.75V3.75H3.25V2.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 5H10.75V6.25H3.25V5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.03163 0.267551C1.21195 0.0962411 1.45652 0 1.71154 0H12.2885C12.5435 0 12.788 0.0962408 12.9684 0.267551C13.1487 0.438861 13.25 0.671207 13.25 0.913475V9.59148L12.5542 10L10.8462 9.18866L9.13808 10H8.70807L7 9.18865L5.29193 10H4.86192L3.15385 9.18865L1.44578 10L0.75 9.59148V0.913475C0.75 0.671206 0.851305 0.43886 1.03163 0.267551ZM12.2885 0.913475L1.71154 0.913475L1.71154 8.85247L2.93884 8.26949H3.36885L5.07692 9.08084L6.78499 8.26949H7.21501L8.92308 9.08084L10.6311 8.26949H11.0612L12.2885 8.85247V0.913475Z"
      fill="currentColor"
    />
  </svg>
);

export default MiddlePaper;
