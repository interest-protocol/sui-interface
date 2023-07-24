import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Volume: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => {
  const { colors } = useTheme() as Theme;
  return (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <rect
        x="0.428711"
        width="20"
        height="20"
        rx="10"
        fill={colors['inverseSurface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0491 4.375L11.5861 4.83796V7.15278H8.80834L8.34538 7.61574V9.93056H5.5676L5.10464 10.3935V14.0972H4.17871V15.0231H5.5676H8.80834H12.0491H15.2898H16.6787V14.0972H15.7528V4.83796L15.2898 4.375H12.0491ZM14.8269 14.0972V5.30093H12.512V7.61574V14.0972H14.8269ZM11.5861 14.0972V8.0787H9.2713V10.3935V14.0972H11.5861ZM6.03056 10.8565H8.34538V14.0972H6.03056V10.8565Z"
        fill={colors['surface']}
      />
    </svg>
  );
};
export default Volume;
