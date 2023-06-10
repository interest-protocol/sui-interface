import { Box } from '@interest-protocol/ui-kit';
import dynamic from 'next/dynamic';
import { FC } from 'react';

import { SwapSliderProps } from '../swap.types';

const Slider = dynamic(
  import('@interest-protocol/ui-kit').then(({ Slider }) => Slider),
  { ssr: false }
);

const SwapFormFieldSlider: FC<SwapSliderProps> = ({
  balance,
  setValue,
  currentValue,
}) => (
  <Box mx="s">
    <Slider
      min={0}
      max={100}
      disabled={!balance}
      initial={
        currentValue && balance
          ? balance >= currentValue
            ? (currentValue * 100) / balance
            : 100
          : 0
      }
      onChange={(value: number) => {
        setValue('maxValue', value === 100);
        setValue('from.value', `${(value / 100) * balance}`);
        setValue('lock', false);
      }}
    />
  </Box>
);

export default SwapFormFieldSlider;
