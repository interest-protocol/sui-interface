import { FC } from 'react';

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

export default CustomizedAxisTick;
