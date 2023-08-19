import { FC } from 'react';

import { SVGProps } from '../svg.types';

const DoubleArrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 11 9" {...props}>
    <path
      d="M3.75 4.31066L0.75 1.31066L1.81066 0.25L5.34099 3.78033V4.84099L1.81066 8.37132L0.75 7.31066L3.75 4.31066ZM9 4.31066L6 1.31066L7.06066 0.25L10.591 3.78033V4.84099L7.06066 8.37132L6 7.31066L9 4.31066Z"
      fill={props.fill || 'currentColor'}
    />
  </svg>
);

export default DoubleArrow;
