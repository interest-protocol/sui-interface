import { FC } from 'react';

import BarChartComponent from './bar-chart';
import { ChartsProps } from './charts.types';
import CircleChart from './circle-chart';
import LinearChart from './linear-chart';
import StepsChart from './steps-chart';

const Chart: FC<ChartsProps> = ({ data, dataKey, type, xAxis, label }) => {
  return (
    <>
      {type === 'area' ? (
        <LinearChart dataKey={dataKey} xAxis={xAxis} data={data} />
      ) : type === 'bar' ? (
        <BarChartComponent dataKey={dataKey} xAxis={xAxis} data={data} />
      ) : type === 'pie' ? (
        <CircleChart label={label} dataKey={dataKey} data={data} />
      ) : type === 'steps' ? (
        <StepsChart dataKey={dataKey} xAxis={xAxis} data={data} />
      ) : null}
    </>
  );
};

export default Chart;
