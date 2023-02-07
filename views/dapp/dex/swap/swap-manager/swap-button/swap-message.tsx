import { useTranslations } from 'next-intl';
import { FC } from 'react';
import MessageKeys from 'use-intl/dist/utils/MessageKeys';

import { Box, Typography } from '@/elements';

import { SwapMessageProps } from './swap-button.types';

const SwapMessage: FC<SwapMessageProps> = ({
  Icon,
  color,
  message,
  extraData,
}) => {
  const t = useTranslations();
  return (
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
        <Icon width="1.2rem" maxHeight="1.2rem" maxWidth="1.2rem" />
      </Box>
      <Typography
        fontSize="S"
        variant="normal"
        maxWidth="40rem"
        overflow="hidden"
      >
        {t(message as MessageKeys<IntlMessages, keyof IntlMessages>, extraData)}
      </Typography>
    </Box>
  );
};

export default SwapMessage;
