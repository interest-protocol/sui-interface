import { FC } from 'react';

import { SVGProps } from './svg.types';

const Swap: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0061 12.5644L19.5706 18.3083L20.5583 17.1794L14.639 12L20.5583 6.82052L19.5706 5.69165L13.0061 11.4355V12.5644ZM10.9939 11.4355L4.42947 5.69166L3.44171 6.82053L9.36108 12L3.44171 17.1794L4.42947 18.3083L10.9939 12.5644V11.4355Z"
      fill="currentColor"
    />
  </svg>
);

export default Swap;
