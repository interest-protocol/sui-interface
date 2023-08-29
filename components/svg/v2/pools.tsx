import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Pools: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 17"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.19391 0.249969L8.19391 5.27136L5.63707 8.3396L0.682129 8.3396V9.5896L5.92981 9.5896L6.40995 9.36472L9.29905 5.89775L9.44391 5.49764V0.24997L8.19391 0.249969ZM9.77993 16.5237L9.77993 11.5023L12.3368 8.43402L17.2917 8.43402L17.2917 7.18402L12.044 7.18402L11.5639 7.4089L8.67479 10.8759L8.52993 11.276L8.52993 16.5237H9.77993Z"
      fill="currentColor"
    />
  </svg>
);

export default Pools;
