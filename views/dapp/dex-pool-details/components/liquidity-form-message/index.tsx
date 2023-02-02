import { FC } from 'react';

import { Box, Typography } from '@/elements';
import { WarningSVG } from '@/svg';

import { LiquidityFormMessageProps } from './liquidity-form-message.types';

const LiquidityFormMessage: FC<LiquidityFormMessageProps> = ({
  color,
  message,
}) => (
  <Box
    p="L"
    my="M"
    display="flex"
    bg="background"
    borderRadius="M"
    alignItems="center"
    color={color ?? 'text'}
  >
    <Box mr={['L', 'M']}>
      <WarningSVG width="1.2rem" maxHeight="1.2rem" maxWidth="1.2rem" />
    </Box>
    <Typography
      fontSize="S"
      variant="normal"
      maxWidth="40rem"
      overflow="hidden"
    >
      {message}
    </Typography>
  </Box>
);

export default LiquidityFormMessage;
