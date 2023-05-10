import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeETH: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 105 171"
    fill="none"
    {...props}
  >
    <path
      d="M52.4806 0.775757L0.478271 87.0705L52.4806 63.4349V0.775757Z"
      fill="#8A92B2"
    />
    <path
      d="M52.4806 63.4349L0.478271 87.0706L52.4806 117.817V63.4349ZM104.493 87.0706L52.4806 0.775757V63.4349L104.493 87.0706Z"
      fill="#62688F"
    />
    <path
      d="M52.4807 117.817L104.493 87.0706L52.4807 63.4349V117.817Z"
      fill="#454A75"
    />
    <path
      d="M0.478271 96.9373L52.4806 170.224V127.665L0.478271 96.9373Z"
      fill="#8A92B2"
    />
    <path
      d="M52.4807 127.665V170.224L104.522 96.9373L52.4807 127.665Z"
      fill="#62688F"
    />
  </svg>
);

export default WormholeETH;
