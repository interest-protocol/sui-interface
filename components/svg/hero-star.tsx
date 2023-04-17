import { FC } from 'react';

import { SVGProps } from './svg.types';

const HeroStar: FC<SVGProps & { noFill?: boolean }> = ({
  maxHeight,
  maxWidth,
  noFill,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 31 30"
    fill="none"
    stroke="currentColor"
    strokeWidth="1px"
    {...props}
  >
    <path
      d="M14.3068 1.02513C14.576 -0.115472 16.1993 -0.115474 16.4685 1.02513L18.7636 10.7513C18.8602 11.1608 19.1799 11.4805 19.5893 11.5771L29.3155 13.8722C30.4561 14.1414 30.4562 15.7647 29.3155 16.0338L19.5893 18.3289C19.1799 18.4255 18.8602 18.7452 18.7636 19.1547L16.4685 28.8809C16.1993 30.0215 14.576 30.0215 14.3068 28.8809L12.0118 19.1547C11.9151 18.7452 11.5954 18.4255 11.186 18.3289L1.45976 16.0338C0.319159 15.7647 0.319158 14.1414 1.45976 13.8722L11.186 11.5771C11.5954 11.4805 11.9151 11.1608 12.0118 10.7514L14.3068 1.02513Z"
      fill={noFill ? 'none' : 'white'}
    />
  </svg>
);

export default HeroStar;
