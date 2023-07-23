import { Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
} from 'recharts';

import { CircleChartProps } from './circle-chart.types';

const CircleChart: FC<CircleChartProps> = ({ data, label, dataKey }) => {
  const { dark } = useTheme() as Theme;
  const COLORS = [
    dark ? '#BEF264' : '#84CC16',
    dark ? '#FCA5A5' : '#EF4444',
    dark ? '#FDBA74' : '#F97316',
    dark ? '#67E8F9' : '#06B6D4',
    dark ? '#FDBA74' : '#F59E0B',
    dark ? '#D8B4FE' : '#A855F7',
    dark ? '#F9A8D4' : '#EC4899',
  ];

  const renderCustomLabel = (props: any) => {
    const { cx, cy } = props;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={150}
          dx={175}
          textAnchor="middle"
          fill={dark ? 'white' : 'black'}
          fontSize={18}
        >
          {label}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cy={140}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey={dataKey}
          stroke=""
          onClick={undefined}
          legendType="circle"
        >
          {data.map((_entry: unknown, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label content={renderCustomLabel} position="center" />
        </Pie>
        <Legend
          iconSize={8}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          formatter={(value, _entry) => (
            <Typography
              as="span"
              marginLeft="0.25rem"
              variant="small"
              color="#79767A"
            >
              {value}
            </Typography>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleChart;
