import { FC } from 'react';

import BarChart from './bar-chart';
import { ChartsProps } from './charts.types';
import CircleChart from './circle-chart';
import LinearChart from './linear-chart';
import StepsChart from './steps-chart';

const Chart: FC<ChartsProps> = ({
  data,
  dataKey,
  type,
  xAxis,
  label,
  inDollars,
}) => (
  <>
    {type === 'area' ? (
      <LinearChart
        dataKey={dataKey}
        xAxis={xAxis}
        data={data}
        inDollars={inDollars}
      />
    ) : type === 'bar' ? (
      <BarChart
        dataKey={dataKey}
        xAxis={xAxis}
        data={data}
        inDollars={inDollars}
      />
    ) : type === 'pie' ? (
      <CircleChart
        label={label}
        dataKey={dataKey}
        data={data}
        inDollars={inDollars}
      />
    ) : type === 'steps' ? (
      <StepsChart
        dataKey={dataKey}
        xAxis={xAxis}
        data={data}
        inDollars={inDollars}
      />
    ) : null}
  </>
);

export default Chart;
