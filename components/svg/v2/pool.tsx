import { FC } from 'react';

import { SVGProps } from '../svg.types';

const PoolSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4812 1.99997V10.0342L10.3902 14.9434L2.46234 14.9434V16.9434L10.8586 16.9434L11.6268 16.5836L16.2494 11.0364L16.4812 10.3962V1.99997H14.4812ZM17.0188 28.0379L17.0188 20.0036L21.1098 15.0944L29.0377 15.0944V13.0944L20.6414 13.0944L19.8732 13.4543L15.2506 19.0014L15.0188 19.6416L15.0188 28.0379H17.0188Z"
      fill="currentColor"
    />
  </svg>
);

export default PoolSVG;
