import { Box, Slider } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SwapSliderProps } from '../swap.types';

const SwapFormFieldSlider: FC<SwapSliderProps> = ({
  getValues,
  balance,
  setValue,
}) => (
  <Box mx="s">
    <Slider
      min={0}
      max={100}
      disabled={!balance}
      initial={(+(getValues('from.value') ?? 0) * 100) / balance}
      onChange={(value: number) =>
        setValue('from.value', `${(value / 100) * balance}`)
      }
    />
  </Box>
);

export default SwapFormFieldSlider;
