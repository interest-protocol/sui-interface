import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { PercentageSVG } from '@/components/svg/v2';

import { SlippageToleranceProps } from './settings-modal.types';

const SlippageTolerance: FC<SlippageToleranceProps> = ({
  register,
  setValue,
}) => (
  <Box width="100%">
    <Typography variant="extraSmall" alignSelf="start" mb="s">
      Slippage tolerance
    </Typography>
    <TextField
      min="2"
      max="10"
      type="number"
      textAlign="right"
      placeholder="0.10"
      {...register('slippage')}
      Suffix={
        <Box px="s" color="#C7C6CA" width="3rem" textAlign="right">
          <PercentageSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Box>
      }
      Prefix={
        <Button
          p="0"
          size="small"
          width="2.5rem"
          height="2.5rem"
          variant="filled"
          fontWeight="700"
          fontSize="0.6rem"
          justifyContent="center"
          textTransform="uppercase"
          onClick={() => setValue('slippage', 0.1)}
        >
          Auto
        </Button>
      }
    />
  </Box>
);

export default SlippageTolerance;
