import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { BaseChartProps } from '../base-chart.types';
import CustomTooltip from '../tooltip';
import CustomCursor from './custom-cursor';
import CustomXAxisTick from './x-axis-tick';

const BarChartComponent: FC<BaseChartProps> = ({
  data,
  xAxis,
  dataKey,
  inDollars,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 5,
          left: 20,
          right: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid
          opacity={0.25}
          vertical={false}
          stroke={colors['outline.outlineVariant']}
        />
        <XAxis
          tickMargin={2}
          type="category"
          minTickGap={15}
          dataKey={xAxis}
          tickLine={false}
          tick={<CustomXAxisTick />}
          interval="preserveStartEnd"
          allowDuplicatedCategory={true}
        />
        <Tooltip
          cursor={<CustomCursor />}
          animationEasing="ease-in-out"
          content={<CustomTooltip inDollars={inDollars} />}
        />
        <Bar dataKey={dataKey} barSize={8} fill={colors['primary']} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
