import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { ISuiPCSVG, ISuiSVG, ISuiYNSVG } from '@/svg';

import { SuiDerivatedSVGProps } from './sui-derivated-svg.type';

const SuiDerivatedSVG: FC<SuiDerivatedSVGProps> = ({
  symbol,
  size,
  rounded,
}) => {
  const SVG =
    symbol == 'iSui'
      ? ISuiSVG
      : symbol == 'iSui-PC'
      ? ISuiPCSVG
      : symbol == 'iSui-YN'
      ? ISuiYNSVG
      : SUISVG;

  return (
    <SVG
      maxWidth={size}
      maxHeight={size}
      rounded={rounded}
      width="100%"
      height="100%"
      filled={symbol != 'Sui'}
    />
  );
};

export default SuiDerivatedSVG;
