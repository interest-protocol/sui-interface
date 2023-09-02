import { Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC, useCallback, useState } from 'react';
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { SEMANTIC_COLORS } from '@/constants';
import useEventListener from '@/hooks/use-event-listener';

import CustomTooltip from '../tooltip';
import { CircleChartProps } from './circle-chart.types';

const CircleChart: FC<CircleChartProps> = ({
  data,
  label,
  dataKey,
  inDollars,
}) => {
  const { dark } = useTheme() as Theme;
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const renderCustomLabel = ({ cx, cy }: any) => (
    <g>
      <text
        x={cx}
        y={cy}
        dy={isMobile ? '36%' : '38%'}
        dx="50%"
        textAnchor="middle"
        fill={dark ? 'white' : 'black'}
        fontSize={18}
      >
        {label}
      </text>
    </g>
  );

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cy={80}
          innerRadius={60}
          outerRadius={75}
          fill="#8884d8"
          dataKey={dataKey}
          nameKey="label"
          stroke=""
          onClick={undefined}
          legendType="circle"
        >
          {data.map((_entry: unknown, index: number) => (
            <Cell
              key={`cell-${index}`}
              fill={
                SEMANTIC_COLORS[index % SEMANTIC_COLORS.length][
                  dark ? 'dark' : 'light'
                ]
              }
            />
          ))}
          <Label content={renderCustomLabel} position="center" />
        </Pie>
        <Legend
          iconSize={8}
          formatter={(value) => (
            <Typography
              as="span"
              color="#6B7280"
              variant="small"
              fontSize={['xs', 's', 's', 's']}
              marginLeft="0.25rem"
            >
              {value}
            </Typography>
          )}
          wrapperStyle={{ top: '170px', bottom: 'unset' }}
        />
        <Tooltip content={<CustomTooltip inDollars={inDollars} />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircleChart;
