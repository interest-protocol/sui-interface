import { FC } from 'react';

import { SVGProps } from '../svg.types';

const ConnectConnectorFragment: FC<SVGProps> = ({
  maxWidth,
  maxHeight,
  ...props
}) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 22 18"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.43451 7.44002C1.00251 7.14202 0.739502 6.56801 0.739502 5.77001C0.739502 4.07301 1.93249 2.00702 3.40149 1.15902C4.12449 0.742017 4.77952 0.696035 5.25952 0.959035L21.3115 10.282L17.1155 16.744L1.43451 7.44002Z"
      fill="#8CA8FF"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ConnectConnectorFragment;
