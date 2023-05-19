import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Box, Typography } from '@/elements';
import { TTranslatedMessage } from '@/interface';
import { LoadingSVG, TimesSVG } from '@/svg';
import SwapPath from '@/views/dapp/dex/swap/swap-path';

import { SwapMessageProps, SwapMessagesProps } from './swap-manager.types';

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
        {t(message as TTranslatedMessage, extraData)}
      </Typography>
    </Box>
  );
};

const SwapMessages: FC<SwapMessagesProps> = ({
  control,
  isFetchingSwapAmountIn,
  isFetchingSwapAmountOut,
  error,
  isZeroSwapAmountOut,
  hasNoMarket,
  markets,
  isZeroSwapAmountIn,
}) => {
  const tokenIn = useWatch({ control: control, name: 'tokenIn' });
  const tokenOut = useWatch({ control: control, name: 'tokenOut' });

  const readyToSwap =
    !(error && +tokenIn.value > 0) &&
    !(error && +tokenOut.value > 0) &&
    !isFetchingSwapAmountOut &&
    !(isZeroSwapAmountOut && !!+tokenIn.value && !isFetchingSwapAmountOut) &&
    !isFetchingSwapAmountIn &&
    !(isZeroSwapAmountIn && !!+tokenOut.value && !isFetchingSwapAmountIn);
  !(tokenIn.type === tokenOut.type) && !hasNoMarket;
  return (
    <>
      {isFetchingSwapAmountIn ||
        (isFetchingSwapAmountOut && (
          <SwapMessage
            Icon={LoadingSVG}
            message="dexSwap.swapMessage.fetchingAmounts"
          />
        ))}
      {(isZeroSwapAmountIn && !!+tokenIn.value && !isFetchingSwapAmountIn) ||
        (isZeroSwapAmountOut &&
          !!+tokenOut.value &&
          !isFetchingSwapAmountOut && (
            <SwapMessage
              color="error"
              Icon={TimesSVG}
              extraData={{
                symbol: +tokenIn.value ? tokenIn.symbol : tokenOut.symbol,
              }}
              message="dexSwap.swapMessage.increaseAmount"
            />
          ))}
      {tokenIn.type === tokenOut.type && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.sameOut"
        />
      )}
      {hasNoMarket && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.noMarket"
        />
      )}
      {error && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.error"
        />
      )}
      {readyToSwap && <SwapPath markets={markets} />}
    </>
  );
};

export default SwapMessages;
