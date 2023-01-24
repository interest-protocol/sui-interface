import { isEmpty } from 'ramda';
import { FC } from 'react';

import { TimesSVG } from '@/svg';

import { SwapManagerProps } from '../swap.types';
import { findMarket } from '../swap.utils';
import SwapMessage from './swap-message';

const SwapManager: FC<SwapManagerProps> = ({
  tokenInType,
  tokenOutType,
  poolsMap,
}) => {
  const markets = findMarket(poolsMap, tokenInType, tokenOutType);
  const hasNoMarket = !markets.length;

  const hasNotPool = !poolsMap[tokenInType]?.[tokenOutType];

  if (isEmpty(poolsMap)) return null;

  return (
    <>
      {tokenInType === tokenOutType && (
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
      {hasNotPool && (
        <SwapMessage
          color="error"
          Icon={TimesSVG}
          message="dexSwap.swapMessage.noPool"
        />
      )}
    </>
  );
};

export default SwapManager;
