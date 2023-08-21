import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const CustomCursor: FC = ({ x, y, height }: any) => {
  const { colors } = useTheme() as Theme;

  return (
    <g>
      <line
        x1={x + 7}
        y1={y}
        x2={x + 7}
        y2={height}
        stroke={colors['outline']}
        strokeWidth={0.5}
        strokeDasharray="3 3"
      />
    </g>
  );
};

export default CustomCursor;
