import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CustomXAxisTickProps } from './x-axis-tick.types';

const CustomXAxisTick: FC<CustomXAxisTickProps> = (props) => {
  const { dark } = useTheme() as Theme;
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#666"
        transform="rotate(-25)"
      >
        <tspan fill={dark ? 'white' : 'black'}>{payload?.value}</tspan>
      </text>
    </g>
  );
};

export default CustomXAxisTick;
