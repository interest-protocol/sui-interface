import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import {
  Area,
  AreaChart,
  LabelList,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Layout } from '../components';

const data = [
  { name: '1D', uv: 4000, pv: 2400, amt: 2400 },
  { name: '1W', uv: 3000, pv: 1398, amt: 2210 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1M', uv: 2000, pv: 9800, amt: 2290 },
  { name: '1Y', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'All', uv: 1890, pv: 4800, amt: 2181 },
];

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
      <text x={0} y={0} dy={20} textAnchor="middle" fill="#B4C5FF">
        {payload.value}
      </text>
    </g>
  );
};

const Home: FC = () => {
  return (
    <Layout dashboard>
      <Box variant="container">
        <Box
          width="100%"
          gridColumn="1/7"
          height="371px"
          color="onSurface"
          borderRadius="m"
          bg="surface.containerLow"
        >
          <Box display="flex" flexDirection="column" rowGap="1rem">
            <Typography variant="medium" color="white">
              Performance
            </Typography>
            <Typography variant="title4" color="white">
              USD 19.90
            </Typography>
          </Box>
          <Box height="217px" width="100%">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="6%" stopColor="rgba(180, 197, 255, 0.77)" />
                    <stop offset="7%" stopColor="rgba(180, 197, 255, 0.54)" />
                    <stop offset="85%" stopColor="rgba(19, 19, 22, 0)" />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  //   padding={{ left: 20, right: 20 }}
                  axisLine={false}
                  interval="preserveStartEnd"
                  tick={<CustomizedAxisTick />}
                />
                <LabelList content={<CustomizedLabel />} />
                <YAxis hide={true} />
                <Line dataKey="name" strokeWidth={1} />
                <Line dataKey="name" strokeWidth={3} />
                <Tooltip />
                {/* <Legend /> */}
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
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
