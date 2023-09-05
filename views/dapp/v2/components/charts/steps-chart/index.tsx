import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { BaseChartProps } from '../base-chart.types';
import CustomTooltip from '../tooltip';
import CustomXAxisTick from './x-axis-tick';

const StepsChart: FC<BaseChartProps> = ({
  data,
  xAxis,
  dataKey,
  inDollars,
  onlyLine,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {!onlyLine && (
          <>
            <CartesianGrid
              opacity={0.25}
              horizontal={false}
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
              allowDuplicatedCategory={false}
            />
          </>
        )}
        <Tooltip
          animationDuration={600}
          animationEasing="ease-in-out"
          content={<CustomTooltip inDollars={inDollars} />}
          cursor={{
            strokeWidth: 0.5,
            strokeDasharray: '3 3',
            stroke: colors['outline'],
          }}
        />
        <Line
          dot={false}
          dataKey={dataKey}
          type="stepBefore"
          stroke={colors['primary']}
          activeDot={{ stroke: 'transparent', r: 3.5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StepsChart;
