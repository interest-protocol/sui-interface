import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Login: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3H12V4.5L18 4.5V19.5H12V21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V4.5C19.5 4.10218 19.342 3.72065 19.0607 3.43934C18.7794 3.15804 18.3978 3 18 3ZM8.81252 7.00184L13.8107 12L8.81252 16.9982L7.75186 15.9375L10.9394 12.75H1.5V11.25H10.9394L7.75186 8.0625L8.81252 7.00184Z"
      fill="currentColor"
    />
  </svg>
);

export default Login;
