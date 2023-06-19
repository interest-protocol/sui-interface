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

import { CircleChartProps } from './circle.types';

const CircleChart: FC<CircleChartProps> = ({ data }) => {
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

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cy={140}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          stroke=""
          onClick={undefined}
          legendType="circle"
        >
          {data.map((_entry: unknown, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value="Crypto 14"
            position="center"
            color={dark ? 'white' : 'black'}
            style={{
              fontSize: '1.125rem',
              color: 'currentcolor',
            }}
          />
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
