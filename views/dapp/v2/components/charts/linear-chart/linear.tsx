import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { Tooltip } from 'react-tooltip';
import {
  Area,
  AreaChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { LinearChartProps } from './linear.types';

const LinearChart: FC<LinearChartProps> = ({ visibleData, data }) => {
  const { dark } = useTheme() as Theme;
  const CustomizedLabel: FC<any> = (props: any) => {
    const { x, y, stroke, value } = props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={14} textAnchor="middle">
        {value}
      </text>
    );
  };

  const CustomizedAxisTick: FC<any> = (props: any) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={20} textAnchor="middle" fill="#C7C6CA">
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <Box height="217px" width="100%">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="6%"
                stopColor={dark ? 'rgba(180, 197, 255, 0.77)' : '#003ea8dd'}
              />
              <stop
                offset="7%"
                stopColor={dark ? 'rgba(180, 197, 255, 0.77)' : '#003ea8b7'}
              />
              <stop offset="85%" stopColor="rgba(180, 197, 255, 0)" />
            </linearGradient>
          </defs>
          <Tooltip />
          <XAxis
            dataKey="name"
            axisLine={false}
            interval={0}
            minTickGap={0}
            domain={['auto', 'auto']}
            tickCount={visibleData.length}
            ticks={visibleData}
            tick={<CustomizedAxisTick />}
            tickLine={false}
          />
          <LabelList content={<CustomizedLabel />} />
          <YAxis hide={true} />
          <Area
            type="linear"
            dataKey="pv"
            stroke="#B4C5FF"
            fill="url(#chartGradient)"
            fillOpacity={0.15}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LinearChart;
