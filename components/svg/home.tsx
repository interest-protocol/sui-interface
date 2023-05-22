import { FC } from 'react';

import { SVGProps } from './svg.types';

const Home: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 19"
    fill="none"
    {...props}
  >
    <path
      d="M17.0062 8.27496L9.50625 1.45933C9.36799 1.33284 9.18739 1.2627 9 1.2627C8.81261 1.2627 8.63201 1.33284 8.49375 1.45933L0.99375 8.27496C0.918279 8.34623 0.857833 8.43189 0.815972 8.52688C0.77411 8.62188 0.751679 8.72429 0.75 8.82808V17.5C0.75 17.6989 0.829018 17.8896 0.96967 18.0303C1.11032 18.1709 1.30109 18.25 1.5 18.25H16.5C16.6989 18.25 16.8897 18.1709 17.0303 18.0303C17.171 17.8896 17.25 17.6989 17.25 17.5V8.82808C17.2483 8.72429 17.2259 8.62188 17.184 8.52688C17.1422 8.43189 17.0817 8.34623 17.0062 8.27496V8.27496Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);

export default Home;
