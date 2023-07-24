import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Borrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => {
  const { colors } = useTheme() as Theme;
  return (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <rect
        x="0.285645"
        width="20"
        height="20"
        rx="10"
        fill={colors['inverseSurface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9107 5.59769L12.8445 7.28979L13.6677 6.34907L10.6973 3.75H9.87417L6.90381 6.34906L7.72694 7.28979L9.6607 5.59774V11.7204H10.9107V5.59769Z"
        fill={colors['surface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.03564 15.4704V11.0954H5.28564V14.8454H15.2856V11.0954H16.5356V15.4704L15.9106 16.0954H4.66064L4.03564 15.4704Z"
        fill={colors['surface']}
      />
    </svg>
  );
};
export default Borrow;
