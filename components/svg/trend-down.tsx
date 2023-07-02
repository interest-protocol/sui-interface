import { FC } from 'react';

import { SVGProps } from './svg.types';

const TrendDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 19 13"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.50009 6.36621L1.87509 0.741211L0.991211 1.62509L7.05815 7.69204C7.30223 7.93611 7.69796 7.93611 7.94204 7.69204L10.6251 5.00898L16.6162 11.0001H12.5001V12.2501H18.1251L18.7501 11.6251V6.00009H17.5001V10.1162L11.067 3.68315C10.823 3.43907 10.4272 3.43907 10.1832 3.68315L7.50009 6.36621Z"
      fill="currentColor"
    />
  </svg>
);

export default TrendDown;
