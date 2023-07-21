import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  XAxisProps,
} from 'recharts';

import { ChartsProps } from '../charts.types';
import CustomTooltip from './tooltip';

const CustomXAxisTick: FC<XAxisProps> = (props) => {
  const { dark } = useTheme() as Theme;
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
        <tspan fill={dark ? 'white' : 'black'}>{payload.value}</tspan>
      </text>
    </g>
  );
};

const StepsChart: FC<ChartsProps> = ({ data }) => {
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer height={227}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          opacity={0.25}
          horizontal={false}
          stroke={colors['outline.outlineVariant']}
        />
        <XAxis
          dataKey="day"
          type="number"
          tickCount={5}
          tickMargin={2}
          tickLine={false}
          tick={<CustomXAxisTick />}
        />
        <Tooltip
          animationDuration={600}
          content={<CustomTooltip />}
          animationEasing="ease-in-out"
          cursor={{
            strokeWidth: 0.5,
            strokeDasharray: '3 3',
            stroke: colors['outline'],
          }}
        />
        <Line
          dot={false}
          dataKey="amount"
          type="stepBefore"
          stroke={colors['primary']}
          activeDot={{ stroke: 'transparent', r: 3.5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StepsChart;
