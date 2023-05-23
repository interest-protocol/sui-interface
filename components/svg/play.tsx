import { FC } from 'react';

import { SVGProps } from './svg.types';

const Play: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 32 32" {...props}>
    <path
      d="M29.0375 14.2875L11.0375 3.30002C10.7377 3.11002 10.3914 3.00603 10.0365 2.99942C9.68159 2.99281 9.33169 3.08382 9.02499 3.26252C8.71376 3.43328 8.4543 3.68477 8.27392 3.99053C8.09355 4.29629 7.99892 4.64502 7.99999 5.00002V27C7.99892 27.355 8.09355 27.7037 8.27392 28.0095C8.4543 28.3153 8.71376 28.5668 9.02499 28.7375C9.33169 28.9162 9.68159 29.0072 10.0365 29.0006C10.3914 28.994 10.7377 28.89 11.0375 28.7L29.0375 17.7125C29.3325 17.5345 29.5766 17.2834 29.746 16.9833C29.9154 16.6833 30.0044 16.3446 30.0044 16C30.0044 15.6555 29.9154 15.3168 29.746 15.0167C29.5766 14.7167 29.3325 14.4655 29.0375 14.2875Z"
      fill="currentColor"
    />
  </svg>
);

export default Play;
